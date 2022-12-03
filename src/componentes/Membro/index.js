import './Membro.css'

const Membro = ({nome, imagem, cargo, corDeFundo}) => {
    const cor = {backgroundColor: corDeFundo}
    return(
        <div className="membro">
            <div className="cabecalho" style={cor}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodapeMembro">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}


export default Membro