import { IStore } from "@components/store/types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Image from "next/image";
import { useSelector } from "react-redux";
import PdfDocument from "../Pdf/Document";

const SixthBriefingForm = () => {

    const { briefing } = useSelector((store: IStore) => store)

    console.log(briefing)

    return (
        <div className=" d-flex flex-column justify-content-center align-items-center h-100">

            <Image width={100} height={100} src="/icons/Check-rosa-fundo-roxo.svg" alt="Ícone Check Rosa" />

            <h3 className="fs-28 fw-bold mb-0 mt-3">Briefing preenchido com sucesso</h3>
            <h4 className="fs-16 text-black-3e mb-0 mt-4">Aguarde enquanto seu briefing está sendo baixado</h4>

            <PDFDownloadLink document={<PdfDocument briefingData={briefing}/>} fileName={`Briefing Web ${briefing.customerName}`}>
                {({ loading }) => (loading ? 'loading' : "download")}
            </PDFDownloadLink>
        </div>
    );
}

export default SixthBriefingForm;