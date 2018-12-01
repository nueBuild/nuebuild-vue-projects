<template>
  <div id="copyright" class="copyright">{{ siteName() }} &copy; {{ currentYear() }}</div>
</template>

<script>
export default {
  name: 'copyright',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {
    siteName() {
      return process.env.VUE_APP_TITLE
    },
    currentYear() {
      return new Date().getFullYear()
    },
  },
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
