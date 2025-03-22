import Readme from "@/components/projetos/Readme";
import CarrouselImagens from "@/components/shared/CarrosselImagens";
import Container from "@/components/shared/Container";

import Header from "@/components/shared/Header";
import Tecnologias from "@/components/tecnologias/Tecnologias";
import { getReadME } from "@/functions/github";
import { getProjetosById } from "@/functions/projetos";

export default async function Page( props: { params: Promise<{id: string}> }) {
    
    const { id }  = await props.params
    const projeto = await getProjetosById(id)
    
    if (!projeto) return null

    const readme = await getReadME(projeto.repositorio)

    return (
        <div className="bg-black">
            <Header />
            <Container className="py-7 flex flex-col items-center gap-10">
                <h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
                
                <CarrouselImagens imagens={projeto.imagens.slice(1)} />
                <Tecnologias items={projeto.tecnologias} />
                <Readme >{readme}</Readme>
            </Container>
        </div>
    );
}