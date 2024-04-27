<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Vue3Snackbar } from 'vue3-snackbar'
import { Menu } from 'lucide-vue-next'

const showMobile = ref(false)
</script>

<template>
  <header>
    <i>
      <Menu
        size="32"
        @click="showMobile = !showMobile"
      />
    </i>
    <nav :class="['nav-content', showMobile ? 'open-menu' : 'closed-menu']">
      <div class="logo">
        <router-link to="/">
          Pons
        </router-link>
      </div>
      <ul class="nav-items">
        <li>
          <router-link to="/api">
            API
          </router-link>
        </li>
        <li>
          <router-link to="/pricing">
            Pricing
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            Log In
          </router-link>
        </li>
        <li>
          <router-link
            class="get-started"
            to="/getting-started"
          >
            Get Started
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
  <vue3-snackbar
    top
    right
    dense
    shadow
    border="left"
    :duration="4000"
  />
</template>

<style scoped>
i {
  display: none;
}

@media screen and (max-width: 768px) {
  i {
    display: flex;
    padding: 1rem;
    justify-content: end;
  }
}
</style>
