<template>
  <div class="home row">
    <!-- Navbar -->
    <div class="col-sm-1 bg-inverse px-4 py-5">
      <ul class="nav flex-column text-center">
        <li class="nav-item mb-2">
          <router-link to="/" class="nav-link p-0">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-flask fa-stack-1x fa-inverse"></i>
            </span>
          </router-link>
        </li>
        <!--<li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-gamepad fa-2x" aria-hidden="true"></i></a>
        </li>-->
      </ul>
    </div>

    <!-- Content -->
    <div class="col-sm-9 p-5">
      <h3 class="mb-5">{{ msg }}</h3>
      <router-view></router-view>
    </div>

    <!-- Sidebar -->
    <div class="col-sm-2 bg-faded px-4 py-5">
      <h3>Information</h3>
      <p class="text-muted">{{ $t("sidebar.subtitle") }}</p>

      <language-switcher></language-switcher>
    </div>
  </div>
</template>

<script>
  import ElementCard from './ElementCard'
  import PeriodicTable from './PeriodicTable'
  import LanguageSwitcher from './shared/LanguageSwitcher'

  export default {
    name: 'home',
    components: {
      LanguageSwitcher, PeriodicTable, ElementCard
    },
    data () {
      return {
        msg: 'Mendelable'
      }
    }
  }
</script>

<style scoped>
  .home.row {
    overflow: hidden;
  }
</style>
