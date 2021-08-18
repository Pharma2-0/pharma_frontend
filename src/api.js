import axios from 'axios';
const url = 'https://pharma20.herokuapp.com/api/post';

export default class API {
    // get all products
    static async getAllProducts() {
        const res = await axios.get(url);
        console.log(res.data);
        return res.data;
    }
    
    // get single product by QR Code
    static async getProductByQRCode(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

}