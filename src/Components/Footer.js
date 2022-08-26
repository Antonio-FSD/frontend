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
                    <li><a href="#" title="Quiénes somos" className="list">Quiénes somos</a></li>
                    <li><a href="https://nuclio.school/?lang=en" title="De dónde venimos" className="list">De dónde venimos</a></li>
                    <li><a href="https://bit.ly/3ReNOtf" title="A dónde vamos" className="list">A dónde vamos</a></li>
                </ul>
            </div>

            <div className="footer-entry">
                <div className="fd-title">Localizaciones</div>
                <ul>
                    <li><a href="#" title="Madrid" className="list">Madrid</a></li>
                    <li><a href="#" title="Málaga" className="list">Málaga</a></li>
                    <li><a href="#" title="Granada" className="list">Granada</a></li>
{/*                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.1287628005944!2d-4.423763684284916!3d36.71946867996539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f795b1a4f35f%3A0xf3d44789b8b0e006!2sC.%20Marqu%C3%A9s%20de%20Larios%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1661549843535!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>*/}                </ul>
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
                    <li><a href="#" title="Política de privacidad" className="list">Política de privacidad</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Footer;