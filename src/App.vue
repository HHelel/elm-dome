<template>
  <div id="app">
    <headers :seller="seller"></headers>
    <div class="tab">
      <div class="tab-item">
        <router-link tag="li" to="/">商品</router-link>
      </div>

      <div class="tab-item">
        <router-link tag="li" to="/ratings">评价</router-link>
      </div>

      <div class="tab-item">
        <router-link tag="li" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view
    :sellerdeliveryPrice="seller.deliveryPrice"
    :sellerminPrice="seller.minPrice"  
    ></router-view>
  </div>
</template>

<script>
import headers from "@/components/header/headers";
import axios from 'axios'
export default {
  name: "App",
  components: {
    headers,
  },
  data() {
    return {
      seller: {}
    }
  },
  methods:{
     getData(data){
        this.seller = data.data
     }
  },
  mounted(){
    axios.get('api/seller').then((res) => {
      this.getData(res.data)
    })
  }
};
</script>

<style lang="stylus" scoped>
#app 
  .tab 
    display: flex
    width: 100%
    height: 40px
    border-bottom: 1px solid rgba(7,17,27,0.1)

    .tab-item 
      flex: 1
      text-align: center
      line-height: 40px
    

    .tab-item li 
      list-style: none
      font-size: 14px
    .router-link-exact-active
      color rgb(240,20,20)
</style>