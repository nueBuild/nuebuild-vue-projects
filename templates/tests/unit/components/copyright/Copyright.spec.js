import { shallowMount } from '@vue/test-utils'
import Copyright from '@/components/copyright/Copyright'
import TestHelpers from './../../../helpers.js'

describe('Copyright.vue', () => {
  it('Copyright component mounts without errors', () => {
    const wrapper = shallowMount(Copyright)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const attrSelectors = ['#copyright', '.copyright']

  attrSelectors.forEach(selector => {
    it(selector + ' has attributes set', () => {
      const wrapper = shallowMount(Copyright)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  attrSelectors.forEach(selector => {
    it(selector + ' contains text', () => {
      const wrapper = shallowMount(Copyright)
      const h = new TestHelpers(wrapper, expect)
      const title = process.env.VUE_APP_TITLE
      const date = new Date().getFullYear()
      h.containsText(selector, title + ' © ' + date)
    })
  })
})
