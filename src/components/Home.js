import React from 'react'

class Home extends React.Component {
    constructor () {
      super()
  
      this.state = {
        content: 'E-Portfolio Ilan Taieb'
      }
    }

    render() {
        return (
            <div className="fullScreen home">
                    <h1>{this.state.content}</h1>
            </div>
        )
    }
}

export default Home