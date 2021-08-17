<template>
  <v-container>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="product in products" :key="product._id">
                <v-card class="pa-1">
                    <v-card-title class="headline">
                        {{product.product}}
                    </v-card-title>
                    <v-card-text class="py-0">
                        <p>{{product.description.substring(0, 100)+"..."}}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
  import API from "../api";
  export default {
    name: 'Catalogue',
    data(){
      return {
        products: [],
      };
    },
    async created(){
      this.products = await API.getAllProducts();
    }
  }
</script>
