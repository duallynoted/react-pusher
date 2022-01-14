import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './chat-room.css';

export default function ChatRoom(props) {
    const { messages } = props
    const [messageInput, setMessageInput] =
        useState('');
    return (
        <div className='chat-room-wrapper'>
            <div className='chat-room-messages'>
                {messages.map(renderMessenge)}
            </div>
            <div className='chat-room-message-input-wrapper'>
                <textarea
                    className='chat-room-message-input'
                    onChange={handleMessageInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Message"
                    value={messageInput}
                />
            </div>
        </div>
    )
    function renderMessenge(message, index) {
        const { body } = message
        return (
            <div key={index} className='chat-message'>
                <p className='chat-message-body'>{body}</p>
            </div>
        )
    }
    function handleMessageInputChange(event) {
        setMessageInput(event.target.value)
    }
    function handleKeyPress(event) {
        const key = event.key || event.keyCode
        if (key === 'Enter' || key === 13) {
            event.preventDefault()
            const payload = {
                body: messageInput
            }
            axios.post('/message', payload)
            setMessageInput('')
        }
    }
}

ChatRoom.defaultProps = {
    messages: []
}

ChatRoom.propTypes = {
    messages: PropTypes.array
}

