import { Page, Text, Image, Document, StyleSheet, Font } from "@react-pdf/renderer";
import PdfPage1 from "./Page1";
import { useSelector } from "react-redux";
import { IBriefing, IStore } from "@components/store/types";
import PdfPage2 from "./Page2";
import PdfPage3 from "./Page3";
import PdfPage4 from "./Page4";
import PdfPage5 from "./Page5";
import PdfPage6 from "./Page6";
import PdfPage7 from "./Page7";
import PdfPage8 from "./Page8";

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
            <PdfPage3 briefingData={briefingData}/>
            <PdfPage4 briefingData={briefingData}/>
            <PdfPage5 briefingData={briefingData}/>
            <PdfPage6 briefingData={briefingData}/>
            <PdfPage7 briefingData={briefingData}/>
            <PdfPage8 />
        </Document>
    );
}

export default PdfDocument;