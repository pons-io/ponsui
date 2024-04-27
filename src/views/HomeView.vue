<template>
  <main>
    <div class="content">
      <div class="container">
        <section class="info">
          <h1>Coupons Made Easy</h1>
          <p>Signup for Pons today! Make coupon management a breeze for your product and market</p>
          <button class="btn btn--primary">
            Get Started
          </button>
        </section>
        <figure class="image">
          <img src="/svgs/shopping.svg">
        </figure>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 1170px;
}

.content .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  min-height: calc(100vh - 80px);
}

.content .info h1 {
  color: var(--jet);
  font-size: 44px;
}

.content .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: var(--jet);
}

.content .image img {
  height: auto;
  max-width: 100%;
}

@media (max-width: 767px) {
  .content .container {
    gap: 0;
    min-height: calc(100vh - 101px);
    justify-content: center;
    flex-direction: column-reverse;
    width: auto;
  }

  .content .info {
    text-align: center;
    margin-bottom: 1rem;
  }
}

/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (prefers-color-scheme: dark) {
  .content .info h1 {
  color: var(--white);
}

  .content .info p {
    color: var(--white);
  }
}
</style>
