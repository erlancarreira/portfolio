import Image from "next/image";

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse gap-6 xl:flex-row lg:flex-col-reverse md:flex-row  items-center md:items-start lg:items-center bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            <div className="relative min-w-72 h-64 xl:self-end md:self-end">
                <Image src={'/minha-foto.png'} alt={'Foto do Perfil'} fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center xl:items-start lg:items-center md:items-start"> 
                <div className="flex flex-col items-center xl:items-start lg-items-center md:items-start">
                    <span className="
                        bg-gradient-to-r from-red-500 via-white to-white
                        text-transparent bg-clip-text text-2xl font-bold
                    ">Erlan Carreira</span>
                    <span>CTO da Empresa Erlan Carreira</span>
                </div>
                <p className="text-sm text-center xl:text-left lg:text-center md:text-left">
                    Sou um desenvolvedor apaixonado por tecnologia e inovação. Com mais de 20 anos de experiência, tenho atuado em diversas áreas, incluindo desenvolvimento web, aplicativos móveis e sistemas embarcados. Minha missão é criar soluções que impactem positivamente a vida das pessoas e ajudem as empresas a crescerem.
                    Com um forte foco em resultados, busco sempre a excelência em tudo o que faço. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente. Acredito que a tecnologia pode transformar o mundo e estou comprometido em fazer parte dessa transformação.
                    Estou sempre aberto a novas oportunidades e colaborações. Se você está procurando um desenvolvedor apaixonado e comprometido, entre em contato comigo! Vamos juntos transformar ideias em realidade.
                    

                </p>
            </div>
        </div>
    )
}