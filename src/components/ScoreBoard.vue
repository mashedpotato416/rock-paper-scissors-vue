<template>
  <div class="container-fluid w-100">
    <div class="row justify-content-center my-2">
      <button 
        class="btn btn-dark" 
        type="button" 
        data-toggle="collapse" 
        data-target="#collapseTable" 
        aria-expanded="false" 
        aria-controls="collapseExample">
        See Leaderboards
      </button>
    </div>
    <div 
      class="collapse row justify-content-center"
      id="collapseTable">
      <table 
        class="table table-striped text-right"
        style="line-height: 0.75em; font-size: 0.8em;">
        <thead class="thead-dark">
          <tr class="bg-danger text-light text-center">
            <th colspan="2">Leaderboards</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in scoreLeaders" :key="index">
            <td v-if="index === 0" class="text-center text-capitalize">
              <span class="text-warning">
                <font-awesome-icon icon="crown" />
              </span> 
              {{ player }}
            </td>
            <td v-else class="text-center text-capitalize">
              {{ player }}
            </td>
            <td>
              {{ scoreDatabase[player] }}pts
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    name:"ScoreBoard",
    props: {
      scoreDatabase: { type: Object },
      scoreLeaders: { type: Array }
    },
  }
</script>