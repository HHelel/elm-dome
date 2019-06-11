<template>
    <div class="content">
         <div class="cart-minus" v-show="food.count > 0" @click="numberLess"></div>
         <div class="cart-number" v-show="food.count > 0">{{food.count}}</div>
         <div class="cart-add" @click="numberAdd($event)"></div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        food:{
            type: Object,
        }
    },
    methods:{
        numberAdd(event){
            if(!this.food.count){
                Vue.set(this.food, 'count', 1)
            }else{
                this.food.count ++
            }
            
        },
        numberLess(){
            this.food.count --
            
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .content
      position:absolute
      left:0
      top:0
      width:65px
      height:20px
      font-size:0
      .cart-minus
        position :absolute
        left:0
        top:0
        display:inline-block
        width:20px
        height:20px
        background: url('./jian.png')
        background-size: 100% 100%
        vertical-align: top
      .cart-number
        position :absolute
        left:23px
        top:0
        height:20px
        width:20px
        display:inline-block
        font-size: 12px
        line-height: 20px
        text-align: center
        vertical-align: top
      .cart-add
        position :absolute
        right:0
        top:0
        height:20px
        width:20px
        display:inline-block
        background: url('./jia.png')
        background-size: 100% 100%
        vertical-align: top
</style>