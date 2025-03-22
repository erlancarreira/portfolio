import { Tecnologia } from "@core"

export interface TecnoWorkedProps {
    tecnologias: Tecnologia[]   
}

export default function TecnoWorked(props: TecnoWorkedProps) {
    
    const hasTecnologias = props?.tecnologias?.length > 0
    
    if (!hasTecnologias) return null

    return (
        <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
            <div className="flex justify-center items-center flex-wrap gap-x-3">
                {props.tecnologias.map(tecnologia => {
                    return <div key={tecnologia.id}>
                        <span className="text-red-500 font-bold">#</span>
                        <span>{tecnologia.nome}</span>
                    </div>
                })}
            </div>
        </div>
    )
}