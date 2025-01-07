import { createContext, useEffect, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: string;
    children?: any;
    alternarTema?: () => any;
}

const AppContext = createContext<AppContextProps>({
    tema: undefined,
    alternarTema: undefined
});

export function AppProvider (props: AppContextProps){

    const [tema, setTema] = useState('')

        function alternarTema(){
            const novoTema =  tema === '' ? 'dark' : ''
            setTema(novoTema)
            localStorage.setItem('tema', novoTema)
        }

        useEffect(() => {
            const temaSalvo = localStorage.getItem('tema')
            setTema(temaSalvo || '')
        }, [])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext;