import NextButton from "./Buttons/NextButton";

const BriefingExplanation = () => {
    return (
        <section className="mt-5 container ">
            <div className="d-flex justify-content-evenly flex-md-row flex-column">
                <div className="border-main border-w2 m-2 p-5 exp-card-1 bg-white">
                    <p className="fw-medium fs-26 text-center">
                        O briefing é um conjunto de
                        informações para auxiliar o
                        desenvolvimento de seu projeto, com esta coleta de
                        dados
                        <span className="fw-bold"> podemos mapear melhor as expectativas do cliente.</span>
                    </p>
                </div>
                <div className="border-main border-w2 m-2 p-5 exp-card-2 bg-white">
                    <p className="fw-medium fs-26 text-center">
                        É uma peça fundamental para a elaboração de uma
                        proposta comercial e o planejamento de todas as etapas de desenvolvimento de acordo com as
                        <span className="fw-bold"> necessidades do projeto/cliente.</span>
                    </p>
                </div>
                <NextButton />
            </div>
            <p className="fs-10 mx-2">● Clique no botão <span className="fw-bold">PRÓXIMO</span> para começar a preencher o briefing</p>
        </section>
    );
}

export default BriefingExplanation;