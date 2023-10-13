import { Image, Text, View } from "@react-pdf/renderer";

const FooterPdf = ({ black }: { black?: boolean }) => {
    return (
        <View style={{ position: "absolute", bottom: 4, left: 64, width: "100%" }}>
            <div style={{ width: "100%", height: 0.7, backgroundColor: black ? "#fff" : "#000" }}></div>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginTop: 6, alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "normal" }}>{new Date().toLocaleDateString('pt-BR', { month: "long", day: "2-digit", year: "numeric" })}</Text>
                <Image style={{ width: 43, height: 49 }} source="/pdf/logo.png" />
            </View>
        </View>
    );
}

export default FooterPdf;