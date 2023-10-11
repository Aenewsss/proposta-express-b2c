import { changeBrandColor } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useDispatch, useSelector } from "react-redux";

const SecondBriefingForm = () => {

    const { brandColor } = useSelector((store: IStore) => store.briefing)

    const dispatch = useDispatch()

    function handleChange(e: any) {
        const { value } = e.target
        dispatch(changeBrandColor(value))
    }

    return (
        <form className="p-2">
            <div className="mb-3 d-flex flex-column gap-2">
                <label htmlFor="" className="fw-bold">Qual é a cor principal da sua marca?</label>
                <input value={brandColor} onChange={handleChange} placeholder="Ex: Martinelli Tech" type="color" className="form-control" />
                <span>* Selecione uma cor clicando no campo acima</span>
            </div>
        </form>
    );
}

export default SecondBriefingForm;