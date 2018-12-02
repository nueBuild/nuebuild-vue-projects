<template>
  <div id="app"><% if (mode =='app') { %>
    <header id="header"><MainNav /></header>
    <main id="main"><router-view /></main>
    <footer id="footer"><Copyright /></footer><% } %><% if (mode == 'component-library') { %>
    <MyComponent /><% } %><% if (mode =='component') { %>
    <<%- componentName -%> /><% } %>
  </div>
</template>

<script><% if (mode =='app') { %>
import MainNav from './components/nav/MainNav'
import Copyright from './components/copyright/Copyright'<% } %><% if (mode == 'component-library') { %>
import MyComponent from './components/MyComponent'<% } %><% if (mode == 'component') { %>
import <%- componentName -%> from './components/<%- componentName -%>'<% } %>

export default {
  name: 'app',
  components: {<% if (mode =='app') { %>
    MainNav,
    Copyright,<% } %><% if (mode == 'component-library') { %>
    MyComponent<% } %><% if (mode =='component') { %>
    <%- componentName -%><% } %>
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  // Lifecycle Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}
</script>
