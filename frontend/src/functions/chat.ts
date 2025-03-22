"use server"
import Message from "@/model/Message";

export default async function conversation(
    chatId: string, 
    message: Message
): Promise<string | null> {

    const webhookUrl = process.env.CHAT_WEBHOOK
    
    if (!webhookUrl) return null

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chatId,
            mensagem: message.text
        })
    })

    const messageResponse = await response?.json()

    return messageResponse?.response || null 

}