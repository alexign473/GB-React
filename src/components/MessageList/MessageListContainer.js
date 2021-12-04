import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { messageAdded, selectChatById, selectChatMessagesById } from '../../store/chat/chatSlice'
import MessageList from './MessageList'

export default function MessageListContainer() {
    const dispatch = useDispatch()
    const { roomId } = useParams()

    const [input, setInput] = useState('')
    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const chat = useSelector(selectChatById(roomId))
    const messages = chat?.messages ?? []
    // function useParamSelector(selector, ...params) {
    //     return useSelector(state => selector(state, ...params));
    // }
    // const messages = useParamSelector(selectChatMessagesById, roomId)
    console.log(messages)

    const sendMessage = (e) => {
        e.preventDefault();
        const autor = "HEMAN"
        if (input) {
            dispatch(messageAdded(input, autor, roomId))
        }
        setInput('')
    }


    return (
        <MessageList input={input}
            messages={messages}
            onInputChange={onInputChange}
            sendMessage={sendMessage}
        >
        </MessageList>
    )
}
