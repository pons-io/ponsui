<script setup>
import { ref } from 'vue'

const props = defineProps({
  isRequired: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  },
  validation: {
    type: Function,
    default: () => ({ isValid: true })
  }
})
const model = defineModel({
  type: String
})
const errored = ref(false)
const errMsg = ref('Please fill out this field')

function validate () {
  const { isValid, msg } = props.validation(model.value)

  if (isValid) {
    errored.value = false
  } else {
    errMsg.value = msg
    errored.value = true
  }
}

</script>

<template>
  <fieldset class="control">
    <label :class="{ 'control__label--required': isRequired }">{{ label }}</label>
    <input
      v-model="model"
      :class="['control__input', { 'status--error': errored }]"
      type="text"
      :required="isRequired"
      @invalid="errored = true"
      @blur="validate"
    >
    <p
      :class="['error__msg', { 'err--hidden': !errored }]"
    >
      {{ errMsg }}
    </p>
  </fieldset>
</template>
