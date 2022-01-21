<template>
    <v-list max-height="150" class="overflow-y-auto">
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          class="mx-2"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon small v-text="title=='wishes'?'mdi-heart':'mdi-cart'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
             v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>

<script>
  export default {
    props: {
       title: String,
    },
    data: () => ({
      selectedItem: null,
      items: [
        { text: 'Product 1', icon: 'mdi-clock' },
        { text: 'Product 2', icon: 'mdi-account' },
        { text: 'Product 3', icon: 'mdi-flag' },
        { text: 'Product 1', icon: 'mdi-clock' },
        { text: 'Product 2', icon: 'mdi-account' },
        { text: 'Product 3', icon: 'mdi-flag' },
      ],
    }),
  }
</script>