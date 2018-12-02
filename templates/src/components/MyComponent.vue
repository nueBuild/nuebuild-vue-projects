<template>
  <div id="my-component">
    <h1>My Comnponent</h1>
  </div>
</template>

<script>
export default {<% if (mode == 'component-library') { %>
  name: 'MyComponent',<% } %><% if (mode =='component') { %>
  name: '<%- componentName -%>',<% } %>
  components: {},
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
