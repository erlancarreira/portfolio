import Tecnologia from "../tecnologia/Tecnologia"
import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"

export default interface Projeto {
    id          : number       // id do projeto 
    nome        : string       // nome do projeto
    descricao   : string       // descricao do projeto
    imagens     : string[]     
    tipo        : Tipo         // tipo do projeto (jogo, web, mobile)
    nivel       : Nivel        // nivel do projeto (1 a 4)
    repositorio : string       // repositorio do projeto
    destaque    : boolean      // se o projeto é destaque ou não
    tecnologias : Tecnologia[] // id das tecnologias do projeto  
}