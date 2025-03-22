import { httpGet } from "./api"
import { Projeto, Tipo } from "@core"

export async function getProjetos() {
    const projetos: Projeto[] = await httpGet('/projetos')
    
    return { 
        all: projetos,
        get mobile() {
            return projetos.filter(projeto => projeto.tipo === Tipo.MOBILE)
        },
        get web() {
            return projetos.filter(projeto => projeto.tipo === Tipo.WEB)
        },
        get jogos() {
            return projetos.filter(projeto => projeto.tipo === Tipo.JOGO)
        }, 
        get destaques() {
            return projetos.filter(projeto => projeto.destaque)
        }, 
    }
}

export async function getProjetosById(id: string): Promise<Projeto | null> {
    const projeto: Projeto = await httpGet(`/projetos/${id}`)   
    return projeto
}

