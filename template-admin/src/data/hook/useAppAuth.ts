import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const useAppAuth = () => useContext(AuthContext)

export default useAppAuth