<template>
  <div class="container-fluid">
    <!-- animation -->
    <div class="row justify-content-center">
      <!-- human-player -->
      <div 
        class="col my-3 align-self-center"
        v-if="openAnimation">
        <div class="row justify-content-center">
          <!-- moves -->
          <img 
            src="../assets/rock-left.jpg" 
            style="height: 90px; width: 90px;"
            ref="imageHuman"
            v-if="human.rock">
          <img 
            src="../assets/paper-left.jpg" 
            style="height: 90px; width: 90px;"
            ref="imageHuman"
            v-if="human.paper">
          <img 
            src="../assets/scissors-left.jpg" 
            style="height: 90px; width: 90px;"
            ref="imageHuman"
            v-if="human.scissors">
        </div>
        <div 
          class="row justify-content-center text-dark"
          style="font-size: 1.75em; font-family: 'Nerko One', cursive;"
          ref="moveHuman">
            {{ moveHuman }}
        </div>
        <div 
          class="row justify-content-center text-secondary"
          style="font-size: 1.5em; font-family: 'Nerko One', cursive;">
            You
        </div>
      </div>
      <!-- versus -->
      <div class="col my-3 align-self-center">
        <div class="text-center">
          <img 
            src="../assets/versus.jpg" 
            style="height: 80px; width: 80px;">
        </div>
      </div>
      <!-- computer -->
      <div 
        class="col my-3 align-self-center"
        v-if="openAnimation">
        <div class="row justify-content-center">
          <!-- moves -->
          <img 
            src="../assets/rock-right.jpg" 
            style="height: 90px; width: 90px;"
            ref="imageComputer"
            v-if="computer.rock">
          <img 
            src="../assets/paper-right.jpg" 
            style="height: 90px; width: 90px;"
            ref="imageComputer"
            v-if="computer.paper">
          <img 
            src="../assets/scissors-right.jpg" 
            style="height: 90px; width: 90px;"
            ref="imageComputer"
            v-if="computer.scissors">
        </div>
        <div 
          class="row justify-content-center text-dark"
          style="font-size: 1.75em; font-family: 'Nerko One', cursive;"
          ref="moveComputer">
            {{ moveComputer }}
        </div>
        <div 
          class="row justify-content-center text-secondary"
          style="font-size: 1.5em; font-family: 'Nerko One', cursive;">
            Computer
        </div>
      </div>
    </div>
    <div v-if="gameStatus === 'waiting'">
      <!-- befors start prompt -->
      <div class="row justify-content-center">
        <div 
          class="font-weight-normal text-dark my-3 h1"
          style="font-family: 'Nerko One', cursive;">
          Choose your move!
        </div>
      </div>
      <!-- buttons -->
      <div class="row justify-content-center">
        <div class="text-center my-3">
          <button 
            class="mx-3 btn btn-secondary"
            @click="playGame('rock')">
            Rock
          </button>
          <button 
            class="mx-3 btn btn-secondary"
            @click="playGame('paper')">
            Paper
          </button>
          <button 
            class="mx-3 btn btn-secondary"
            @click="playGame('scissors')">
            Scissors
          </button>
        </div>
      </div>
    </div>
    <!-- game intro -->
    <div 
      class="row justify-content-center"
      v-if="gameStatus === 'counting'">
      <div 
        class="font-weight-normal text-dark my-3 h1"
        style="font-family: 'Nerko One', cursive;"
        ref="gameCountdown">
        {{ introMessage }}
      </div>
    </div>
    <!-- WIN -->
    <div 
      class="row justify-content-center"
      v-if="gameStatus === 'win'">
      <div 
        class="font-weight-normal text-success my-3 h1"
        style="font-family: 'Nerko One', cursive;">
        You win!
      </div>
    </div>
    <!-- LOSE -->
    <div 
      class="row justify-content-center"
      v-if="gameStatus === 'lose'">
      <div 
        class="font-weight-normal text-danger my-3 h1"
        style="font-family: 'Nerko One', cursive;">
        You lose!
      </div>
    </div>
    <!-- DRAW -->
    <div 
      class="row justify-content-center"
      v-if="gameStatus === 'draw'">
      <div 
        class="font-weight-normal text-secondary my-3 h1"
        style="font-family: 'Nerko One', cursive;">
        It's a draw!
      </div>
    </div>
    <!-- play again? -->
    <div
      class="row justify-content-center my-2" 
      v-if="gameDone">
      <div class="col alert alert-dark align-self-center">
        <div class="row justify-content-center">
          <div
            class="font-weight-normal h4 text-dark"
            style="font-family: 'Nerko One', cursive;">
            Do you want to play again?
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col">
            <span class="row justify-content-center">
              <button 
                class="mx-3 btn btn-secondary px-5"
                @click="onYes">
                Yes
              </button>
            </span>
          </div>
          <div class="col">
            <span class="row justify-content-center">
              <button 
                class="mx-3 btn btn-secondary px-5"
                @click="onNo">
                No
              </button>
            </span>
            <span 
              class="font-weight-light row justify-content-center"
              style="font-size: 0.75em;">
              (exit & record score)
            </span>
          </div>
        </div>
      </div>
    </div>
    <div 
      class="row justify-content-center my-2"
      v-if="isGameLoading"> 
      <div class="spinner-border text-dark my-3" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "MainGame",
  props: {
    gameLoading: { type: Boolean }
  },
  data() {
    return {
      gameStatus: "waiting",
      introMessage: "",
      openAnimation: false,
      moveComputer: "",
      moveHuman: "",
      human: {
        rock: true,
        paper: false,
        scissors: false
      },
      computer: {
        rock: true,
        paper: false,
        scissors: false
      }
    }
  },
  computed: {
    // check if the game is still playing or waiting for a move
    gameDone: function () {
      if (this.gameStatus === "win" || this.gameStatus === "draw") {
        return true
      } else {
        return false
      }
    },
    isGameLoading: function () {
      return this.gameLoading
    }
  },
  methods: {
    // toggles human display
    changeDisplayHuman (move) {
      // make all false
      this.human.rock = false
      this.human.paper = false
      this.human.scissors = false

      // apply move to change image
      switch (move) {
        case 'rock':
          this.human.rock = true
          break;
        case 'paper':
          this.human.paper = true
          break;
        case 'scissors':
          this.human.scissors = true
          break;
      }
      // change text
      this.moveHuman = move.charAt(0).toUpperCase() + move.slice(1) +'!'
    },
    // toggles computer display
    changeDisplayComputer (move) {
      // make all false
      this.computer.rock = false
      this.computer.paper = false
      this.computer.scissors = false

      // apply move to change image
      switch (move) {
        case 'rock':
          this.computer.rock = true
          break;
        case 'paper':
          this.computer.paper = true
          break;
        case 'scissors':
          this.computer.scissors = true
          break;
      }
      // change text
      this.moveComputer = move.charAt(0).toUpperCase() + move.slice(1) + '!'
    },
    getComputerMove () {
      // get a random number between one to three
      var randomOneToThree = Math.floor(Math.random()*3) + 1
      var move = ""
      // create a move base on number 
      switch (randomOneToThree) {
        case 1:
          move = "rock"
          break;
        case 2:
          move = "paper"
          break;
        case 3:
          move = "scissors"
          break;
      }
      return move
    },
    // get a result for the game
    getResult(humanMove, computerMove) {
      var result = ""
      switch (humanMove) {
        case 'rock':
          switch (computerMove) {
            case 'rock':
              result = "draw"
              break;
            case 'paper':
              result = "lose"
              break;
            case 'scissors':
              result = "win"
              break;
          }
          break;
        case 'paper':
          switch (computerMove) {
            case 'rock':
              result = "win"
              break;
            case 'paper':
              result = "draw"
              break;
            case 'scissors':
              result = "lose"
              break;
          }
          break;
        case 'scissors':
          switch (computerMove) {
            case 'rock':
              result = "lose"
              break;
            case 'paper':
              result = "win"
              break;
            case 'scissors':
              result = "draw"
              break;
          }
          break;
      }
      return result
    },
    startCount (value) {
      // change display
      this.gameStatus = "counting"
      // change message
      this.introMessage = "Let's Start!"
      // set time of each message
      var introTime = {
        rock: (1/3)*value,
        paper: (2/3)*value,
        scissors: value
      }
      var movesArray = Object.keys(introTime)
      movesArray.forEach( (move) => {
        setTimeout(() => {
          // Open Animation on intro
          if (move === 'rock') {
            this.openAnimation = "true"
          }
          // Caplitalize and change message
          this.introMessage = move.charAt(0).toUpperCase() + move.slice(1) + "!"
          this.changeDisplayHuman(move)
          this.changeDisplayComputer(move)
        }, (introTime[move])*1000);
      });
    },
    playGame ( move ) {
      // *** You may change the length of timer -- countdownTime **** //
      var countdownTime = 2
      this.startCount(countdownTime)
      // display results
      setTimeout( () => {
        // get computer move
        var computerMove = this.getComputerMove()
        // change display
        this.changeDisplayHuman(move)
        this.changeDisplayComputer(computerMove)
        // get result
        var result = this.getResult(move,computerMove)
        // start countdown
        switch (result) {
          case 'win':
            this.gameStatus = "win"
            this.$emit('win')
            break;
          case 'lose':
            this.gameStatus = "lose"
            this.$emit('endGame')
            break;
          case 'draw':
            this.gameStatus = "draw"
            // this.$emit('draw')
            break;
        }
      }, (countdownTime + 1)*1000);
    },
    onYes () {
      this.openAnimation = false
      this.gameStatus = "waiting"
    },
    onNo () {
      this.$emit('endGame')
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
</style>