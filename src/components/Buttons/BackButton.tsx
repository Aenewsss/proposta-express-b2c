'use client'

import { RoutesEnum } from "@components/enum/routes.enum";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = ({ pageToBack }: { pageToBack: RoutesEnum }) => {

    const router = useRouter()

    const goToPage = () => router.push(pageToBack)

    return (
        <button onClick={goToPage} className="btn btn-dark d-flex gap-3 align-items-center ps-4 pe-4 ">
            <Image fill src="/icons/Seta-voltar.svg" alt="Ícone Seta voltar" />
            <span>Voltar</span>
        </button>
    );
}

export default BackButton;