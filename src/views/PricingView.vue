<script setup>
import { computed } from 'vue'
import PricingCard from '@/components/PricingCard.vue'

const pricing = computed(() => {
  return [
    {
      id: 1,
      title: 'Basic',
      features: [
        {
          span: '100',
          text: 'Coupons'
        }, {
          span: '1',
          text: 'Organization'
        }, {
          span: '1000',
          text: 'API Calls'
        }
      ],
      price: 'Free',
      color: 'accent',
      href: '#'
    }, {
      id: 2,
      title: 'Standard',
      features: [
        {
          span: '500',
          text: 'Coupons'
        }, {
          span: '5',
          text: 'Organizations'
        }, {
          span: '5000',
          text: 'API Calls'
        }
      ],
      price: '$250/Month',
      color: 'secondary',
      href: '#'
    }, {
      id: 3,
      title: 'Premium',
      features: [
        {
          span: 'Unlimited',
          text: 'Coupons'
        }, {
          span: '10',
          text: 'Organizations'
        }, {
          span: 'Unlimited',
          text: 'API Calls'
        }
      ],
      price: '$500/Month',
      color: 'violet',
      href: '#'
    }, {
      id: 4,
      title: 'Customized',
      features: [
        {
          span: 'Custom',
          text: 'Coupons'
        }, {
          span: 'Custom',
          text: 'Organizations'
        }, {
          span: 'Custom',
          text: 'API Calls'
        }
      ],
      price: 'Custom',
      color: 'red',
      href: '#'
    }
  ]
})
</script>

<template>
  <div class="w-table">
    <div class="w-table-cell">
      <div class="w-container">
        <pricing-card
          v-for="p in pricing"
          :key="p.id"
          :pricing="p"
        />
      </div>
    </div>
  </div>
</template>
