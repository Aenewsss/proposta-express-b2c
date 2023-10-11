import CurrentCircle from "./Svgs/CurrentCircle";
import FutureCircle from "./Svgs/FutureCircle";
import GrayRect from "./Svgs/GrayRect";

const FirstCiclesFlow = () => {
    return (
        <>
            <div className="d-flex gap-4">
                <CurrentCircle />
                <h2 className="ff-arame fs-24 mb-0">O Cliente</h2>
            </div>
            <GrayRect />
            <div className="d-flex gap-4">
                <FutureCircle />
                <h2 className="ff-arame fs-24 mb-0">A Marca</h2>
            </div>
        </>
    );
}

export default FirstCiclesFlow;