import { Page, Text, Image, Document, StyleSheet, Font } from "@react-pdf/renderer";
import PdfPage1 from "./Page1";
import { useSelector } from "react-redux";
import { IBriefing, IStore } from "@components/store/types";
import PdfPage2 from "./Page2";

Font.register({
    family: 'DM-Sans', fonts: [
        {
            src: "/fonts/DMSans.ttf", fontWeight: "normal",
        },
        {
            src: "/fonts/DMSansBold.ttf", fontWeight: "bold"
        },
        {
            src: "/fonts/DMSansMedium.ttf", fontWeight: "medium"
        },
        {
            src: "/fonts/DMSansSemiBold.ttf", fontWeight: "semibold"
        },
    ]
})
Font.register({ family: 'Plex-Sans', src: "/fonts/IBMPlexSans.ttf" })

const PdfDocument = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Document title={`Briefing Web ${briefingData.customerName}`} author="Aenã Martinelli" >
            <PdfPage1 briefingData={briefingData}/>
            <PdfPage2 briefingData={briefingData}/>
        </Document>
    );
}

export default PdfDocument;