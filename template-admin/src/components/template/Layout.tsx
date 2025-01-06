import useAppData from "@/data/hook/useAppData"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps {
  titulo: string
  subtitulo: string
  children?: any
}
const Layout = (props: LayoutProps) => {
  const contexto = useAppData();

  return (
    <div className={`flex ${contexto.tema} h-screen w-screen`}>
      <MenuLateral />
      <div className="flex flex-col bg-gray-300 dark:bg-gray-800 p-7 w-full">

        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo children={props.children} />
      </div>
    </div>
  )
}

export default Layout;