import CheckCircle from "./Svgs/CheckCircle";
import PinkRect from "./Svgs/PinkRect";

const ThirdCiclesFlow = () => {
    return (
        <>
            <div className="d-flex gap-4">
                <CheckCircle />
                <h2 className="ff-arame fs-24 mb-0">O Cliente</h2>
            </div>
            <PinkRect />
            <div className="d-flex gap-4">
                <CheckCircle />
                <h2 className="ff-arame fs-24 mb-0">A Marca</h2>
            </div>
        </>
    );
}

export default ThirdCiclesFlow;