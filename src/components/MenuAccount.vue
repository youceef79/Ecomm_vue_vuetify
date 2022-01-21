<template>
	<v-menu
        min-width="250"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <div min-width="20" max-width="250">
          <v-btn
            height="50"
            text
            :icon="isIcon" 
            large
            v-on="on"
            width='100%'
          >
            <v-avatar
              color="brown"
              size="30"
            >
              <span class="white--text">EH</span>
            </v-avatar>
            <span class="ml-2 hidden-sm-and-down"><h4>Edward johnson </h4></span> 
          </v-btn>
          </div>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">EH</span>
              </v-avatar>
              <h3>Edward Johson</h3>
              <p class="text-caption mt-1">
                EdwardJohson@gmail.com
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
</template>

<script>
export default {

  name: 'MenuAccount',

  data () {
    return {

    }
  }
}
</script>

<style>
</style>