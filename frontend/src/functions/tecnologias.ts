import { httpGet } from "./api"
import { Tecnologia } from "@core"

async function getTecnologias() {
    const tecnologias: Tecnologia[] = await httpGet('tecnologias')
    
    return { 
        all: tecnologias,
        get destaques() {
            return tecnologias.filter(tecnologia => tecnologia.destaque)
        } 
    }
}

export default getTecnologias