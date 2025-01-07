import useAppData from "@/data/hook/useAppData"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import ForcarAutenticacao from "../auth/ForcarAutenticacao"
import { ReactNode } from 'react';

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: ReactNode
}
const Layout = (props: LayoutProps) => {
  const contexto = useAppData();

  return (
    <ForcarAutenticacao>

      <div className={`flex ${contexto.tema} h-screen w-screen`}>
        <MenuLateral />
        <div className="flex flex-col bg-gray-300 dark:bg-gray-800 p-7 w-full">

          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  )
}

export default Layout;