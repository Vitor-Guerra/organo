import './Ministerio.css'
import Membro from '../Membro'


const Ministerio = ({corPrimaria, corSecundaria, ministerio, membros}) => {
    const bg = { backgroundColor: corSecundaria }
    const border = { borderColor: corPrimaria }

    return(
        (membros.length > 0) ? <section className='ministerio' style={bg}>
            <h3 style={border}>{ministerio}</h3>
            <div className='membros'>
                {membros.map( membro => <Membro corDeFundo={corPrimaria} nome={membro.nome} cargo={membro.cargo} imagem={membro.imagem} key={membro.nome}/>)}
            </div>
        </section>
        : ''
    )
}

export default Ministerio