import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import PdfPage1 from "./Page1";
import { useSelector } from "react-redux";
import { IBriefing, IStore } from "@components/store/types";
import PdfPage2 from "./Page2";


const PdfDocument = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Document title={`Briefing Web ${briefingData.customerName}`} author="Aenã Martinelli" >
            <PdfPage1 briefingData={briefingData}/>
            <PdfPage2 briefingData={briefingData}/>
        </Document>
    );
}

export default PdfDocument;