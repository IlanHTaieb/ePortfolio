import React, {Component} from 'react'
import webagency from '../images/webagency.png'
import strasbourg from '../images/strasbourg.png'
import velov from '../images/velov.png'

class Portfolio extends Component {
    constructor () {
        super ()

        this.state = [
            {
                name: 'Wab Agency',
                logo: <a href="http://web-agency-op.fr/" rel="noopener noreferrer" target="_blank"><img className="logo" src={webagency} alt="" /></a>,
                dir: 'http://web-agency-op.fr/',
                description: 'Integrer une maquette de site web en HTML',
                skills: 'HTML5, CSS3, Responsive Design, Normes W3C, Animations'
            },
            {
                name: 'Un regard sur Strasbourg',
                logo: <a href="http://un-regard-sur-strasbourg.fr/" rel="noopener noreferrer" target="_blank"><img className="logo" src={strasbourg} alt="" /></a>,
                dir: 'http://un-regard-sur-strasbourg.fr/',
                description: 'Personaliser un thème WordPress',
                skills: 'Wordpress, CSS3, Thème enfant'
            },
            {
                name: 'Velo\'v',
                logo: <a href="http://velov-op.fr/" rel="noopener noreferrer" target="_blank"><img className="logo" src={velov} alt="" /></a>,
                dir: 'http://velov-op.fr/',
                description: 'Développer une application web de location de vélo',
                skills: 'JavaScript, API GoogleMap et JCDecaux, WebStorage, Canvas',
                info: <div>
                    <h3>/!\</h3>
                    <p className="text">
                        Dessin canvas décalé, mais signature fonctionnelle
                    </p>
                </div>
            }
        ]
    }

    renderFolios () {
        return this.state.map(elt => {
            return (
                <div className="portfolioElt">
                    <h3>{elt.name}</h3>
                    <a href={elt.dir} rel="noopener noreferrer" target="_blank">
                        {elt.logo}
                    </a>
                    <h4>Mission</h4>
                    <p className="text">{elt.description}</p>
                    <h4>Compétences</h4>
                    <p className="text">{elt.skills}</p>
                    {elt.info}
                </div>
            )
        })
    }

    render () {
        return (
            <div className="portfolio">
                    <h2>Mes réalisations</h2>
                    <p className="text">Cliquer sur le logo pour visiter le site</p>
                    <div className="portfolioContainer eltContainer">
                        {this.renderFolios()}
                    </div>
            </div>
        )
    }
}

export default Portfolio