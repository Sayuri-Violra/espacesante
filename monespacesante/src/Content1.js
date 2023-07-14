import React from 'react';
import './Content1.css';
import First from './1.svg';
import './Content2.css';
import Second from './2.svg';
import './Content3.css';
import Third from './3.svg';
import Thirds from './3.1.jpg';
import './Content4.css';
import Forth from './4.svg';
import './Content5.css';
import Fifth from './5.svg';
import Fifths from './5.1.png';
import './Content6.css';
import Sixth from './6.svg';
import Sixths from './6.1.jpg';
import './Content7.css';
import Eight from './8.jpg';
import './Content8.css';
import Nine from './7.png';
import Nine1 from './AppStore.png';
import Nine2 from './GooglePlay.png';
import './Last.css';
import Assurance from './Assurance.svg';
import Ministère from './Mini.png';
import Santé from './Santé.svg';
import './Footer.css';
import Connecter from './activer/Connecter.js'
import { Link, Usenavigate, useNavigate} from 'react-router-dom';
import Navbar from './Navbar.js';
import Message from './message.js';

const Content1 = () => {
  const History = useNavigate();
    return (
        <body>
          <Navbar/><br/><br/><br/><br/>
          <Message/>
            <div className="center">
                <div className="text">
                    <div className="pink">Le service public pour gérer sa santé</div>
                    <div className="black">Vous avez la main sur votre santé</div><br/>
                    <div className="Gray">Mon espace santé vous permet de stocker et 
                    partager vous documents et<br/> données de santé en
                    toute confidentialité.</div>
                    <br/>
                    <a href="http://127.0.0.1:8000/login">
                      <button className="btn">Activer Mon espace santé</button>
                    </a>
                </div>
                <div className="image">
                    <img src={First} alt="Image"/>
                </div>
            </div>
            <div className="container">
      <div className="image-container">
        <img src={Second} alt="Your Image" />
      </div>
      <div className="text-container">
        <div className="p">Mon profil médical</div>
        <div className="b">Partager l'essntiel de vos
        <br/>informations de santé</div><br/>
        <div className="g">
            Vous pouvez ajouter des informations sur:<br/>
            <ul>
                <li>Vos maladies et sujets de santé</li>
                <li>Vos traitements</li>
                <li>Vos allergies</li>
                <li>Vos vaccinations</li>
                <li>Vos mesures de santé</li>
            </ul>
            Vous pouvez également partager une synthèse de profil avec les
            <br/>professionnels de santé de votre choix.
        </div>
      </div>
    </div>
    <div className="container">
      <div className="text-containe">
        <div className="pi">Mes documents de santé</div>
        <div className="bl">Rtrouvez tous vos documents
        <br/>médicaux au même endroit</div><br/>
        <div className="gr">Vous pouvez comme vos professionnels de santé déposer tous vos
        <br/>documents importants dans Mon espace santé. Vous y retrouvez le contenu
        <br/>de votre Dossier Médical partagé (DMP) si vous en possédez un.</div>
      </div>
      <div className="image-containe">
        <img src={Third} alt="First Image"/>
      </div>
      <div className="another-image">
        <img src={Thirds} alt="Second Image"width="350" height="200"/>
      </div>
    </div>
    <div className="contain">
      <div className="image-contain">
        <img src={Forth} alt="Your Image" />
      </div>
      <div className="text-contain">
        <div className="p">Ma messagerie de santé</div>
        <div className="b">Faciliter le suivi de votre santé
        <br/>avec vos professionnels de santé</div><br/>
        <div className="g">Grâce à la messageri sécurisé, vos professionnels de santé peuvent vous
        <br/>enovoyer des informations en toute confidentialité.<br/>
        <br/>Ils peuvent également vous transmettre des documents que vous pouvez
        <br/>ajouter à votre dossier médical.</div>
      </div>
    </div>
    <div className="cont">
      <div className="textcont">
        <div className="pin">Mon catalogue de services</div>
        <div className="bla">Des services numériques pour
        <br/>accompagner votre santé</div><br/>
        <div className="gra">Un catalogue de services numériques de confiance, utiles et sélectionnés
        <br/>pour vous par l'Etat.
        </div>
      </div>
      <div className="imgcont">
        <img src={Fifth} alt="First Image"/>
      </div>
      <div className="otherimg">
        <img src={Fifths} alt="Second Image"width="360" height="230"/>
      </div>
    </div>
    <div className="x">
      <div className="y">
        <img src={Sixth} alt="Your Image" />
      </div>
      <div className="yo">
        <img src={Sixths} alt="Another Image" width="400" height="250"/>
      </div>
      <div className="z">
        <div className="u">Mes profils rattachés</div>
        <div className="v">Gérez la santé de vos enfants</div><br/>
        <div className="w">Vous avez la possibilité d'activer Mon espace santé pour vos enfants. Vous
        <br/>bénéficiez de ces services pour suivre leur santé. Leurs profils sont
        <br/>directement rattachés à votre service Mon espace santé.</div>
      </div>
    </div>
    <div className="Seven">
        <p className="Titre">Vos données sont sécurisées</p>
        <div className="Gris">
            Mon espace santé, une plateforme sécurisée et porposée par le service public.
        </div>
        <div className="Une-Image">
            <img src={Eight} alt="Image" width="720" height="160"/>
        </div>
        <div className="Case1">
            <p className="Bleue">Hébergement</p>
            <p className="Gris">Vos données sont hébergées en <br/>France</p>
        </div>
        <div className="Case2">
            <p className="Rose">Sécurité</p>
            <p className="Gris">Vos données sont hébergées dans <br/>
            un environnement sécurisé, certifié<br/>
            selon le réfèrentiel HDS*</p>
        </div>
        <div className="Case3">
            <p className="Bleue">Protection</p>
            <p className="Gris">Vos données sont protégées par
            <br/>l'Assurance Maladie</p>
        </div><br/>
        <p className="Gris1">*Hébergeur de Données de Santé</p><br/>
        <a href="#" className="Web">En savoir plus sur la protection de mes données</a>
    </div>
    <div className="Middle">
        <div className="Picture">
            <img src={Nine} alt="Image" height="460" width="355"/>
        </div>
        <div className="All">
        <p className="Pinked"><p className="UMove">Nouveau!</p></p>
        <p className="Darkened"><p className="UUMove">Découvrez l'application Mon espace santé</p></p>
        <p className="Grayed"><p className="UUUMove">Retrouvez tous vos services Mon espace santé dans la nouvelle application!
        Disponible sur l'App<br/>Store et Google Play.</p></p>
        <a href="https://apps.apple.com/us/app/mon-espace-sant%C3%A9/id1589255019" target="_blank">
          <img className="Picture1" src={Nine1} alt="Image" height="37.5" width="100"/>
          </a>
          &nbsp;&nbsp;&nbsp;
        <a href="https://play.google.com/store/apps/details?id=fr.assurancemaladie.monespacesante" target="_blank">
            <img src={Nine2} alt="Image" className="Picture2" height="37.5" width="100"/>
        </a>
        </div>
    </div>
    <div className="Whole">
        <p className="Big">Vous avez la main sur votre santé</p>
        <p className="Notbig">Mon espace santé est un espace numérique individuel. Il permet de stocker et partager vos documents et données de santé en toute confidentialité.</p>
        <a href="http://127.0.0.1:8000/login"><button className="Whiter">M'opposer à Mon espace santé</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="http://127.0.0.1:8000/login">
          <button className="Bluer">Activer Mon espace santé</button>
        </a>
        <p className="Normal">Un service de</p>
        <a href="https://www.ameli.fr/assure" target="_blank">
          <img className="Pre" src={Assurance} alt="Image"/>
        </a>
        <a href="https://sante.gouv.fr/" target="_blank">
          <img className="Deu" src={Ministère} alt="Image" width="155" height="100"/>
        </a>
        <a href="https://www.msa.fr/lfp" target="_blank">
          <img className="Tro" src={Santé} alt="Image"/>
        </a>
        <div className="table">
      <table>
      <tr>
        <td>Accessibilité: partiellement conforme</td>&nbsp;&nbsp;&nbsp;&nbsp;
        <td>Mention légales et CGU</td>&nbsp;&nbsp;&nbsp;&nbsp;
        <td>Protection des données personnelles</td>&nbsp;&nbsp;&nbsp;&nbsp;
        <td>Gestion des cookies</td>&nbsp;&nbsp;&nbsp;&nbsp;
        <td>Aide & Contact</td>&nbsp;&nbsp;&nbsp;&nbsp;
        <td>A propos</td>&nbsp;&nbsp;&nbsp;&nbsp;
      </tr>
    </table>
        </div>
    </div>
    <footer className="footer">
            <div className="footer-content">
            <br/><p className="footer-text">© 2021 - Mon espace santé - Tous droits réservés</p><br/>
            </div>
        </footer>

        </body>
    );
};

export default Content1;