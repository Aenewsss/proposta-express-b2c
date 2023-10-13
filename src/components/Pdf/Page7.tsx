import { IBriefing } from "@components/store/types";
import { Page, Text, View } from "@react-pdf/renderer";
import FooterPdf from "./Footer";
import styles from "./styles";

import { InvestmentEnum } from "@components/enum/investment.enum";

const PdfPage7 = ({ briefingData }: { briefingData: IBriefing }) => {

    return (
        <Page size="A4" style={{ color: "#000", fontFamily: "DM-Sans", fontWeight: "normal", paddingTop: 56, paddingHorizontal: 64, position: 'relative' }}>

            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: 32, height: 29, backgroundColor: '#111629', alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ color: '#fff', fontWeight: "semibold", fontSize: 16 }}>04</Text>
                </View>
                <Text style={{ color: "#111629", fontWeight: "semibold", fontSize: 20 }}>Cronograma e Orçamento</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Qual o prazo para o desenvolvimento do projeto?</Text>
                <Text style={styles.answer}>Você imagina ou precisa do site pronto em quanto tempo?</Text>
                <Text style={styles.answer}>R: {briefingData?.deadline || "Nenhum"}</Text>
            </View>

            <View style={styles.viewQuestionMoreMargin}>
                <Text style={styles.question}>Que tipo de site você precisa?</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.upTo2 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.upTo2}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.upTo5 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.upTo5}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.upTo10 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.upTo10}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.upTo20 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.upTo20}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.upTo50 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.upTo50}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.upTo100 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.upTo100}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.moreThan100 ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.moreThan100}</Text>
                <Text style={styles.answer}>[ {briefingData?.investment == InvestmentEnum.none ? "x" : "  "} ]&nbsp;&nbsp;{InvestmentEnum.none}</Text>
            </View>

            <FooterPdf />
        </Page >
    );
}

export default PdfPage7;