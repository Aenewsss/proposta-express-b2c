'use client'

import { changeBrandColor, changeCustomerName } from "@components/store/briefing/briefing.slice";
import { IStore } from "@components/store/types";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HelloText = () => {

    const dispatch = useDispatch()

    const searchParams = useSearchParams()

    const { customerName } = useSelector((store: IStore) => store.briefing)

    useEffect(() => {
        dispatch(changeCustomerName((searchParams.get("customerName"))))
        dispatch(changeBrandColor((searchParams.get("color"))))
    }, []);

    return (
        <span >OLÁ,
            {
                customerName && <span className="text-black"> {customerName}!</span>
            }
        </span>
    );
}

export default HelloText;