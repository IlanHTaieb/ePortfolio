import React, {Component} from 'react'

class FullScreen {
    static fullScreen ($home = false) {
        if ($home) {
          let elts = document.querySelector('div.home')
      
          elts.style.height = window.innerHeight + 'px'
        } else {
          let elts = document.querySelectorAll('div.fullScreen')
      
          elts.forEach(elt => {
              elt.style.height = window.innerHeight + 'px'
          })
        }
    }
}

export default FullScreen