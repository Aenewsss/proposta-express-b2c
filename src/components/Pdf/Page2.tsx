import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const PdfPage2 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page>
            <Text>Teste pagina 2</Text>
            <Text>{briefingData.customerName}</Text>
        </Page>
    );
}

export default PdfPage2;