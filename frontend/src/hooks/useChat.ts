"use clinet"
import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import Message from "@/model/Message"
import conversation from "@/functions/chat"
import { useState } from "react"

export default function useChat() { 
    
    const [ chatId ] = useLocalStorage<string>("chatId", Id.gerar())
    const [ messages, setMessages ] = useLocalStorage<Message[]>("messages", [])
    const [ loading , setLoading  ] = useState(false)

    async function handleAddMessage(text: string) {
        try {
            
            setLoading(true)

            const newMessage: Message = { 
                id: Id.gerar(), 
                text,
                author: "anonymous",
                side: "right"
            }

            setMessages( prev => ([ ...prev, newMessage ]) )

            const response = await conversation(chatId, newMessage)

            if (!response) return

            const botMessage: Message = { 
                id: Id.gerar(), 
                text: response,
                author: "bot",
                side: "left"
            }

            setMessages( prev => ([ ...prev, botMessage ]))
        } finally {
            setLoading(false)
        }

    }

    function clearMessages() {
        setMessages([])
    }

    return { 
        chatId, 
        messages,
        loading,
        handleAddMessage,
        clearMessages 
    }

}