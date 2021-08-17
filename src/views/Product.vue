<template>
  <v-container>
      <v-row>
          <v-col sm="10" class="pa-4 mx-auto">
              <v-card class="pa-3">
                <v-card-actions class="pb-0">
                    <v-row class="mt-1 mx-1">
                        <v-col sm="2">
                            <v-btn small outlined color="primary">
                                {{ product.lote }}
                            </v-btn>
                        </v-col>
                        <v-col sm="10" class="d-flex justify-end">
                            <v-btn color="success">Edit</v-btn>
                            <v-btn color="red">Delete</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-subtitle class="headline">
                    <h3>{{ product.product }}</h3>
                </v-card-subtitle>
                <v-card-text class="grey--text">
                    <p>{{ product.description }}</p>
                    <p>{{ product.labo }}</p>
                </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
    import API from '../api';   
    export default {
        name: "Product",
        data() {
            return {
                product: {}
            };
        },
        async created() {
            const response = await API.getProductByQRCode(this.$route.params.id);
            this.product = response;
        }
    };
</script>
