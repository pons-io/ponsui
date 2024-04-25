<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  isRequired: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <fieldset class="control">
    <label :class="{ 'control__label--required': isRequired }">{{ label }}</label>
    <input
      :value="modelValue"
      class="control__input"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </fieldset>
</template>
