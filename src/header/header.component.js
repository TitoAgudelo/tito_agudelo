import template from './header.template'

export class HeaderComponent extends HTMLElement {
  static get selector () { return 'app-header' }

  constructor() {                   
    super();   
    this.setDefaultValues()
    this.render()                      
  }

  setDefaultValues () {
    
  }

  render () {
    const temp = template()

    this.innerHTML = `
      ${temp}
    `

    this.addEventListeners()
  }

  addEventListeners () {
      
  }
}
