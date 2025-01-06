import { Ajustes, IconeInicio, IconeSair, IconeSino } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

const MenuLateral = () => {
    return (
        <aside className="flex flex-col">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20">
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Inicio" icone={IconeInicio}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={Ajustes}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul>
                <MenuItem className="text-red-600 hover:bg-red-400  hover:text-white" onClick={() => console.log("teste")} texto="Sair" icone={IconeSair}/>
            </ul>
        </aside>
    )
}

export default MenuLateral