import '../assets/css/chat.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Chat() {

    const [isTyping, setIsTyping] = useState(true);
    let utcTimer: any;
    let fakeNum = 0;

    let messages = document.querySelector('.messages');

    function val(el : any) {
        if (el.options && el.multiple){
            return el.options
            .filter((option: any) => option.selected)
            .map((option: any) => option.value)
        } else {
            return el.value;
        }
    }

    function userTypingClear() {
        return utcTimer = setTimeout(() => {
            document.querySelector(".message.personal.typing")!.remove();
            setIsTyping(true);
        }, 3500)
    }

    function setDate() {
        let timestamp: any = document.createElement('div')
        timestamp.add('timestamp');
        let d = new Date();
        timestamp.textContent(`${d.getHours()} : ${d.getMinutes() < 10 ? '0' : ''} ) ${d.getMinutes()}`);
        return timestamp.appendChild(document.querySelector('.message:last'))
    }

    let fakeMsg = ["Hi there, I\'m Kelly and you?", "Nice to meet you", "How are you doing?", "Pretty good", "How\'s life been treating you?", "It could be worse, thanks", "I\'ve gotta go now", "It was a pleasure chat with you", "Bye :)"];

    function setFakeMessage() {
        let typing: any = document.querySelector("div")!.insertAdjacentHTML("beforeend", "<span>")    
        typing.add('message typing');
        return setTimeout(() => {
            typing.remove();
            let msg: any = document.querySelector('div');
            msg.add("message");
            msg.textContent(fakeMsg[fakeNum]);
            setDate();
            return fakeNum++
        }, 1000 + (Math.random() * 10) * 100);
    }

    function insertMessage() {
        let msgEl = document.querySelector(".action-box-input");
        let msgText = val(msgEl);
        if(msgText.trim() === "") {
            return false;
        }
        let newMsg = document.querySelector("div")
        newMsg.("personal")
        setDate()
        let actionBoxInput = document.querySelector(".action-box-input");
        setIsTyping(true);
        clearTimeout(utcTimer);

        if (fakeMsg[fakeNum] === "") {
            return false;
        }
        return setTimeout(() => {
            return setFakeMessage();
        }, 500 + (Math.random() * 10) * 100);
    };

    document.addEventListener("keydown", (ev) => {
        if (ev.key.length === 13) {
            insertMessage();
            return false;
        }
    })


    return (
        <div className="chat">
            <div className="chat-title">
                <h2>Kelps Philips</h2>
                <figure className="avatar">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/764024/profile/profile-512.jpg" />
                </figure>
            </div>
            <div className="messages">
                <div className="messages-content"></div>
            </div>
            <div className="action-box">
                <textarea className="action-box-input" placeholder="Type message..."></textarea>
                <button id="input" onClick={insertMessage} className="action-box-submit" type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </div>
    );
}
    
const actionBoxInput = document.querySelector('#input');
console.log(actionBoxInput);

export default Chat;
