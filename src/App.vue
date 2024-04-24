<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          Pons
        </router-link>
      </div>
      <ul class="links">
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

  <router-view />
</template>

<style scoped>
header {
  padding: 1rem;
  background-color: var(--color-background-soft);
}
nav {
  display: flex;
  align-items: center;
}

nav .logo {
  font-style: italic;
  text-transform: uppercase;
  font-size: 20px;
}

nav .links {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
}

nav .links li a {
  margin-left: 1.6rem;
  transition: .3s;
}

nav .links li a:hover {
  color: var(--accent);
}

nav .links li a.get-started {
  border-radius: 20px;
  padding: 0.5rem 1rem;
  background-color: var(--accent);
  color: var(--white);
}

nav .links li a.get-started:hover {
  background-color: var(--pale);
  color: var(--jet);
}

@media (max-width: 767px) {
  nav .links li {
    margin-left: auto;
  }
}
</style>
