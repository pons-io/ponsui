<template>
  <h1>Example of a form view</h1>
  <div class="form">
    <fieldset>
      <label class="control__label--required">Hello There</label>
      <input class="control__input" />
    </fieldset>
  </div>
  <div class="control">
    <div class="control__label">
      <label class="control__label--required control__label--marked" for="basicUsername">Username</label>
    </div>
    <div class="control__item">
      <div class="control__input__wrapper">
        <div class="control__input__content">
          <input class="control__input" id="basicUsername"/>
        </div>
      </div>
    </div>
  </div>
  <div class="control">
    <div class="control__label">
      <label class="control__label--required control__label--marked" for="basicPassword">Password</label>
    </div>
    <div class="control__item">
      <div class="control__input__wrapper">
        <div class="control__input__content">
          <input class="control__input" id="basicPassword"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.form {
  width: 50%;
  display: flex;
  justify-items: center;
  align-items: center
}
</style>
