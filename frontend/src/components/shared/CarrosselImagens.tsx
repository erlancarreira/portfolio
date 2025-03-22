import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export interface CarrouselImagensProps {
    imagens: string[]
}

export default function CarrouselImagens(props: CarrouselImagensProps) {
    return (
        <Carousel className="w-7/10 md:w-11/12 xl:w-full" opts={{ loop: true }}>
            <CarouselContent className="">
                {props.imagens.map((imagem, index) => (
                    <CarouselItem key={index} className="relative h-96 w-full">
                        <Image src={imagem} alt={`Imagem ${index}`} fill className="object-cover" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}