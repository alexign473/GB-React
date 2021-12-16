import { messageAdded } from '../chat/chatSlice'

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

