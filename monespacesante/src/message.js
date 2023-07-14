import React, {useState} from 'react';
import './message.css';
import messageImage from './informative-message-notification.svg';

const Message = ({text}) => {
    const [isDismissed, setIsDismissed] = useState(false);

    const handleDismiss = () => {
        setIsDismissed(true);
    };

    return (
        !isDismissed && (
            <div className="msg">
                <p className="move">
                    <div className="image-for-message">
                        <img src={messageImage} alt="Image"/>
                    </div>
                    <h3 className="titl">Attention aux e-mails et SMS fraduleux</h3>
                    <div className="txt">Des démarchages fraduleux par e-mail et par SMS qui usurpent le nom de
                    Mon espace santé existent. Que ce soit par SMS ou par e-mail, <br/>Mon espace
                    santé ne vous demande jamais de coordonnées bancaires ou de mot de passe.
                    Poour signaler un contenu illicite connectez-vous sur <a className="message-lin" href="https://www.internet-signalement.gouv.fr/PharosS1/" target="_blank">Internet-signalement.gouv.fr</a></div>
                </p>
                <button className="dismissbtn" onClick={handleDismiss}>X</button>     
            </div>
        )
    );
};

export default Message;