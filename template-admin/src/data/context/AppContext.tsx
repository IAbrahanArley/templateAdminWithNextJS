import { createContext, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
    tema?: Tema;
    children?: any;
    alternarTema?: () => any;
}

const AppContext = createContext<AppContextProps>({
    tema: undefined,
    alternarTema: undefined
});

export function AppProvider (props: AppContextProps){

    const [tema, setTema] = useState<Tema>('')

        function alternarTema(){
            setTema( tema === '' ? 'dark' : '')
        }
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