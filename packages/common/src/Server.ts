export interface ChatMessage {
    username: string,
    msg: string
}

export const serverPort = process.env.PORT || 3027