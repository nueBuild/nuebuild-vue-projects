<template>
  <nav class="nav" id="nav" v-if="menuRoutes" role="navigation">
    <ul class="nav__list">
      <li class="list__item" v-for="(route, index) in menuRoutes" :key="index">
        <router-link :to="route.path" :key="$route.fullPath">{{ route.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import AppRoutes from '../../router/appRoutes.js'

export default {
  name: 'mainNav',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    menuRoutes() {
      // Return the routes object.
      return AppRoutes
    },
  },
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
