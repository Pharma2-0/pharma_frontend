<template>
  <qrcode-stream @decode="decode"></qrcode-stream>
</template>

<script>
  import { QrcodeStream } from 'vue-qrcode-reader'

  export default {
    components: {
      QrcodeStream
    },
    methods:{
      decode(decodeString){
        this.$router.push('/product/'+decodeString);
      }
    }
  }

</script>