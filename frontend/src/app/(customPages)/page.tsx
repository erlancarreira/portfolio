import Curriculo from "@/components/curriculo"
import Default from "@/components/landing/Default"
import Projetos from "@/components/projetos/Projetos"
import Container from "@/components/shared/Container"
import { getProjetos } from "@/functions/projetos"
import getTecnologias from "@/functions/tecnologias"

export default async function Home() {
  
  const tecnologias = await getTecnologias()
  const projetos    = await getProjetos()

  return (
    <div>
      <Default tecnologias={tecnologias.destaques} />
      <Container className="py-16 flex flex-col items-center gap-10">
        <Projetos titulo={"Destaque"} items={projetos.destaques} />
        <Projetos titulo={"Web"} items={projetos.web} />
        <Projetos titulo={"Mobile"} items={projetos.mobile} />
        <Projetos titulo={"Jogos"} items={projetos.jogos} />
        <Curriculo tecnologias={tecnologias.all} />
      </Container>
    </div>
  )
}
