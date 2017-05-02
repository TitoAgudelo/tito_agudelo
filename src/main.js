import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const components = [
  HeaderComponent,
  LoginComponent,
  DashboardComponent
]

components.forEach(component => customElements.define(component.selector, component))
