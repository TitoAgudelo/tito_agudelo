import template from './dashboard.template'

export class DashboardComponent extends HTMLElement {
  static get selector () { return 'app-dashboard' }

  constructor() {                   
    super();   
    this.setDefaultValues()
    this.render()                      
  }

  setDefaultValues () {
    this.user = {};
    this.user.name = 'Jessica Parker'
    this.user.location = 'Newport Beach, CA'
    this.user.phone = '(949)325-68594'
    this.user.page = 'www.seller.com'
  }

  render () {
    const temp = template({
      user: this.user
    })

    this.innerHTML = `
      ${temp}
    `

    this.addEventListeners()
  }

  resetDropdown () {
    let dropList = this.querySelectorAll('.dropdown-detail.active')
    dropList.forEach(function(value, key) {
      value.setAttribute('class', 'dropdown-detail')
    })
  }

  editDetail (elem) {
    let dropDown = elem.parentElement.lastElementChild
    let classes = 'dropdown-detail active'
    this.resetDropdown()
    dropDown.setAttribute('class', classes)
  }

  setValues (elem) {
    let val = elem.parentElement.parentElement.children[1].firstElementChild.value
    let typeOf = elem.parentElement.parentElement.children[1].firstElementChild.getAttribute('name')
    switch(typeOf) {
      case "name":
          this.user.name = val
          break;
      case "page":
          this.user.page = val
          break;
      case "phone":
          this.user.phone = val
          break;
      case "location":
          this.user.location = val
          break;
    }
    this.render()
  }

  addEventListeners () {
    this.querySelectorAll('.item-edit').forEach(element => element.addEventListener('click', () => this.editDetail(element)))
    this.querySelectorAll('.save').forEach(element => element.addEventListener('click', () => this.setValues(element)))
    this.querySelectorAll('.cancel').forEach(element => element.addEventListener('click', () => this.resetDropdown()))
  }
}
