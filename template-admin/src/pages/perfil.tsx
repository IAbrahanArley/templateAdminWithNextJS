import Layout from "@/components/template/Layout"
import useAppData from "@/data/hook/useAppData"

const Perfil = () => {
  const contexto = useAppData();
  return (
    <Layout titulo="Seu Perfil" subtitulo="Aqui voce ira gerenciar seus dados">
    
      <h3>{contexto.tema}</h3>
    </Layout>
  );
};

export default Perfil;