import Image from "next/image";

export default function BriefingLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center">
                <Image className="w-50" fill src="/images/Proposta-express-logo.svg" alt="Logo Proposta Express" />
            </div>
            {children}
        </>
    );
}