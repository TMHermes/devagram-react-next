import { useState } from "react";
import Avatar from "../avatar";

export function FazerComentario({ usuarioLogado, comentar }) {
    const [linhas, setLinhas] = useState(1);
    const [comentario, setComentario] = useState();

    const aoDigitarComentario = (e) => {
        const valorInput = e.target.value;
        setComentario(valorInput);
        setLinhas(valorInput.lenght > 0 ? 2 : 1);
    }

    const aoPressionarQualquerTecla = (e) => {
        if (e.key === 'Enter') {
            manipularComentario();
        }
    }

    const fazerComentario = () => {
        if (comentario.trim().lenght === 0 || !comentar) {
            return;
        }
        comentar(comentario);
    }

    return (
        <div className="containerFazerComentario">
            <Avatar src={usuarioLogado.avatar} />
            <textarea
                rows={linhas}
                onChange={aoDigitarComentario}
                onKeyDown={aoPressionarQualquerTecla}
                value={comentario}
                placeholder="Adicione um comentario...">
            </textarea>

            <button
                type="button"
                className="btnPublicacao desktop"
                onClick={fazerComentario}
            >
                Publicar
            </button>
        </div>
    )
}