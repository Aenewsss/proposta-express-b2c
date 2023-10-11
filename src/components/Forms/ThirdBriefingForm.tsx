import { IStore } from "@components/store/types";
import Image from "next/image";
import { useSelector } from "react-redux"
import { useRef } from "react"

const ThirdBriefingForm = () => {

    const { customerLink } = useSelector((store: IStore) => store.briefing)

    const textCopiedRef = useRef<HTMLParagraphElement>(null);

    const copyLink = () => {
        const textCopiedElement = textCopiedRef.current!;

        textCopiedElement.classList.remove("d-none");
        navigator.clipboard.writeText(customerLink)

        setTimeout(() => {
            textCopiedElement.classList.add("d-none");
        }, 3000);
    }

    return (
        <div className=" d-flex flex-column justify-content-center align-items-center h-100">

            <Image width={100} height={100} src="/icons/Check-rosa-fundo-roxo.svg" alt="Ícone Check Rosa" />

            <h3 className="fs-28 fw-bold mb-0 mt-3">Link criado com sucesso</h3>
            <h4 className="fs-16 text-black-3e mb-0">Envie esse link para o seu cliente</h4>

            <div className="d-flex justify-content-center mt-3 position-relative">
                <div className="border border-secondary d-flex rounded">
                    <input readOnly value={customerLink} type="text" className="border-0 m-2 text-truncate pe-none" />
                    <button onClick={copyLink} className="btn btn-outline-secondary rounded-0 border-end border-top border-bottom d-flex align-items-center gap-2">
                        <Image fill src="/icons/copiar.svg" alt="Ícone Copiar" />
                        <span>Copiar</span>
                    </button>
                </div>
                <p ref={textCopiedRef} className="d-none position-absolute text-copied">Link Copiado!</p>
            </div>
        </div>
    );
}

export default ThirdBriefingForm;