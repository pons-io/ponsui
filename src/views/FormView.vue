<script setup>
import { ref } from 'vue'
import TextInput from '@/components/TextInput.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import SwitchInput from '@/components/SwitchInput.vue'

const tmp = ref(false)
const checked = ref(false)
const switchChecked = ref(false)
const test = ref('')

function onChecked (val) {
  console.log(val)
  checked.value = val
}

function onSwitch (val) {
  console.log(val)
  switchChecked.value = val
}
</script>

<template>
  <h1>Example of a form view</h1>
  <section class="login-form">
    <form class="form">
      <section class="control__flex">
        <text-input v-model="test" :label="'Email'" is-required />
        <fieldset class="control">
          <label class="control__label--required">Password</label>
          <input class="control__input" type="password" />
        </fieldset>
      </section>
      <section class="control__flex">
        <checkbox-input @checked="onChecked" :label="'Hello There'" />
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
      <section class="control__flex">
        <switch-input @checked="onSwitch" />
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
