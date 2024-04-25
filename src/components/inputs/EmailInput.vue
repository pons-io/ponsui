<script setup>
import { ref } from 'vue'

defineProps({
  isRequired: {
    type: Boolean,
    default: false
  }
})
const model = defineModel({
  type: String
})
const errored = ref(false)

function validate () {
  if (model.value && model.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
    errored.value = false
  } else {
    errored.value = true
  }
}
</script>

<template>
  <fieldset class="control">
    <label :class="{ 'control__label--required': isRequired }">Email</label>
    <input
      v-model="model"
      :class="['control__input', { 'status--error': errored }]"
      type="email"
      :required="isRequired"
      @blur="validate"
      @invalid="errored = true"
    >
    <p
      :class="['error__msg', { 'err--hidden': !errored }]"
    >
      Please enter a valid email
    </p>
  </fieldset>
</template>
