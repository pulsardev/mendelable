<template>
  <div class="home row">
    <div class="col-12 px-0 d-flex flex-column flex-sm-row">
      <!-- Navbar -->
      <div class="bg-inverse px-0 py-5">
        <ul class="nav flex-column">
          <li class="nav-item hidden-sm-up">
            <a href="#" @click="toggleMenu" class="nav-link d-flex justify-content-center">
              <i class="material-icons">menu</i>
            </a>
          </li>

          <div class="mt-5 mt-sm-0" :class="{ 'hidden-xs-down': !isMenuOpened }">
            <li class="nav-item">
              <router-link to="/" exact class="nav-link d-flex justify-content-center" title="Mendelable">
                <i class="material-icons">home</i>
              </router-link>
            </li>
            <li class="nav-item mt-5">
              <router-link to="/game" exact class="nav-link d-flex justify-content-center" :title="$t('home.gameMode')">
                <i @click="trackClick(gameMode)" class="material-icons md-36">games</i>
              </router-link>
            </li>
            <li class="nav-item mt-5">
              <router-link to="/about" exact class="nav-link d-flex justify-content-center" :title="$t('home.about')">
                <i @click="trackClick(helpOutline)" class="material-icons">help_outline</i>
              </router-link>
            </li>
          </div>
        </ul>
      </div>

      <!-- Content -->
      <div class="container-fluid p-0 w-100 d-flex align-items-stretch">
        <div class="row no-gutters w-100">
          <div class="col-md-8 col-lg-9 col-xl-10 p-5">
            <div v-if="$route.name === 'PeriodicTable'" class="d-flex justify-content-between">
              <form>
                <div class="form-group">
                  <input type="text" v-model="search" class="form-control" id="searchInput" :placeholder="$t('general.search')">
                </div>
              </form>
            </div>

            <router-view></router-view>
          </div>

          <!-- Sidebar -->
          <div class="col-md-4 col-lg-3 col-xl-2 bg-faded px-4 py-5">
            <h4>{{ $t("sidebar.title") }}</h4>

            <p class="text-muted">{{ $t("language.label") }}</p>
            <language-switcher></language-switcher>

            <p v-if="$route.name !== 'About'" class="text-muted">{{ $t("sidebar.subtitle") }}</p>
            <router-view name="sidebar"></router-view>
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
  import * as types from '@/store/mutation-types'

  export default {
    name: 'home',
    components: {
      LanguageSwitcher, PeriodicTable, ElementProfile
    },
    computed: {
      search: {
        get () {
          return this.$store.state.filters.search
        },
        set (value) {
          this.$store.commit(types.UPDATE_SEARCH, value)
        }
      }
    },
    data () {
      return {
        msg: 'Mendelable',
        isMenuOpened: false,
        gameMode: '/game'
      }
    },
    methods: {
      toggleMenu () {
        this.isMenuOpened = !this.isMenuOpened
      },
      trackClick (url) {
        window.ga('send', 'event', 'outbound', 'click', url)
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
