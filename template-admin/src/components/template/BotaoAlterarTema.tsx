import React from 'react'
import { IconeLua, IconeSol } from '../icons'

interface BotaoAlterarTemaProps {
    tema: string
    alterarTema: () => void
}

const BotaoAlterarTema = (props: BotaoAlterarTemaProps) => {
    return props.tema === 'dark' ? (
        <div
            className='hidden sm:flex items-center cursor-pointer bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 p-1 rounded-full'
            onClick={props.alterarTema}>
            <div
            className='flex items-center justify-center bg-white text-yellow-600 h-6 w-6 rounded-full'
            >
                {IconeSol("size-5")}
            </div>
            <div className='hidden lg:flex items-center ml-4 text-white'>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div
        className='hidden sm:flex items-center justify-end  cursor-pointer bg-gradient-to-r from-gray-500 to-gray-900 w-14 lg:w-24 h-8 p-1 rounded-full'
        onClick={props.alterarTema}>
        <div className='hidden lg:flex items-center mr-3 text-gray-300'>
            <span>Escuro</span>
        </div>
        <div
        className='flex items-center justify-center bg-black text-yellow-300 h-6 w-6 rounded-full'
        >
            {IconeLua("size-5")}
        </div>
    </div>
    )
}

export default BotaoAlterarTema