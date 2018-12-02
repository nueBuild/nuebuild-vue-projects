import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MainNav from '@/components/nav/MainNav'
import TestHelpers from './../../../helpers.js'

const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)

describe('MainNav.vue', () => {
  it('Main component mounts without errors', () => {
    const wrapper = shallowMount(MainNav, {
      localVue,
      router,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const attrSelectors = ['.nav']

  attrSelectors.forEach(selector => {
    it(selector + ' has attributes set', () => {
      const wrapper = shallowMount(MainNav, {
        localVue,
        router,
      })
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  attrSelectors.forEach(selector => {
    it('If ' + selector + ' has the role attribute', () => {
      const wrapper = shallowMount(MainNav, {
        localVue,
        router,
      })
      const h = new TestHelpers(wrapper, expect)
      h.hasAttribute(selector, 'role')
    })
  })
})
