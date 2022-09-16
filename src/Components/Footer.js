import React from 'react';
import  '../Styles/Footer.css';



const Footer =  () => {
    return (       
        <div className="footer">
                
            <div className ="footer-info">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fle-bouquet-cinema-1-logo-png-transparent.png&f=1&nofb=1" 
                className="cinema-logo" 
                alt="wallapop"/><br />
                <span className="cinema-subtitle">Nuclio Cineplex © 2022 © Copyright</span>
            </div>

            <div className="footer-entry">
                <div className="fd-title">Nuclio Cineplex</div>
                <ul>                   
                    <li><a href="https://www.facebook.com/AntonioMeLo95" title="Quiénes somos" className="list">Quiénes somos</a></li>
                    <li><a href="https://nuclio.school/?lang=en" title="De dónde venimos" className="list">De dónde venimos</a></li>
                    <li><a href="https://bit.ly/3ReNOtf" title="A dónde vamos" className="list">A dónde vamos</a></li>
                </ul>
            </div>

            <div className="footer-entry">
                <div className="fd-title">Localizaciones</div>
                <ul>
                    <li><a href="https://www.madrid.es/portal/site/munimadrid" title="Madrid" className="list">Madrid</a></li>
                    <li><a href="https://www.malaga.eu/" title="Málaga" className="list">Málaga</a></li>
                    <li><a href="https://www.granada.org/" title="Granada" className="list">Granada</a></li>
                </ul>
            </div>

            <div className="footer-entry">
            <div className="fd-title">Redes</div>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" title="Youtube" className="list">Youtube</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" title="Twitter" className="list">Twitter</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" title="Facebook" className="list">Facebook</a></li>
                    <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" title="aedIn" className="list">LinkedIn</a></li>
                </ul>
            </div>

            <div className="footer-entry">
            <div className="fd-title">Otras opciones</div>
                <ul>
                    <li><a href="https://play.google.com/store/apps/details?id=com.usefultools.beersimulator.ibeer" title="Descarga la app" className="list">Descarga la app</a></li>
                    <li><a href="https://rrhconsultores.com.mx/wp-content/uploads/2020/05/Politica_Screenshot.png" title="Política de privacidad" className="list">Política de privacidad</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Footer;