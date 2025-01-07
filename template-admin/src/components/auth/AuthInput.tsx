interface AuthInputProps {
    label: string
    valor: string
    obrigatorio?: boolean
    valorMudou: (novoValor: string) => void
    tipo?: 'text' | 'email' | 'password'
}
const AuthInput = (props: AuthInputProps) => {
    return (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou(e.target.value)}
                required={props.obrigatorio}
                className="px-4 py-3 rounded bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white"
            />
        </div>

    )
}

export default AuthInput