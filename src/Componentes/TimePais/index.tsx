import { IViagem } from '../../compartilhado/interfaces/IViagem'
import Viagem from '../Viagem'
import './TimePais.css'

interface TimePaisProps{
    corPrimaria: string
    nome: string
    viagens: IViagem[]
    corSecundaria:string
}

const TimePais = (props:TimePaisProps) =>{
    return(
        (props.viagens.length> 0) ?
        <section className='time-viagem' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='viagens'>
                {props.viagens.map(viagem =>
                <Viagem 
                    key ={viagem.atracao}
                    nome={viagem.atracao} 
                    acompanhante={viagem.acompanhante} 
                    imagem={viagem.imagem}
                    corDeFundo={props.corPrimaria}
                    data={viagem.data} />)}
                 
            </div>
        </section>  
        : <></> // react fragment
    )
}

export default TimePais