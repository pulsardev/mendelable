<template>
  <div class="c-periodic-table">
    <div class="c-information d-flex align-items-end">
      <div class="d-flex align-items-center justify-content-between w-100">
        <countdown class="mr-3" :duration="duration" duration-unit="minutes" :play="isGameRunning"></countdown>
        <input v-model="gameInput" class="form-control form-control-lg align-self-stretch" type="text" :placeholder="$t('game.input')" :disabled="!isGameRunning">
        <span class="ml-3 text-nowrap">{{ filteredElements.length }}/118<br><small class="text-muted">{{ $t('game.elementsFound') }}</small></span>
      </div>
    </div>

    <div v-for="element in elements"
         :data-element-group='element.elementGroup' :data-group='element.group' :data-period='element.period'
         class='element' :class="element.symbol && element.symbol.toLowerCase()"
         :style="{ opacity: filteredElements.includes(element.atomicNumber) ? 1 : 0.25 }">
      <router-link :to="'/element/' + element.atomicNumber">
        <element-definition v-if="filteredElements.includes(element.atomicNumber)" class="u-aspect-ratio" :element="element" :detailed="true"></element-definition>
      </router-link>
    </div>

    <div class="element lanthanoid" data-element-group="lanthanoid" :style="{ opacity: filteredElementsContainElementsOfGroup('lanthanoid') ? 1 : 0.25 }"></div>
    <div class="element actinoid" data-element-group="actinoid" :style="{ opacity: filteredElementsContainElementsOfGroup('actinoid') ? 1 : 0.25 }"></div>
  </div>
</template>

<script>
  import * as types from '@/store/mutation-types'
  import { mapState, mapGetters } from 'vuex'
  import { bus } from '@/shared/bus'
  import { gameStates } from '@/store/modules/game'
  import ElementBadge from './ElementBadge'
  import ElementDefinition from './ElementDefinition'
  import ElementGeneralProperties from './ElementProfile/ElementGeneralProperties'
  import Countdown from './shared/Countdown'

  export default {
    name: 'periodic-table',
    components: {
      Countdown, ElementGeneralProperties, ElementDefinition, ElementBadge
    },
    computed: {
      ...mapGetters({
        elements: 'localizedElements'
      }),
      ...mapState({
        gameState: state => state.game.state
      }),
      selectedElement () {
        return this.elements[this.selectedElementId] || {}
      },
      isGameRunning () {
        return this.gameState === gameStates.IS_RUNNING
      }
    },
    data () {
      return {
        duration: 12,
        gameInput: '',
        filteredElements: [],
        gameStates: gameStates.IS_RUNNING
      }
    },
    mounted () {
      bus.$on('game:over', () => {
        console.log('bus: game:over')
        this.$store.commit(types.UPDATE_GAME_STATE, gameStates.IS_NOT_RUNNING)
      })
    },
    methods: {
      filteredElementsContainElementsOfGroup (group) {
        let filteredElementsContainElementsOfGroup = false
        for (let id of this.filteredElements) {
          if (this.elements[id].elementGroup === group) {
            filteredElementsContainElementsOfGroup = true
          }
        }
        return filteredElementsContainElementsOfGroup
      },
      resetGameState () {
        this.gameInput = ''

        if (this.gameState !== gameStates.IS_NOT_RUNNING) {
          this.filteredElements = []
        }
      }
    },
    watch: {
      gameInput: function () {
        for (let element of Object.keys(this.elements)) {
          if (this.elements[element].name.toLowerCase() === this.gameInput.toLowerCase()) {
            if (this.filteredElements.indexOf(+element) === -1) {
              this.filteredElements.push(+element)
              this.gameInput = ''

              if (this.filteredElements.length === 118) {
                // All elements have been found, we have a winner!
                this.$store.commit(types.UPDATE_GAME_STATE, gameStates.IS_NOT_RUNNING)
              }
            }
          }
        }
      },
      gameState: function () {
        this.resetGameState()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/components/periodic-table";
</style>
