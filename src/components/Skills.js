import React, {Component} from 'react'
import html from '../images/HTML5.png'
import css from '../images/CSS3.png'
import js from '../images/JS.png'
import node from '../images/nodeJS.png'
import mongoDB from '../images/mongodb.png'
import react from '../images/reactJS.png'
import wp from '../images/WP.png'
import vsc from '../images/VSC.png'
import git from '../images/github.png'
import fz from '../images/filezilla.png'
import php from '../images/php.png'
import MySQL from '../images/MySQL.png'

class Skills extends Component {
    constructor () {
        super ()
        this.state = {
            skills: [
                {
                    name: 'HTML5',
                    logo: <img className="logo" src={html} alt="" />
                },
                {
                    name: 'CSS3',
                    dependencies: [<p>jQuery</p>, <p>BootStrap</p>],
                    logo: <img className="logo" src={css} alt="" />
                },
                {
                    name: 'JavaScript',
                    dependencies: [<p>ES6</p>, <p>jQuery</p>],
                    logo: <img className="logo" src={js} alt="" />
                },
                {
                    name: 'NodeJS', 
                    dependencies: [<p>ExpressJS</p>, <p>Mongoose</p>],
                    logo: <img className="logo" src={node} alt="" />
                },
                {
                    name: 'MongoDB',
                    logo: <img className="logo" src={mongoDB} alt="" />
                },
                {
                    name: 'React',
                    logo: <img className="logo" src={react} alt="" />
                },
                {
                    name: 'WordPress',
                    dependencies: [<p>Thème enfant</p>],
                    logo: <img className="logo" src={wp} alt="" /> 
                },
                {
                    name: 'PHP',
                    dependencies: [<p>MVC</p>, <p>POO</p>],
                    logo: <img className="logo" src={php} alt="" /> 
                },
                {
                    name: 'SQL',
                    dependencies: [<p>MySQL</p>],
                    logo: <img className="logo" src={MySQL} alt="" />
                }
            ],
            technos: [
                {
                    name: 'VisualStudio Code',
                    logo: <img className="logo" src={vsc} alt="" />
                },
                {
                    name: 'Git/GitHub',
                    logo: <img className="logo" src={git} alt="" />
                },
                {
                    name: 'FileZilla',
                    logo: <img className="logo" src={fz} alt="" />
                }
            ]
        }
    }

    renderSkillName () {
        return this.state.skills.map(elt => {

            return (
                <div className="skillsElt">
                    <h3>{elt.name}</h3>
                    <div>
                        <div className="dependencies">
                            {elt.dependencies}
                        </div>
                        <div className="logoElt">
                            {elt.logo}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderSkillTechnos() {
        return this.state.technos.map(elt => {

            return (
                <div className="skillsElt">
                    <h3>{elt.name}</h3>
                    <div>
                        <div className="logoElt">
                            {elt.logo}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <div className="skills">
                <div className="skillsContainer">
                    <h2>Mes compétences</h2>
                    <div className="compContainer skillsContainer">
                        {this.renderSkillName()}
                    </div>
                    <h2>Environnement</h2>
                    <div className="envContainer skillsContainer">
                        {this.renderSkillTechnos()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills