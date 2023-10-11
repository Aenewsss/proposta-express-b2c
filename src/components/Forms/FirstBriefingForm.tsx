import { changeCustomerName } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux";

const FirstBriefingForm = () => {

    const { customerName } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    function handleChange(e: any) {
        const { value } = e.target
        dispatch(changeCustomerName(value))
    }

    return (
        <form className="p-2">
            <div className="mb-3 d-flex flex-column gap-2">
                <label className="fw-bold">Qual é o nome do seu cliente? Ou da empresa dele?</label>
                <input value={customerName} onChange={handleChange} placeholder="Ex: Martinelli Tech" type="text" className="form-control" />
            </div>
        </form>
    );
}

export default FirstBriefingForm;