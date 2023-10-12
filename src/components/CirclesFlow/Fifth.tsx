import CheckCircle from "./Svgs/CheckCircle";
import CurrentCircle from "./Svgs/CurrentCircle";
import FutureCircle from "./Svgs/FutureCircle";
import GrayRect from "./Svgs/GrayRect";
import PinkRect from "./Svgs/PinkRect";

const FifthCiclesFlow = () => {
    return (
        <>
            <div className="d-flex gap-4">
                <CheckCircle />
                <h2 className="ff-arame fs-24 mb-0">O Negócio</h2>
            </div>
            <PinkRect />
            <div className="d-flex gap-4">
                <CheckCircle />
                <h2 className="ff-arame fs-24 mb-0">A Marca</h2>
            </div>
            <PinkRect />
            <div className="d-flex gap-4">
                <CheckCircle />
                <h2 className="ff-arame fs-24 mb-0">Público alvo</h2>
            </div>
            <PinkRect />
            <div className="d-flex gap-4">
                <CheckCircle />
                <h2 className="ff-arame fs-24 mb-0">o Projeto</h2>
            </div>
            <PinkRect />
            <div className="d-flex gap-4">
                <CurrentCircle last={true}/>
                <h2 className="ff-arame fs-24 mb-0">Cronograma e orçamento</h2>
            </div>
        </>
    );
}

export default FifthCiclesFlow;