<template>
  <v-app >
    
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      app
    >
      <span>&copy; AYUSH TRIPATHI{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>