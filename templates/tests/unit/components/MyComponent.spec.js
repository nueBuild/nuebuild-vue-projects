'use strict'

import { shallowMount } from '@vue/test-utils'<% if (mode == 'component-library') { %>
import MyComponent from '@/components/MyComponent'<% } %><% if (mode =='component') { %>
import <%- componentName -%> from '@/components/<%- componentName -%>'<% } %>
import TestHelpers from './../helpers'

describe('App.vue', () => {
  it('App component mounts without errors', () => {<% if (mode == 'component-library') { %>
    const wrapper = shallowMount(MyComponent)<% } %><% if (mode =='component') { %>
    const wrapper = shallowMount(<%- componentName -%>)<% } %>
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  const attrSelectors = ['#my-component']

  attrSelectors.forEach(selector => {
    it(selector + ' has attributes set', () => {<% if (mode == 'component-library') { %>
      const wrapper = shallowMount(MyComponent)<% } %><% if (mode =='component') { %>
      const wrapper = shallowMount(<%- componentName -%>)<% } %>
      const h = new TestHelpers(wrapper, expect)
      h.domHas(selector)
    })
  })
})
