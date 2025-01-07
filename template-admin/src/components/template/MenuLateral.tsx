import useAppAuth from "@/data/hook/useAppAuth"
import { Ajustes, IconeInicio, IconeSair, IconeSino } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

const MenuLateral = () => {
    const context = useAppAuth()
    return (
        <aside className="flex bg-gray-200 dark:bg-gray-900  flex-col">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeInicio}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={Ajustes}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem onClick={context.logout} className="text-red-600 dark:text-red-600 hover:bg-red-400  hover:text-white dark:hover:text-white" texto="Sair" icone={IconeSair}/>
            </ul>
        </aside>
    )
}

export default MenuLateral