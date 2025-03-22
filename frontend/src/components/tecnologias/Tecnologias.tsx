import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
    items: Tecnologia[]   
    isMinor?: boolean
}

export default function Tecnologias(props: TecnologiasProps) {
    
    const hasTecnologias = props?.items?.length > 0
    
    if (!hasTecnologias) return null

    return (
        <div className="flex justify-center gap-4 flex-wrap w-4/5">
            
            {props.items.map(tecnologia => {
                return <div key={tecnologia.id} className="flex flex-col items-center gap-1">
                    <span className={`
                            relative h-11 w-11 rounded-xl overflow-hidden 
                            ${!props.isMinor && "sm:h-16 sm:w-16"} 
                        `}
                    >
                        <Image 
                            src={tecnologia.imagem} 
                            alt={tecnologia.nome} 
                            fill
                            className="object-contain" 
                        />
                    </span>
                    <span className="text-[10px] text-zinc-400">
                        {tecnologia.nome}
                    </span>
                </div>
            })}
        
        </div>
    )
}