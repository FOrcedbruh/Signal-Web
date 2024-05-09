export interface IMessage {
    message: string,
    _id?: string,
    senderId?: string,
    receiverId?: string,
    index: number
}