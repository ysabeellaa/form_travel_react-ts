import { getByPlaceholderText } from '@testing-library/react'
import './CampoTexto.css'

interface CampoTextoProps{
   aoAlterado:(valor: string) => void /* funcao void que recebe uma string como parametro */
   obrigatorio?: boolean 
   placeholder: string
   valor: string
   label: string
}

const CampoTexto =({aoAlterado, placeholder, valor, obrigatorio, label}:CampoTextoProps) =>{

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) =>{
        {aoAlterado(evento.target.value)}
    }

    return(
        <div className='campo-texto'>
            <label>{label}</label>
            <input value={valor}
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}/>
        </div>
    )
    
}

export default CampoTexto