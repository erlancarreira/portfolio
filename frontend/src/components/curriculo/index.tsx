import { Tecnologia } from "@core"
import TecnoWorked from "./TecnoWorked"
import Experiencia from "./Experiencia"
import MiniCV from "./MiniCV"

export interface CurriculoProps {
    tecnologias: Tecnologia[]   
}

export default function Curriculo(props: CurriculoProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <MiniCV />
            <Experiencia />
            <TecnoWorked tecnologias={props.tecnologias} />
        </div>
    )
}