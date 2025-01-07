import Image from "next/image"
import load from '../../../public/images/load.gif'
import useAppAuth from "@/data/hook/useAppAuth"
import router from "next/router"
import Head from "next/head"

interface ForcarAutenticacaoProps {
    children?: any
}

const ForcarAutenticacao = (props: ForcarAutenticacaoProps) => {

    const contexto = useAppAuth()

    const renderizarConteudo = () =>{
        return(
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html:`
                                if(!document.cookie?.includes("admin-template-auth")){
                                    window.location.href = "/autenticacao"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    const renderizarCarregando = () =>{
        return(
          <div className=" flex justify-center items-center h-screen">
            <Image src={load} alt="gif de load da pagina"/>
          </div>
        )
    }

    if(!contexto.carregando && contexto.usuario?.email){
        return renderizarConteudo()
    }else if(contexto.carregando){
        return renderizarCarregando()
    }else{
        router.push('/autenticacao')
        return null
    }
}

export default ForcarAutenticacao