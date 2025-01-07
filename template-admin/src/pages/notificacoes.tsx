import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

const Notificacoes = () => {
  const contexto = useAppData();
  return (
    <Layout titulo="Notificações" subtitulo="Aqui voce ira gerenciar suas notificações">
      <h3>{contexto.tema}</h3>
      <button onClick={contexto.alternarTema}>click</button>
    </Layout>
  );
};

export default Notificacoes;
