import React, {Component} from 'react'

class Presentation extends Component {
    render() {
        return (
            <div className="section presentation">
                <div className="sectionContainer presentationContainer">
                    <div className="sectionElt presentationElt">
                        <h2>Ilan Taieb, développeur web !</h2>

                        <div className="sectionText">
                            <p>
                                Je suis en formation de développeur web chez OpenClassrooms, 
                                et je recherche une alternance de 24mois pour valider mon diplome de
                                développeur d'applications front de niveau bac +4</p>
                        </div>
                    </div>
                </div>
                <div className="imagePresentation">
                    <div className="overlayImg"></div>
                </div>
            </div>
        )
    }
}

export default Presentation