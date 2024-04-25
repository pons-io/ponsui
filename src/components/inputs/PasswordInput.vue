<script setup>
defineProps({
  isRequired: {
    type: Boolean,
    default: false
  }
})
const model = defineModel({
  type: String
})
</script>

<template>
  <fieldset class="control">
    <label class="control__label--required">Password</label>
    <input
      v-model="model"
      class="control__input"
      type="password"
      required
    >
  </fieldset>
</template>
