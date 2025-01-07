import useAppData from "@/data/hook/useAppData"
import BotaoAlterarTema from "./BotaoAlterarTema"
import Titulo from "./Titulo"

interface CabecalhoProps {
  titulo: string
  subtitulo: string
}
const Cabecalho = (props: CabecalhoProps) => {

  const contexto = useAppData();
  return (
    <div className="flex">
      
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
      <div className="flex flex-grow justify-end">
        <BotaoAlterarTema tema={contexto.tema || ''} alterarTema={contexto.alternarTema!}/>
      </div>
    </div>
  )
}

export default Cabecalho