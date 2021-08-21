<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Product</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Product" v-model="product.product" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Description" v-model="product.description" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Labo" v-model="product.labo" prepend-icon="mdi-note-plus" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Drug" v-model="product.drug" prepend-icon="mdi-note-plus" :rules="rules"></v-text-field>

                        <v-slider label="Quant" v-model="product.quant" :rules="rules.quant" color="orange" hint="En Gramos" min="1" max="100" thumb-label></v-slider>

                        <v-checkbox label="BajoReceta" v-model="product.bajoreceta" value="1" type="checkbox" required></v-checkbox>
                        
                        <v-text-field label="lote" v-model="product.lote" prepend-icon="mdi-note-plus" type="number" :rules="rules"></v-text-field>
                        
                        <v-slider label="Price" v-model="product.price" :rules="rules.price" color="green" hint="En Pesos Ars" min="1" max="100" thumb-label></v-slider>
                        
                        <span style="color:rgba(0, 0, 0, 0.6)">Elab y Venc </span>
                        <date-picker label="Elaboracion y Vencimiento" v-model="time3" range></date-picker>
                        <br>
                        <v-btn type="sumbit" class="mt-3" color="primary">Add Product</v-btn>

                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: { DatePicker },
    data(){
        return{
            rules: [(value) => !!value || "This field is required!"],
            time3:null,
            product: {
                product: "",
                description: "",
                labo: "",
                drug: "",
                bajoreceta: false,
                lote: "",
                quant: "",
                price: "",
            }
        };
    },
    methods: {
        async submitForm(){
            var elab = this.time3[0];
            var venc = this.time3[1];
           
            const formData = {...this.product}

            formData["elab"] = elab;
            formData["venc"] = venc;
            formData["qrcode"] = Math.random() * 100000000000000000;
            
            console.log(formData);
            
            if(this.$refs.form.validate()){
                const response = await API.addProduct(formData);
                this.$router.push({ name: 'home', params: {message: response.message} });
            }
        }
    }
}
</script>