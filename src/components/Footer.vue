<template>
  <v-container>
  <v-footer
    light
    padless
  >
    <v-card
      flat
      tile
      class="purple lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

       <v-card-text class="white--text pt-0">
         <v-row justify="center" align="center">
             <v-col v-for="n in 4" :key="n"  cols="3">
              <div class="flex column">
                <p>
                  <a class="white--text" href="#"> About </a> 
                </p>
                 
                <p>
                 <a class="white--text" href="#"> Links </a>
                </p>
                
                <p>
                <a class="white--text" href="#">  Facebook </a>
                </p>
                
                <p>
                <a class="white--text" href="#">  Twitter </a> 
                </p>
              </div>
             </v-col>

         </v-row>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>YoShop</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>