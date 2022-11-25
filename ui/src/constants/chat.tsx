import { ChatType, IChat } from "../components/ChatBubble"
import { v4 as uuidv4 } from "uuid"

export const defaultChats: IChat[] = [
    {
        id: uuidv4(),
        text: "hi theere!",
        type: ChatType.SYSTEM,
        isDefault: true,
    },
    {
        id: uuidv4(),
        text: "I'm Hazn - an AI chat built by devs!",
        type: ChatType.SYSTEM,
        isDefault: true
    },
    {
        id: uuidv4(),
        text: "I'm here to understand your concerns and connect you with the best resource available to support you",
        type: ChatType.SYSTEM,
        isDefault: true
    },
    {
        id: uuidv4(),
        text: "Can I help!",
        type: ChatType.SYSTEM,
        isDefault: true,
    }
]
