import { Container } from './styles';
import { FormEvent, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import uploadImg from '../../assets/uploadIcon.svg';
import sendImg from '../../assets/sendIcon.svg';
import downloadImg from '../../assets/downloadIcon.svg';
import axios from 'axios';

export function Chat() {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<iMessage[]>([])

    interface iMessage {
        _id: string;
        name: string;
        message?: string;
        file?: string;
        fileName?: string;
    }

    useEffect(() => {
        axios.get('http://app.testaporta.com:3333/message').then((messages) => {
            setMessages(messages.data)
        })

        const socket = io("http://18.231.189.141:3333")

        socket.on('message', (msg) => {
            setMessages(messages => [...messages, msg])
        })
    }, [])

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (message.trim() === '') {
            return;
        }

        await axios.post('http://18.231.189.141:3333/message', {
            name: localStorage.getItem('imessageName'),
            message: message,
        })
        setMessage('');
    }

    function handleSendFile(e: any) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);

        axios.post('http://18.231.189.141:3333/message/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(async res => {
            if (res.data && res.statusText === 'Created') {
                await axios.post('http://18.231.189.141:3333/message', {
                    name: localStorage.getItem('imessageName'),
                    file: res.data[0],
                    fileName: res.data[1],
                })
            }
        })
    }

    return (
        <Container>
            <ul>
                {messages.map((msg: iMessage) => {
                    if (msg.file && msg.fileName) {
                        return (
                            <li key={msg._id}>
                                <h3>{msg.name}:</h3>
                                <div>
                                    <p>{msg.fileName}</p>
                                    <a href={msg.file}>
                                     <img src={downloadImg} alt="Download do arquivo" />
                                    </a>
                                </div>
                            </li>
                        )
                    } else {
                        return (
                            <li key={msg._id}>
                                <h3>{msg.name}:</h3>
                                <p>{msg.message}</p>
                            </li>
                        )
                    }

                })
                }
                <div ref={(e) => e?.scrollIntoView({ behavior: "smooth" })} />
            </ul>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input placeholder='Digite uma mensagem...' type="text" value={message} onChange={event => setMessage(event.target.value)} />
                <button className="upload" type="button">
                    <label htmlFor="inputFile">
                        <img src={uploadImg} alt="Upload de arquivo" />
                    </label>
                    <input id="inputFile" onChange={handleSendFile} type="file" />
                </button>
                <button className="send" type="submit">
                    <img src={sendImg} alt="Enviar mensagem" />
                </button>
            </form>
        </Container>
    )
}
