import React from 'react';
import './Activer.css';
import { Link, useNavigate, Routes, Route} from 'react-router-dom';
import Man from './Man.jpg';
import Chrono from './images.png';
import Red from './confidential_document.jpg';
import Stethoscope from './stethoscope.png';
import Question from './Question.jpg';
import Questionnaire from './Les Question/Questionnaire.js';
import Connecter from './Connecter.js';
import Idris from './Idris.js';
import WholePie from './The Whole Pie.js';

const Activer = () => {
const History = useNavigate();
    return (
        <>
        <Routes>
            <Route path='/Questionnaire' Component={Questionnaire}/>
            <Route path='/Connecter' Component={Connecter}/>
            <Route path='/Idris' Component={Idris}/>
            <Route path='/WholePie' Component={WholePie}/>
        </Routes>
        <div class="blue-bond"/>
        <div class="content">
            <img src={Man} className="Man"/>
            <img src={Question} className="Question"/>
            <p className="Dark">
                Entre 45 et 50 ans, il est conseillé de<br/>
                prendre rendez-vous avec votre<br/>
                médecin afin de faire le point sur<br/>
                votre santé
            </p>
            <p className="Grayish">Prendre soin de soi est important. C'est pourquoi, entre 45 et 50 ans, il est
                <br/>il est recommandé de faire le point sur sa santé physique et mental avec son médecin.
                <br/> Cette visite est totalement prise en charge par l'assurance maladie.
                <br/> Afin de préparer cette consultation, vous pouvez dès présent répondre
                <br/> à ce questionnaire.
            </p>
            <img src={Chrono} className="Chrono"/>
            <p className="Next_Chrono">
                Je prends 10 minutes et réponds aux questions.
            </p>
            <img src={Red} className="Confidential"/>
            <p className="Next_Confidential">
                J'enregistre mes réponses dans Mon espace santé<br/>
                pour les partager avec mon médencin.
            </p>
            <img src={Stethoscope} className="Stethoscope"/>
            <p className="Next_Stethoscope">
                Je prends rendez-vous avec mon médecin afin<br/>
                d'effectuer mon bilan de santé.
            </p>
            <p className="Text">
                Une fois le questionnaire est complété, les réponses seront modifiable
                ultérieurement.<br/><br/>
                Pour plus de conseils adaptés à mon mode de vie, je me rends sur
                <a className="Satte" href="https://www.santepubliquefrance.fr/" target="_blank"> santepubliquefrance.fr</a>
            </p>
            <p className="Link">
                <a href="http://127.0.0.1:8000/dashboard" className="Decor">Le faire plus tard</a>
            </p><br/>
            <button className="Btn">
                <Link className="Repair" to="/WholePie">Remplir le questionnaire</Link>
            </button>
        </div>
        </>
    );
};

export default Activer;