<template>
  <div class="home row">
    <div class="col-12 px-0 d-flex flex-column flex-sm-row">
      <!-- Navbar -->
      <div class="bg-inverse px-0 py-5">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/" exact class="nav-link d-flex justify-content-center" title="Mendelable">
              <i class="material-icons">home</i>
            </router-link>
          </li>
          <li class="nav-item mt-5">
            <a class="nav-link d-flex justify-content-center" href="#" title="Game mode"><i class="material-icons md-36">games</i></a>
          </li>
        </ul>
      </div>

      <!-- Content -->
      <div class="container-fluid p-0 w-100 d-flex align-items-stretch">
        <div class="row no-gutters w-100">
          <div class="col-sm-10 p-5">
            <div class="d-flex justify-content-between">
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
            <p class="text-muted">{{ $t("language.label") }}</p>
            <language-switcher></language-switcher>

            <!--<h4>{{ $t("sidebar.title") }}</h4>-->
            <p class="text-muted">{{ $t("sidebar.subtitle") }}</p>
          </div>
        </div>
      </div>
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
