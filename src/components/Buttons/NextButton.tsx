'use client'

import { RoutesEnum } from "@components/enum/routes.enum";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NextButton = () => {

    const router = useRouter()

    const changePage = () => router.push(RoutesEnum.FIRST_BRIEFING_STAGE)
    
    return (
        <div onClick={changePage} role="button" className="border-main border-w2 m-2 p-md-4 d-flex align-items-center justify-content-center next-button bg-white">
            <Image className="d-md-block d-none" width={24} height={2} src="/images/texto-proximo.svg" alt="Texto Próximo" />
            <p className="fs-40 ff-arame d-block d-md-none mb-0">Próximo</p>
        </div>
    );
}

export default NextButton;