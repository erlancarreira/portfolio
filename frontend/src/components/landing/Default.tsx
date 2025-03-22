import { Tecnologia } from "@core";
import Header from "../shared/Header";
import Tecnologias from "../tecnologias/Tecnologias";

export interface DefaultProps { 
    tecnologias: Tecnologia[]
}

export default function Default(props: DefaultProps) {
    return (
        <div className="
            flex flex-col items-center justify-center h-[500px]
            bg-[url('/principal.jpg')] 
            bg-cover bg-center bg-no-repeat

        ">
            <Header />
            <div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col items-center gap-1">
                    <h1 className="flex gap-3 items-center">
                        <span className="w-2 h-2 rounded-full bg-red-500" />   
                        <span className="text-3xl sm:text-5xl font-bold text-center">
                            Erlan Carreira
                        </span>
                        <span className="w-2 h-2 rounded-full bg-red-500" />

                    </h1>
                    <h2 className="text-zinc-500 text-center">
                        CTO da Empresa Erlan Carreira
                    </h2>
                </div>
                <Tecnologias items={props.tecnologias} />
            </div>
        </div>
    )
}