import Link from "next/link";
import { ReactNode, MouseEvent } from "react";

interface MenuItemProps {
    url?: string;
    texto: string;
    icone: ReactNode; 
    className?: string;
    onClick?: (evento: MouseEvent<HTMLLIElement>) => void; 
}

const MenuItem = (props: MenuItemProps) => {
    function rederizarConteudo() {
        return (
            <div
                className={`flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200 text-gray-600 ${props.className}`}
            >
                {props.icone}
                <span className="text-xs font-light">
                    {props.texto}
                </span>
            </div>
        );
    }

    return (
        <li
            onClick={props.onClick}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        >
            {props.url ? (
                <Link
                    className="flex flex-col justify-center items-center h-20 w-20"
                    href={props.url}
                >
                    {rederizarConteudo()}
                </Link>
            ) : (
                rederizarConteudo()
            )}
        </li>
    );
};

export default MenuItem;
