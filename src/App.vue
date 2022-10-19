<template>
  <div id="app" style="padding: 5rem;">
    <vue-progress-bar></vue-progress-bar>
    <button class="btn btn-primary" @click="LoadData()">Load</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    LoadData(){
      this.$Progress.start()
      this.$http.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        console.log(response.data)
          this.$Progress.finish()
      }, (response) => {
          this.$Progress.fail()
          console.log(response)
      })
    }
  }
}
</script>

