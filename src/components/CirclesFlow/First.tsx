import CurrentCircle from "./Svgs/CurrentCircle";
import FutureCircle from "./Svgs/FutureCircle";
import GrayRect from "./Svgs/GrayRect";

const FirstCiclesFlow = () => {
    return (
        <>
            <div className="d-flex gap-4">
                <CurrentCircle />
                <h2 className="ff-arame fs-24 mb-0">O Negócio</h2>
            </div>
            <GrayRect />
            <div className="d-flex gap-4">
                <FutureCircle />
                <h2 className="ff-arame fs-24 mb-0">A Marca</h2>
            </div>
            <GrayRect />
            <div className="d-flex gap-4">
                <FutureCircle />
                <h2 className="ff-arame fs-24 mb-0">Público alvo</h2>
            </div>
            <GrayRect />
            <div className="d-flex gap-4">
                <FutureCircle />
                <h2 className="ff-arame fs-24 mb-0">o Projeto</h2>
            </div>
            <GrayRect />
            <div className="d-flex gap-4">
                <FutureCircle last={true}/>
                <h2 className="ff-arame fs-24 mb-0">Cronograma e orçamento</h2>
            </div>
        </>
    );
}

export default FirstCiclesFlow;