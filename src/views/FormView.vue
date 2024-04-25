<script setup>
import { ref } from 'vue'
import TextInput from '@/components/inputs/TextInput.vue'
import CheckboxInput from '@/components/inputs/CheckboxInput.vue'
import SwitchInput from '@/components/inputs/SwitchInput.vue'
import RadioInput from '@/components/inputs/RadioInput.vue'
import EmailInput from '@/components/inputs/EmailInput.vue'
import PasswordInput from '@/components/inputs/PasswordInput.vue'

const tmp = ref(false)
const checked = ref(false)
const switchChecked = ref(false)
const test = ref('')
const radioTest = ref('')
const radioCompTest = ref('')
const email = ref('')
const password = ref('')
const errHandlers = {
  email: val => {
    if (val && val.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
      return { isValid: true }
    }

    return { isValid: false, msg: 'Please enter a valid email' }
  }
}
</script>

<template>
  <h1>Example of a form view</h1>
  <section class="login-form">
    <form
      class="form"
      @submit.prevent="validate"
    >
      <section class="control__flex">
        <email-input
          v-model="email"
          is-required
        />
      </section>
      <section class="control__flex">
        <text-input
          v-model="test"
          :label="'Email'"
          is-required
          :validation="errHandlers.email"
        />
        <text-input
          v-model="password"
          :label="'Live'"
          is-required
          :validation="errHandlers.email"
        />
      </section>
      <section class="control__flex">
        <checkbox-input
          v-model="checked"
          :label="'Hello There'"
        />
      </section>
      <section class="control__flex">
        <label class="checkbox__wrapper">
          <span :class="['checkbox', { 'checkbox--checked': tmp }]">
            <input
              v-model="tmp"
              type="checkbox"
              class="checkbox__input"
            >
            <span class="checkbox__inner" />
          </span>
          <span>Remember Me</span>
        </label>
      </section>
      <section class="control__flex">
        <switch-input v-model="switchChecked" />
      </section>
      <hr>
      <section class="control__flex">
        <div class="radio__group">
          <label class="radio__wrapper">
            <span :class="['radio', { 'radio--checked': radioTest === 'apple' }]">
              <input
                v-model="radioTest"
                class="radio__input"
                type="radio"
                value="apple"
              >
              <span class="radio__inner" />
            </span>
            <span>Apple</span>
          </label>
          <label class="radio__wrapper">
            <span :class="['radio', { 'radio--checked': radioTest === 'pear' }]">
              <input
                v-model="radioTest"
                class="radio__input"
                type="radio"
                value="pear"
              >
              <span class="radio__inner" />
            </span>
            <span>Pear</span>
          </label>
        </div>
      </section>
      <hr>
      <radio-input
        v-model="radioCompTest"
        value="pineapple"
      />
      <radio-input
        v-model="radioCompTest"
        value="coconut"
      />
      <hr>
      <section class="control__flex">
        <select class="control__select">
          <option>Demo</option>
          <option>World</option>
        </select>
      </section>
      <button>Submit</button>
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
  width: 50%;
}
</style>
