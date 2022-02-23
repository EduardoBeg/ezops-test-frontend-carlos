
import { Container } from './styles';
import messageImg from '../../assets/messageIcon.svg';
import editImg from '../../assets/editIcon.svg';
import checkedImg from '../../assets/checkedIcon.svg';
import { useState } from 'react';

export function Header() {
    const [name, setName] = useState('')
    const [editable, setEditable] = useState(false)

    const imessageName = localStorage.getItem('imessageName')

    function setUserName(input?: string) {
        if (input) {
            setName(input)
            localStorage.setItem('imessageName', input);
        } else if (imessageName && !name) {
            setName(imessageName);
        } else if (!name) {
            setName('Guest')
            localStorage.setItem('imessageName', 'Guest');
        }
    }
    setUserName()

    return (
        <Container>
            <section>
                <div>
                    <img src={messageImg} alt="Logo" />
                    <h2>iMessage</h2>
                </div>
                <div className='nameSection'>
                    <input type="text" readOnly={!editable} value={name} onChange={event => setUserName(event.target.value)} />
                    <button>
                        <img src={editable? checkedImg: editImg} onClick={() => setEditable(!editable)} alt="Editar nome" />
                    </button>
                </div>
            </section>
        </Container>
    )
}