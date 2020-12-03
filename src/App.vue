<template>
  <div>
    <!-- logged out -->
    <div 
      v-if="!userLoggedIn"
      class="container-fluid"
      style="height: 100vh; max-width: 480px;">
      <div class="row justify-content-center my-4">
      <login
        @login="login"></login>
      </div>
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
                  <span class="text-capitalize"> {{ currentUser }}'s </span>
                  <span> Score: {{ currentScore }} </span>
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
import Login from "./components/Login.vue"

export default {
  name: 'App',
  components: {
    MainGame,
    ScoreBoard,
    Login
  },
  data() {
    return {
      userLoggedIn: false,
      currentUser: "",
      currentScore: 0,
      scoreDatabase: {
        jenny: 1,
        jamii: 3,
        john: 2
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
      // reset score
      this.currentScore = 0
      // logout user after 2 seconds
      setTimeout( () => { this.userLoggedIn = false }, 2000 )
    },
    login (user) {
      if (user === "") {
        // if blank set to Anonymous
        this.currentUser = "Anonymous" 
      } else {
        this.currentUser = user.toLowerCase()
      }
      // turnOff login page
      this.userLoggedIn = true
    }
  },
  computed: {
      // function that gets top three scorers
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
