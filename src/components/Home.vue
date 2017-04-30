<template>
  <div class="home row">
    <!-- Navbar -->
    <div class="col-sm-1 bg-inverse px-0 py-5">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/" exact class="nav-link d-flex justify-content-center">
            <i class="material-icons">home</i>
          </router-link>
        </li>
        <li class="nav-item mt-5">
          <a class="nav-link d-flex justify-content-center" href="#"><i class="material-icons md-36">games</i></a>
        </li>
      </ul>
    </div>

    <!-- Content -->
    <div class="col-sm-9 p-5">
      <div class="d-flex justify-content-between">
        <h3 class="mb-5">{{ msg }}</h3>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="searchInput" :placeholder="$t('general.search')">
          </div>
        </form>
      </div>

      <router-view></router-view>
    </div>

    <!-- Sidebar -->
    <div class="col-sm-2 bg-faded px-4 py-5">
      <h3>{{ $t("sidebar.title") }}</h3>
      <p class="text-muted">{{ $t("sidebar.subtitle") }}</p>

      <language-switcher></language-switcher>
    </div>
  </div>
</template>

<script>
  import ElementProfile from './ElementProfile'
  import PeriodicTable from './PeriodicTable'
  import LanguageSwitcher from './shared/LanguageSwitcher'

  export default {
    name: 'home',
    components: {
      LanguageSwitcher, PeriodicTable, ElementProfile
    },
    data () {
      return {
        msg: 'Mendelable'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/bootstrap/_variables";

  .home.row {
    overflow: hidden;
  }

  .nav-link {
    border-left: 0.25em solid transparent;
    border-right: 0.25em solid transparent;
  }

  .nav-link:hover {
    border-left: 0.25em solid #40464f;
  }

  .nav-link.active {
    border-left: 0.25em solid $brand-primary;
    color: $brand-primary;
  }
</style>
