<template>
  <div 
    class="container-fluid w-75 py-3 border border-dark mx-1"
    style="border-radius: 20px; border-width: 5px !important; font-family: 'Comfortaa', cursive;">
    <!-- welcome message -->
    <div class="row justify-content-center">
      <h1 
        class="text-center display-4"
        style="font-family: 'Comfortaa', cursive;">
        Welcome to Rock Paper Scissors!
      </h1>
    </div>
    <!-- prompt -->
    <div class="row justify-content-center my-1">
      <span 
        class="text-center"
        style="width: 90%">
      Please provide a in-game name.
      </span>
      <span 
        class="text-center w-75"
        style="font-size: 0.75em;">
      (This will be used for the leaderboards)
      </span>
    </div>
    <!-- form -->
    <div class="row justify-content-center">
      <form onsubmit="event.preventDefault()">
        <div class="form-group w-100 my-3">
          <input 
            type="text" 
            class="form-control" 
            placeholder="Enter in-game name" 
            maxlength="12"
            style="font-size: 0.85em;"
            v-model.lazy.trim="currentUser">
        </div>
        <div class="text-center my-3">
          <button 
            class="mx-3 btn btn-danger"
            @click="loginUser">
            Proceed
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name:"Login",
    data() {
      return {
        currentUser: ""
      }
    },
    methods: {
      loginUser () {
        this.$emit('login',this.currentUser)
      }
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
</style>