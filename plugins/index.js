import SearchForm from './components/searchForm/searchForm.vue'

const components = [SearchForm]

const install = Vue => {
  if (install.installed) return
  install.installed = true
  components.map(component => Vue.components(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}