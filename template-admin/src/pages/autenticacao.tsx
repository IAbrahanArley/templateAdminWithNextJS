import AuthInput from "@/components/auth/AuthInput"
import { IconeAtencao } from "@/components/icons"
import useAppAuth from "@/data/hook/useAppAuth"
import { useState } from "react"

const autenticacao = () => {
    const contexto = useAppAuth()
    const [autenticacao, setAutenticacao] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const exibirErro = (mensagem: string, tempoEmSegundos = 5) =>{
        setErro(mensagem)
        setTimeout(() => setErro(''), tempoEmSegundos * 1000)
    }
    const submeter = () => {
        if (autenticacao === 'login') {
            console.log('login')
            exibirErro("Ocorreu um erro no login!")
        } else {
            console.log('cadastrar')
            exibirErro("Ocorreu um erro no cadastro!")
        }
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img src="./rb_739.png" alt="Imagem aleatoria da tela de autenticaçao" className="h-screen w-full " />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold mb-5">
                    {autenticacao === 'login' ? 'Entre com Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
                {erro && (

                    <div className=" bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded flex items-center ">
                        {IconeAtencao("size-6")}
                        <span className="ml-3 text">{erro}</span>

                    </div>
                )}

                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio={true}
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio={true}
                />
                <button
                    onClick={submeter}
                    className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded px-3 py-2 mt-6">

                    {autenticacao === 'login' ? 'Entrar' : 'Cadastrar'}

                </button>

                <hr className="my-6 border-gray-300 w-full" />
                <button
                    onClick={contexto.loginGoogle}
                    className="w-full bg-red-500 hover:bg-red-400 text-white rounded px-3 py-2">

                    Entrar com o Google

                </button>
                {autenticacao === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setAutenticacao('cadastro')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"> Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já tem um cadastro?
                        <a onClick={() => setAutenticacao('login')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                    "> Entre com suas credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}

export default autenticacao;