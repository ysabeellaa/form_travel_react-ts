import './Viagem.css'


const Viagem = ({ nome, imagem, acompanhante, corDeFundo }) => {
    return (<div className='viagem'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{acompanhante}</h5>
        </div>
    </div>)
}

export default Viagem