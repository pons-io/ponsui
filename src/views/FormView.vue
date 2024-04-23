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
