import { messageAdded } from '../chat/chatSlice'

// 2. Перенести в миддлвар логику ответа робота.
export const botAnswer = (store) => (next) => (action) => {
    if (
        action.type === 'chat/messageAdded' &&
        action.payload.message.autor === "HEMAN"
    ) {
        console.log('bot answer', action.payload)
        setTimeout(() => {
            store.dispatch(
                messageAdded("Hello from bot middleware", "Bot", action.payload.chatId)
            );
        }, 500);
    }

    return next(action);
};



// useEffect(() => {
//     const lastMessage = messages[messages.length - 1]
//     if (messages.length && lastMessage.autor === 'HEMAN') {
//         setTimeout(() => {
//             dispatch(messageAdded(`Not much, brb`, "Duncan-BOT", roomId))
//         }, 1000)
//     }
// }, [messages, roomId])