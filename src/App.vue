<template>
  <div>
    <!-- logged out -->
    <div v-if="userLoggedIn">

    </div>
    <!-- logged In -->
    <div 
      v-else
      class="container-fluid px-2 py-5" 
      style="height: 100vh; max-width: 480px;">
      <div 
        class="row justify-content-center border border-dark mx-1"
        style="border-radius: 20px; border-width: 5px !important;">
        <div class="">
          <!-- game scoreboards -->
          <div v-if="true" class="row justify-content-center">
            <div class="font-weight-bold text-dark my-3 mx-3">
              <!-- high score -->
              <div v-if="true" class="row">
                <score-board
                  :scoreDatabase = "scoreDatabase"
                  :scoreLeaders = "scoreLeaders">
                </score-board>
              </div>
              <!-- player-score -->
              <div class="row justify-content-center">
                <div 
                  class="font-weight-dark text-dark"
                  style="font-size: 0.8em;">
                  {{ currentUser }}'s Score: {{ currentScore }}
                </div>
              </div>
            </div>
          </div>
          <!-- rock paper scissors game -->
          <main-game
            @win="onWin"
            @endGame="saveAndLogout">
          </main-game>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainGame from "./components/MainGame.vue"
import ScoreBoard from "./components/ScoreBoard.vue"

export default {
  name: 'App',
  components: {
    MainGame,
    ScoreBoard
  },
  data() {
    return {
      userLoggedIn: false,
      currentUser: 'Hector',
      currentScore: 0,
      scoreDatabase: {
        Jenny: 1,
        Jamii: 3,
        John: 2
      },
    }
  },
  methods: {
    onWin () {
      // add point
      this.currentScore++
    },
    saveAndLogout () {
      // get better score and append to name
      var findExistingRecord = this.scoreDatabase[this.currentUser]
      if ( findExistingRecord === null ) { 
        this.scoreDatabase[this.currentUser] = this.currentScore
      } else {
        this.scoreDatabase[this.currentUser] = findExistingRecord > this.currentScore ? findExistingRecord : this.currentScore
      }
      var container = this.scoreDatabase
      // force change in var to recalculate
      this.scoreDatabase = {}
      this.scoreDatabase = container
      // log user out and reset score
      this.userLoggedIn = false
      this.currentScore = 0
    }
  },
  computed: {
      scoreLeaders: function () {
        var data = this.scoreDatabase
        var players = Object.keys(data)
        var topPlayers = players.sort( (player1,player2) => {
          return data[player2] - data[player1]
        })
        return topPlayers.slice(0,3)
      }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');

</style>
