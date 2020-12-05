<template>
  <div class="contact-us full-screen">
    <div class="wrapper wrapper-full-page section content">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">
                Oops! It seems that this page does not exist.
              </h2>
              <button @click="backToHome" class="btn btn-primary">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFoundPage",
  methods: {
    backToHome() {
      this.$router.push("/");
    },
  },
};
</script>