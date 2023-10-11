import HelloText from "@components/components/HelloText";
import { routes } from "@components/constants/routes.const";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <main>
      <section className="vh-100 d-flex justify-content-center align-items-center flex-column container">
        <h1 className="fs-64 ff-arame text-main text-center d-flex flex-column">
          <HelloText />
          <span>SEJA BEM-VINDO A</span>
        </h1>
        
        <Image fill src="/images/Proposta-express-logo.svg" alt="Logo Proposta Express" />
        <div className="d-flex flex-column gap-3 buttons-news mt-5">
          <p className="fs-10 ff-arame text-center mb-0">clique no botão abaixo para preencher o briefing</p>
          <Link href={routes.briefing.explanation} className="btn btn-outline-main br-25 ff-arame text-main fs-40">PREENCHER BRIEFING</Link>
        </div>
      </section>
    </main>
  )
}