import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

function fullScreen ($home = false) {

  if ($home) {
    let elts = document.querySelector('div.home')

      elts.style.height = window.innerHeight + 'px'
    
  } else {
    let elts = document.querySelectorAll('div.fullScreen')


    elts.forEach(elt => {
        elt.style.height = window.innerHeight + 'px'
    })
  }

  document.querySelector('.presentation').style.marginTop = window.innerHeight + 'px'
  document.querySelector('.presentation').style.paddingTop = 200 + 'px'
}

ReactDOM.render(<App />, document.getElementById('root'))


if(window.matchMedia('(max-width: 750px)').matches) {
  document.querySelector('div.home').style.heigth = 300 + 'px'
  document.querySelector('.presentation').style.marginTop = 300 + 'px'
} else {
  window.addEventListener('resize', fullScreen)
  fullScreen()
  
  window.onscroll = (ev) => {
      var B= document.body; //IE 'quirks'
            var D= document.documentElement; //IE with doctype
            D= (D.clientHeight)? D: B;
      
      if (D.scrollTop >= 400) {
          document.querySelector('.presentationElt').setAttribute('class', 'presentationElt presentationRight')
      }
      if (D.scrollTop >= 1000) {
        document.querySelector('.parcoursElt').setAttribute('class', 'parcoursElt parcoursLeft')
      }
    }
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
