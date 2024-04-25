<script setup>
defineProps({
  value: {
    type: String,
    default: ''
  }
})
const model = defineModel({
  type: String
})
</script>

<template>
  <label class="radio__wrapper">
    <span :class="['radio', { 'radio--checked': model === value }]">
      <input
        v-model="model"
        class="radio__input"
        type="radio"
        :value="value"
      >
      <span class="radio__inner" />
    </span>
    <span>{{ value }}</span>
  </label>
</template>
