import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '@/model/Usuario'
import router from 'next/router'
import Cookies from 'js-cookie';

interface AuthContextProps {
    usuario: Usuario
    carregando?: boolean
    loginGoogle: () => Promise<void>
    login: (email: string, senha: string) => Promise<void>
    cadastrar: (email: string, senha: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
    usuario: null,
    carregando: true,
    loginGoogle: async () => {},
    login: async () => {},
    cadastrar: async () => {},
    logout: async () => {}
})

const usuarioNormalizado = async (usuarioFirebase: firebase.User): Promise<Usuario> => {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName || '',
        email: usuarioFirebase.email || '',
        token,
        provedor: usuarioFirebase.providerData[0]?.providerId || '',
        imagemUrl: usuarioFirebase.photoURL || ''

    }
}

const gerenciarCookie = (logado: boolean) => {
    if (logado) {
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    const configurarSessao = async (usuarioFirebase) => {
        if (usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }
    useEffect(() =>{
        if(Cookies.get('admin-template-auth')){
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        }
    }, [])

    const login = async (email: string, senha: string) => {
        try {
            setCarregando(true)
            const res = await firebase.auth().signInWithEmailAndPassword(email, senha)
        
            await configurarSessao(res.user)
            router.push('/')
            
        } finally {
            setCarregando(false)
        }
    }

    const cadastrar = async (email: string, senha: string) => {
        try {
            setCarregando(true)
            const res = await firebase.auth().createUserWithEmailAndPassword(email, senha)
        
            await configurarSessao(res.user)
            router.push('/')
            
        } finally {
            setCarregando(false)
        }
    }

    const loginGoogle = async () => {
        try {
            setCarregando(true)
            const res = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configurarSessao(res.user)
            router.push('/')
            
        } finally {
            setCarregando(false)
        }
    }
    const logout = async () =>{
        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        }finally{
            setCarregando(false)
        }
    }

return (
    <AuthContext.Provider value={{
        usuario,
        loginGoogle,
        logout,
        carregando,
        cadastrar,
        login
    }}>
        {props.children}
    </AuthContext.Provider>
)
}

export default AuthContext;