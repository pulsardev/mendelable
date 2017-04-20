<template>
  <div class="home row">
    <!-- Navbar -->
    <div class="col-sm-1 bg-inverse px-4 py-5">
      <ul class="nav flex-column text-center">
        <li class="nav-item">
          <a class="nav-link p-0" href="#"><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>

    <!-- Content -->
    <div class="col-sm-9 p-5">
      <h3 class="mb-5">{{ msg }}</h3>

      <element-card></element-card>

      <periodic-table></periodic-table>
    </div>

    <!-- Sidebar -->
    <div class="col-sm-2 bg-faded px-4 py-5">
      <h3>Information</h3>
      <p class="text-muted">About the selected element</p>
    </div>
  </div>
</template>

<script>
  import ElementCard from './ElementCard'
  import PeriodicTable from './PeriodicTable'

  export default {
    name: 'home',
    components: {
      PeriodicTable, ElementCard
    },
    data () {
      return {
        msg: 'Mendelable'
      }
    }
  }
</script>
