// Import vue components
<% if (mode =='component') { %>import component from './components/<%- componentName -%>.vue'<% } %><% if (mode == 'component-library') { %>import * as components from './components/index'<% } %>

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return
  install.installed = true<% if (mode =='component') { %>
  Vue.component('TestComponent', component)<% } %><% if (mode == 'component-library') { %>Object.keys(components).forEach(componentName => {
    Vue.component(componentName, components[componentName])
  })<% } %>
}

// Create module definition for Vue.use()
const plugin = {
  install,
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
<% if (mode =='app') { %>
export default component;<% } %><% if (mode =='component' || mode == 'component-library') { %>
export * from './components/index'
<% } %>
