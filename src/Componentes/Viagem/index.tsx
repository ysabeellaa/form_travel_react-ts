import './Viagem.css'


interface ViagemProps{
    nome: string
    imagem: string
    acompanhante: string
    corDeFundo: string
    data: string
}

const Viagem = ({ nome, imagem, acompanhante, corDeFundo, data}:ViagemProps) => {
    return (<div className='viagem'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{acompanhante}</h5>
            <h5>{new Date(data).toLocaleDateString()}</h5>
        </div>
    </div>)
}

export default Viagem