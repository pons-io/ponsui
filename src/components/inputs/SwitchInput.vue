<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])
const checked = ref(false)

function onClick () {
  checked.value = !checked.value
  emit('update:modelValue', checked.value)
}
</script>

<template>
  <button
    role="switch"
    :class="['switch', { 'switch--checked': checked }]"
    type="button"
    @click="onClick"
  >
    <div class="switch__handle" />
    <span class="switch__inner">
      <span class="switch__inner--checked" />
      <span class="switch__inner--unchecked" />
    </span>
  </button>
</template>
