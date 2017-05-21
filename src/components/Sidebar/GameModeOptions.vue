<template>
  <div class="c-game-mode-options">
    <button type="button" class="btn btn-primary btn-lg btn-block" @click="startGame" :disabled="isGameRunning">{{ $t("game.play") }}</button>
    <button type="button" class="btn btn-danger btn-block" @click="stopGame" :disabled="!isGameRunning">{{ $t("game.stop") }}</button>

    <p class="text-muted mt-5">{{ $t("sidebar.legend") }}</p>
    <periodic-table-options></periodic-table-options>
  </div>
</template>

<script>
  import * as types from '@/store/mutation-types'
  import { mapState } from 'vuex'
  import { gameStates } from '@/store/modules/game'
  import PeriodicTableOptions from './PeriodicTableOptions'

  export default {
    name: 'game-mode-options',
    components: {
      PeriodicTableOptions
    },
    computed: {
      ...mapState({
        gameState: state => state.game.state
      }),
      isGameRunning () {
        return this.gameState === gameStates.IS_RUNNING
      }
    },
    methods: {
      startGame () {
        this.trackClick('game:start')
        window.scrollTo(0, 0)
        this.$store.commit(types.UPDATE_GAME_STATE, gameStates.IS_RUNNING)
      },
      stopGame () {
        this.$store.commit(types.UPDATE_GAME_STATE, gameStates.IS_NOT_RUNNING)
      },
      trackClick (destination) {
        window.ga('send', 'event', 'inbound', 'click', destination)
      }
    }
  }
</script>
