<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: Boolean
  },
  label: {
    type: String,
    required: true
  },
  isRequired: {
    type: Boolean,
    default: false
  }
})
const checked = ref(false)

function onClick () {
  checked.value = !checked.value

  emit('update:modelValue', checked.value)
}
</script>

<template>
  <label class="checkbox__wrapper">
    <span :class="['checkbox', { 'checkbox--checked': modelValue }]">
      <input
        type="checkbox"
        class="checkbox__input"
        @input="onClick"
      >
      <span class="checkbox__inner" />
    </span>
    <span :class="{ 'control__label--required': isRequired }">{{ label }}</span>
  </label>
</template>
