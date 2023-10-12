import { IBriefing, IStore } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const PdfPage1 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page>
            <Text>Teste</Text>
            <Text>{briefingData.branchActivity}</Text>
        </Page>
    );
}

export default PdfPage1;