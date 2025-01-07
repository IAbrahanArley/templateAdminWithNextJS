import useAppAuth from "@/data/hook/useAppAuth"
import Link from "next/link"

interface AvatarUsuarioProps {
    className?: string
}

const AvatarUsuario = (props: AvatarUsuarioProps) => {
    const contexto = useAppAuth();
    console.log(contexto.usuario?.imagemUrl)
  return (
    <Link href="/perfil">
        <img src={contexto.usuario?.imagemUrl ?? '/images/avatar.svg'} alt="avatar do usuario" className={`h-10 w-10 ${props.className} rounded-full cursor-pointer`}/>
    </Link>
  )
}

export default AvatarUsuario