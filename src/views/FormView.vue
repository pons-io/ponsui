<script setup>
import { ref } from 'vue'

const tmp = ref(false)
</script>

<template>
  <h1>Example of a form view</h1>
  <section class="login-form">
    <form class="form">
      <section class="control__flex">
        <fieldset class="control">
          <label class="control__label--required">Email</label>
          <input class="control__input" />
        </fieldset>
        <fieldset class="control">
          <label class="control__label--required">Password</label>
          <input class="control__input" type="password" />
        </fieldset>
      </section>
      <section class="control__flex">
        <label class="checkbox__wrapper">
          <span :class="['checkbox', { 'checkbox--checked': tmp }]">
            <input v-model="tmp" type="checkbox" class="checkbox__input">
            <span class="checkbox__inner"></span>
          </span>
          <span>Remember Me</span>
        </label>
      </section>
    </form>
  </section>
</template>

<style>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 25%;
}
</style>
