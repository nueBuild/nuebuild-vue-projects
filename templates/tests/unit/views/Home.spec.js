import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'
import TestHelpers from './../../helpers'

describe('Home.vue', () => {
  it('Home component mounts without errors', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const classesSelectors = ['#home', '.home']

  classesSelectors.forEach(selector => {
    it(selector + ' has attributes set', () => {
      const wrapper = shallowMount(Home)
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })

  classesSelectors.forEach(selector => {
    it(selector + ' contains text', () => {
      const wrapper = shallowMount(Home)
      const h = new TestHelpers(wrapper, expect)
      const text = 'This is the home page'
      h.containsText(selector, text)
    })
  })
})
