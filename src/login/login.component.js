import template from './login.template'

export class LoginComponent extends HTMLElement {
  static get selector () { return 'app-login' }

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
    // this.element.querySelector('app-datepicker').addEventListener('selected-date', ({ detail }) => this.updateDate(detail))
    // this.element.querySelector('app-datepicker-filter').addEventListener('selected-filter', ({ detail }) => this.updateFilter(detail))
    // this.element.querySelector('app-timepicker').addEventListener('selected-time', ({ detail }) => this.updateTime(detail))
    // this.element.querySelector('.save').addEventListener('click', () => this.saveAppointment())
    // this.element.querySelector('.cancel').addEventListener('click', () => this.cancelAppointment())
  }
}
