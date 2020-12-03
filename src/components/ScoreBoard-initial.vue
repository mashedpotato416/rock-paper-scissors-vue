<template>
  <div class="container-fluid w-100">
    <div class="col align-self-center">
      <table class="table table-striped text-center" style="line-height: 0.75em; font-size: 0.8em;">
        <thead class="thead-light">
          <tr class="bg-danger text-light text-center">
            <th colspan="3">Leaderboards</th>
          </tr>
          <tr>
            <th scope="col"> # </th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>40pts</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>James</td>
            <td>38pts</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jenny</td>
            <td>37pts</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Daren</td>
            <td>32pts</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Hector</td>
            <td>28pts</td>
          </tr>
          <!-- <tr>
            <th scope="row">6</th>
            <td>Abby</td>
            <td>25pts</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Paulo</td>
            <td>22pts</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Mikz</td>
            <td>18pts</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Sharmaine</td>
            <td>16pts</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Nico</td>
            <td>15pts</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    name:"ScoreBoard",
  }
</script>