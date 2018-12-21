import React, {Component} from 'react'

class Footer extends Component {
    constructor () {
        super ()

        this.state = [
            {
                link: <p><a href="https://www.linkedin.com/in/ilantaieb/" rel="noopener noreferrer" target="_blank">Profil LinkedIn</a></p>
            },
            {
                link: <p><a href="mailto:ilan.taieb@outlook.fr">ilan.taieb@outlook.fr</a></p>
            },
            {
                link: <p><a href="https://cvdesignr.com/public/5b3c83b736467" rel="noopener noreferrer" target="_blank">Télécharger mon CV</a></p>
            },
            {
                link: <p><a href="https://github.com/IlanHTaieb" rel="noopener noreferrer" target="_blank">GitHub</a></p>
            }
        ]
    }

    renderElt () {
        return this.state.map(elt => {
            return (
                <div className="footerElt">
                    {elt.link}
                </div>
            )
        })
    }

    render () {
        return (
            <div className="footer">
                {this.renderElt()}
            </div>
        )
    }
}

export default Footer