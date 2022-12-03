import './CampoTexto.css'

//props = propriedades
//poderia ser qualquer nome de variavel no lugar de 'props'

const CampoTexto = (props) => {
    //console.log(props) para ver os objetos no console dev


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

export default CampoTexto;