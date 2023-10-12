'use client'

import PdfDocument from "@components/components/Pdf/Document";
import { IStore } from "@components/store/types";
import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

export default function Pdf() {

    const { briefing } = useSelector((store: IStore) => store);
    
    return (
        <PDFViewer className="w-100 vh-100">
            <PdfDocument briefingData={briefing} />
        </PDFViewer>
    )
}