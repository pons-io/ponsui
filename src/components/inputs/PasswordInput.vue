<script setup>
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
const model = defineModel({
  type: String
})
</script>

<template>
  <fieldset class="control">
    <label :class="{ 'control__label--required': isRequired }">{{ label }}</label>
    <input
      v-model="model"
      class="control__input"
      :required="isRequired"
    >
  </fieldset>
</template>
