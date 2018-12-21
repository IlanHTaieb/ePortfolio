import React, {Component} from 'react'

class Parcours extends Component {
    render () {
        return (
            <div className="section parcours">
                <div className="imageParcours">
                    <div className="overlayImg"></div>
                </div>
                <div className="sectionContainer parcoursContainer">
                    <div className="sectionElt parcoursElt right">
                        <h2>Mon histoire ?</h2>

                        <div className="sectionText">
                            <p>
                            J'ai travaillé pendant deux ans dans une association caritative, 
                            en parallèle, je visitais le site d'OpenClassrooms (et bien avant je visitais le Site du Zéro ;D)<br />
                            Jusqu'à me décider à en faire mon métier, et comme c'est le Site du Zéro qui m'a fait découvrir la passion du code,
                            je me suis naturellement tourné vers eux pour effectuer ma formation ;)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parcours