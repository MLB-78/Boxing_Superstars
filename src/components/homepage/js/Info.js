import React from 'react';
import '../css/Info.css';

function Info() {
  return (
    <div className="info">
      <div className="orga">
        <img src={`${process.env.PUBLIC_URL}/images/organisation/ufc.png`} id='u' alt="UFC" />
        <img src={`${process.env.PUBLIC_URL}/images/organisation/pfl.png`} id='p' alt="PFL" />
        <img src={`${process.env.PUBLIC_URL}/images/organisation/bellator.png`} id='b' alt="BELLATOR" />
        <img src={`${process.env.PUBLIC_URL}/images/organisation/wbc.png`} id='w' alt="WBC" />
        <img src={`${process.env.PUBLIC_URL}/images/organisation/wba.png`} id='wb' alt="WBA" />
        <img src={`${process.env.PUBLIC_URL}/images/organisation/ibf.png`} id='i' alt="IBF" />
      </div>

      <br></br>

      <h1>BOXING SUPERSTARS c'est quoi ?</h1>
      <br></br>
      <div className="txt">
        <p>
          B.S à été conçu pour vous permettre de vous entraîner en cardio 
          en pratiquant le "Shadow Boxing" avec divers niveaux de difficulté. 
          Vous y trouverez des vidéos, des conseils d'experts et des routines 
          d'entraînement variées pour améliorer votre technique et votre 
          endurance. De plus, un suivi personnalisé est intégré pour vous aider 
          à développer le style de combat que vous souhaitez, en vous fournissant
          des statistiques détaillées et des recommandations adaptées à vos 
          progrès. Avec notre plateforme, vous pouvez transformer votre 
          entraînement quotidien en une expérience motivante et enrichissante.
        </p>
      </div>
      <br></br>

      <div className="cards">

      </div>
    </div>
    
  )
}

export default Info