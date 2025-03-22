import Message from "@/model/Message"
import ContentMD from "../shared/ContentMD"
import Image from "next/image"

export interface CardMessageProps {
    message: Message,
    isSameAuthor?: boolean,
}

export default function CardMessage(props: CardMessageProps) {
    return props.message.side === "left" ? (
        <CardMessageLeft {...props} />
    ) : (
        <CardMessageRight {...props} />
    )
}

// BOT
function CardMessageLeft(props: CardMessageProps) {
    return (
        <div className="flex gap-4">
            {!props.isSameAuthor && (
                <Image 
                    src={"/chat.svg"} 
                    alt="Assistente" 
                    width={40} 
                    height={40} 
                /> 
            )}
            <div className={`flex flex-col ${props.isSameAuthor && "pl-16"}`}>
                {!props.isSameAuthor && (
                    <span className="text-xs text-zinc-600">
                        {props.message.author}
                    </span> 
                )}
                <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
                    <ContentMD>{props.message.text}</ContentMD>
                </div>
            </div>
        </div>
    )
}

// USUARIO
function CardMessageRight(props: CardMessageProps) {
    return (
        <div className={`flex flex-col items-end ${props.isSameAuthor && "pr-2"}`} >
            {!props.isSameAuthor && (
                <span className="text-xs text-zinc-600">
                    {props.message.author}
                </span>
            )}
            <div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
                <ContentMD>{props.message.text}</ContentMD>
            </div>
        </div>
    )
}