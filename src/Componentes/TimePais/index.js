import Viagem from '../Viagem'
import './TimePais.css'

const TimePais = (props) =>{
    return(
        (props.viagens.length> 0) ?
        <section className='time-viagem' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='viagens'>
                {props.viagens.map(viagem => <Viagem 
                key ={viagem.atracao}
                nome={viagem.atracao} 
                acompanhante={viagem.acompanhante} 
                imagem={viagem.imagem}
                corDeFundo={props.corPrimaria}/>)}
            </div>
        </section>  
        : ''
    )
}

export default TimePais