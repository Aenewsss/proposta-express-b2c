'use client'

import { RoutesEnum } from "@components/enum/routes.enum";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FinishButton = ({ pageToGo }: {pageToGo: RoutesEnum }) => {

    const router = useRouter()
    console.log(pageToGo)

    const goToPage = () => router.push(pageToGo)

    return (
        <button onClick={goToPage} className="btn btn-main d-flex gap-3 align-items-center ps-4 pe-4 ">
            <span>Finalizar</span>
            <Image fill src="/icons/Check.svg" alt="Ícone Seta próximo" />
        </button>
    );
}

export default FinishButton;