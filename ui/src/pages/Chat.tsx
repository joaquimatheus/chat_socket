import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Chat() {
    return (
        <div className="chat">
            <div className="chat-title">
                <h1>Kelps Philips</h1>
                <figure className="avatar">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/764024/profile/profile-512.jpg" />
                </figure>
            </div>
            <div className="messages">
                <div className="messages-content"></div>
            </div>
            <div className="actionBox">
                <textarea className="action-box-input" placeholder="Type message..."></textarea>
                <button className="action-box-submit" type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </div>
    );
}

export default Chat;
