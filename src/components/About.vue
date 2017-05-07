<template>
  <div class="c-about">
    <h2>About Mendelable</h2>
    <div class ="col-6">
      <p>
        Mendelable is a free open-source project hosted by Github and developped by the team Plusar which you can contribute through this form.
        You can conctact us if you find a problem in our datasets, if you have a technical issue or if you have just a simple question.
      </p>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <form action="https://formspree.io/teampulsar.dev@gmail.com" method="POST" name="sentMessage" id="contactForm" novalidate>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input v-model="name" type="text" name="name" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name.">
                <p class="help-block text-danger"></p>
              </div>
              <div class="form-group">
                <input v-model="email" type="email" name="_replyto" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address.">
                <p v-if="email && !isValidEmail" class="help-block text-danger">Please enter a valid email address.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea v-model="message" name="message" class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-lg-12 text-center">
              <div id="success"></div>
              <button type="submit" class="btn btn-xl" :disabled="!canSubmit()">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    computed: {
      isValidEmail: function () {
        let regex = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}')
        return regex.test(this.email)
      }
    },
    methods: {
      canSubmit () {
        return this.name && this.isValidEmail && this.message
      }
    }
  }
</script>
