import Image from "next/image";

const SixthBriefingForm = () => {

    return (
        <div className=" d-flex flex-column justify-content-center align-items-center h-100">

            <Image width={100} height={100} src="/icons/Check-rosa-fundo-roxo.svg" alt="Ícone Check Rosa" />

            <h3 className="fs-28 fw-bold mb-0 mt-3">Briefing preenchido com sucesso</h3>
            <h4 className="fs-16 text-black-3e mb-0 mt-4">Aguarde enquanto seu briefing está sendo baixado</h4>

        </div>
    );
}

export default SixthBriefingForm;