<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="radio__wrapper">
    <span :class="['radio', { 'radio--checked': modelValue === value }]">
      <input
        class="radio__input"
        type="radio"
        :value="value"
        @click="$emit('update:modelValue', $event.target.value)"
      >
      <span class="radio__inner" />
    </span>
    <span>{{ value }}</span>
  </label>
</template>
