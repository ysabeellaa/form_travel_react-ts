import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'



const Formulario = (props) =>{
   
    const [atracao,setAtracao] = useState('')
    const [acompanhante,setAcompanhante] = useState('')
    const [imagem,setImagem] = useState('')
    const [pais,setPais] = useState('')

    const aoSalvar =(evento) =>{
        evento.preventDefault()
        console.log(atracao, acompanhante, imagem, pais)
        props.aoViagemCadastrada({
            atracao,
            acompanhante,
            imagem,
            pais
        })
        setAtracao('')
        setAcompanhante('')
        setImagem('')
        setPais('')
    }


    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Qual a sua próxima viagem?</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Atração" 
                    placeholder="Digite o que você quer ver na imagem"
                    valor={atracao}
                    aoAlterado={valor => setAtracao(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Acompanhante" 
                    placeholder="Digite quem vai com você"
                    valor={acompanhante}
                    aoAlterado={valor => setAcompanhante(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Coloque o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true} 
                    label="País" 
                    itens={props.nomeDosPaises}
                    valor={pais}
                    aoAlterado={valor => setPais(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario