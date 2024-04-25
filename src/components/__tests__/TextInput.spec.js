import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TextInput from '../inputs/TextInput.vue'

describe('TextInput', () => {
  describe('Label Renders Correctly', () => {
    test('Label Renders with "Hello There"', () => {
      const wrapper = mount(TextInput, { props: { label: 'Hello There', modelValue: '' } })

      expect(wrapper.text()).toContain('Hello There')
    })

    test('Required Class gets added', () => {
      const wrapper = mount(TextInput, { props: { label: 'Hello There', isRequired: true, modelValue: '' } })

      expect(wrapper.find('label').element.classList).toContain('control__label--required')
    })
  })
})
