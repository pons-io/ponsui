<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  isRequired: {
    type: Boolean,
    default: false
  }
})
const model = defineModel({
  type: Boolean
})
</script>

<template>
  <label class="checkbox__wrapper">
    <span :class="['checkbox', { 'checkbox--checked': model }]">
      <input
        v-model="model"
        type="checkbox"
        class="checkbox__input"
      >
      <span class="checkbox__inner" />
    </span>
    <span :class="{ 'control__label--required': isRequired }">{{ label }}</span>
  </label>
</template>
