<template>
  <div class="c-about">
    <h2>{{ $t("about.title") }}</h2>
    <p class="text-muted" v-html="$t('about.primaryText')"></p>

    <p class="text-muted">{{ $t('about.featuredText') }}</p>

    <a href="https://www.smashingmagazine.com/2017/10/css-grid-challenge-2017-winners/">
      <img src="static/logo__smashing-magazine--white.svg" alt="Smashing Magazine" width="128">
    </a>

    <p class="text-muted">{{ $t('about.helpUsText') }}</p>

    <a
      @click="trackClick(paypalLink)"
      :href="paypalLink"
      target="_blank"
      rel="noopener"
      :title="$t('about.donate')"
      class="btn btn-outline-warning mb-3"
    >{{ $t('about.donate') }}</a>

    <div class="row">
      <div class="col-xl-8">
        <form action="https://formspree.io/pulsar.dev.team@gmail.com" method="POST" name="sentMessage" id="contactForm" novalidate>

          <div class="form-group">
            <label for="name">{{ $t('contact.form.name.label') }}</label>
            <input v-model="name" type="text" name="name" class="form-control" :placeholder="$t('contact.form.name.label') + '*'" id="name" required :data-validation-required-message="$t('contact.form.name.validation')">
            <p class="help-block text-danger"></p>
          </div>

          <div class="form-group">
            <label for="email">{{ $t('contact.form.email.label') }}</label>
            <input v-model="email" type="email" name="_replyto" class="form-control" :placeholder="$t('contact.form.email.label') + '*'" id="email" required :data-validation-required-message="$t('contact.form.email.validation')">
            <small id="emailHelp" class="form-text text-muted">{{ $t('contact.form.email.helpText') }}</small>
            <p v-if="email && !isValidEmail" class="help-block text-danger">{{ $t('contact.form.email.error') }}</p>
          </div>

          <div class="form-group">
            <label for="message">{{ $t('contact.form.message.label') }}</label>
            <textarea v-model="message" name="message" class="form-control" :placeholder="$t('contact.form.message.label') + '*'" id="message" rows="5" required :data-validation-required-message="$t('contact.form.message.validation')"></textarea>
            <p class="help-block text-danger"></p>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="!canSubmit()">{{ $t('contact.form.submit') }}</button>
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
        message: '',
        paypalLink: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8'
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
      },
      trackClick (url) {
        window.ga('send', 'event', 'outbound', 'click', url)
      }
    }
  }
</script>
