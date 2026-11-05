import DefaultTheme from 'vitepress/theme'
import CareerCompare from './CareerCompare.vue'
import SalaryDashboard from './SalaryDashboard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CareerCompare', CareerCompare)
    app.component('SalaryDashboard', SalaryDashboard)
  }
}
