import axios from 'axios';
const url = 'https://vvila.duckdns.org/api/post';

export default class API {
    // get all products
    static async getAllProducts() {
        const res = await axios.get(url);
        return res.data;
    }
    
    // get single product by QR Code
    static async getProductByQRCode(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    
    // add product
    static async addProduct(product) {
        const res = await axios.post(url, product);
        return res.data;
    }
    
}