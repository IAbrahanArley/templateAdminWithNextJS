import Titulo from "./Titulo"

interface CabecalhoProps {
  titulo: string
  subtitulo: string
}
const Cabecalho = (props: CabecalhoProps) => {
  return (
    <div>
      
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
    </div>
  )
}

export default Cabecalho