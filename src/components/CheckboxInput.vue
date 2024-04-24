<script setup>
import { ref, watch } from 'vue'

defineProps({
  isRequired: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['checked'])
const checked = ref(false)

watch(checked, newVal => {
  emit('checked', newVal)
})
</script>

<template>
  <label class="checkbox__wrapper">
    <span :class="['checkbox', { 'checkbox--checked': checked }]">
      <input
        v-model="checked"
        type="checkbox"
        class="checkbox__input"
      >
      <span class="checkbox__inner"></span>
    </span>
    <span :class="{ 'control__label--required': isRequired }">{{ label }}</span>
  </label>
</template>
