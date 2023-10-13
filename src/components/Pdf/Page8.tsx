import { IBriefing } from "@components/store/types";
import { Page, Text, Image, Document, StyleSheet, View, Link } from "@react-pdf/renderer";


const PdfPage8 = () => {

    return (
        <Page size="A4" style={{
            backgroundColor: "#1A1A1A", color: "#fff",
            fontFamily: "DM-Sans", fontWeight: "normal",
            paddingTop: 56, paddingHorizontal: 64, position: 'relative'
        }}>

            <View style={{
                width: '100%', height: '100%',
                alignItems: "center", justifyContent: "center",
            }}>
                <View style={{ borderWidth: 1, borderColor: "#fff", borderStyle: "solid" }}>
                    <View style={{ paddingVertical: 18, paddingHorizontal: 60, flexDirection: "row", justifyContent: "center" }}>
                        <Image style={{ width: 126, height: 60 }} source="/pdf/logo-completa.png" />
                    </View>
                    <View style={{ height: 1, backgroundColor: "#fff", width: 300 }}></View>

                    <View style={{ paddingHorizontal: 16, paddingVertical: 28, flexDirection: "column", alignItems:"center" }}>
                        <Text style={{ fontWeight: "semibold", fontSize: 22 }}>Obrigado.</Text>
                        <Link src="www.aenamartinelli.com.br" style={{ color: "#fff", fontFamily: "Plex-Sans", fontSize: 16 }}>www.aenamartinelli.com.br</Link>
                    </View>
                </View>

            </View>

        </Page >
    );
}

export default PdfPage8;