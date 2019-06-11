<template>
    <div class="shopcart">
        <div class="shopcart-left">
            <div class="shoping-logo">
                <div class="shoping-bg" ref="shopbackground">
                    <div class="shoping-bg-color" :class="{'shop-color': priceAdd > 0}">
                        <span class="shoping-icon"></span>
                        <div class="num" v-show="priceAdd > 0">{{priceNum}}</div>
                    </div>
                   
                </div>
                
            </div>
            <div class="amount">
                <span class="amiunt-content">￥{{priceAdd}}</span>
            </div>
            <div class="freight">
                <span class="freight-content">另需配送费￥{{deliveryPrice}}元</span>
            </div>
        </div>
        <div class="shopcart-right" :class="{'shopcart-bg': priceAdd>=20}">
            <span>{{priceOrder}}</span>
        </div>
    </div>
</template>

<script>
import cartcontro from '@/components/cartcontro/cartcontro'
export default {
    props:{
        minPrice:Number,
        deliveryPrice:Number,
        foodsprice:{
            type: Array,
            default(){
                return [
                ]
            }
        }
    },
    data() {
        return {
            showlist:false
        }
    },
    components:{
        cartcontro
    },
    computed:{
        priceAdd(){
            let per = 0
            this.foodsprice.forEach( (item) => {
               per += item.price * item.count
            })
            return per
        },
        priceNum(){
            let pel = 0
            this.foodsprice.forEach( (item) => {
               pel += item.count
            })

            return pel
        },
        priceOrder(){
           if(this.priceAdd >= this.minPrice){
               return '去结账'
           }else if(0 < this.priceAdd < 20){
               let i = this.minPrice - this.priceAdd
               return `还差${i}起送`
           }else{
               return `￥${this.minPrice}元起送`
           }

        },
    }
}
</script>

<style lang="stylus" scoped>
  .shopcart
    position:absolute
    left:0
    bottom:-44px
    width:100%
    height: 44px
    background:#141d27
    display: flex
    z-index:50
    .shopcart-left
      flex: 1
      display: flex
      .shoping-logo
        flex: 2.5
        position: relative
        width:44px
        height 44px
        .shoping-bg
          position :absolute
          top: -10px
          left: 12px
          width: 52px
          height: 52px
          background:#141d27
          border-radius: 50%
          .shoping-bg-color
            width:40px
            height: 40px
            background: #2b343c
            position :absolute
            left:6px
            top:6px
            border-radius: 50%
            text-align: center
            .shoping-icon
              display:inline-block
              width:26px
              height:26px
              margin-top:7px
              background: url('./shoping.png')
              background-size: 100% 100%
          .shop-color
            background: #3190e8
            .num
              width:18px
              height: 12px
              position: absolute
              top:-6px
              left:23px
              font-size:6px
              background: rgb(240,20,20)
              border-radius: 12px
              text-align:center
              line-height: 12px
              color: #ffffff
              font-weight: 700
      .amount
        flex: 1.5
        height: 44px
        line-height:24px
        font-size: 16px
        font-weight: 700
        box-sizing:border-box
        color: rgba(255,255,255,0.4)
        .amiunt-content
          display: inline-block
          width:40px
          height:26px
          margin:8px 0px
          padding-right:8px
          border-right:1px solid rgba(255,255,255,0.1)
      .freight
        flex: 5
        line-height:40px
        color: rgba(255,255,255,0.4)
        font-weight:200
        .freight-content
          margin-left:12px
          font-size: 12px
        


    .shopcart-right
      width: 105px
      height: 44px
      color:rgba(255,255,255,0.4)
      line-height:44px
      text-align: center
      font-weight: 700
      font-size: 12px
      background: #2b343c
    .shopcart-bg
      background: #38ca73
      color:#fff


      
        
     


        

    

</style>