<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['checked'])
const checked = ref(false)

watch(checked, newVal => {
  emit('checked', newVal)
})
</script>

<template>
  <button
    role="switch"
    :class="['switch', { 'switch--checked': checked }]"
    type="button"
    @click="checked = !checked"
  >
    <div class="switch__handle"></div>
    <span class="switch__inner">
      <span class="switch__inner--checked"></span>
      <span class="switch__inner--unchecked"></span>
    </span>
  </button>
</template>
