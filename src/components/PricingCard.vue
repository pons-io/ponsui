<script setup>
defineProps({
  pricing: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div :class="['w-card', `color-${pricing.color}`]">
    <div class="card-header">
      <div class="w-title">
        {{ pricing.title }}
      </div>
      <div class="w-price">
        {{ pricing.price }}
      </div>
      <div class="container-button">
        <a
          class="w-button"
          :href="pricing.href"
          target="_blank"
        >Sign up</a>
      </div>
    </div>
    <div class="card-content">
      <div
        v-for="(f, i) in pricing.features"
        :key="`${i}-${pricing.id}`"
        class="w-item"
      >
        <span>{{ f.span }} </span> {{ f.text }}
      </div>
    </div>
  </div>
</template>
