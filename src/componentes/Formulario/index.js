import Botao from "../Botão"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import { useState } from 'react'
import "./Formulario.css"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [ministerio, setMinisterio] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoMembroCadastrado({
            nome,
            cargo,
            imagem,
            ministerio
        })
        setCargo('')
        setNome('')
        setImagem('')
        setMinisterio('')

    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Ministério" 
                    itens={props.ministerios}
                    valor={ministerio}
                    aoAlterado={valor => setMinisterio(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario