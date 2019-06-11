<template>
    <div class="warpper">
        <div class="goods-sidebar" ref="warpper">
            <div>
            <ul class="menu-box">
                <li v-for="(item,key) in allGoods" :key="key" class="menu-item" >
                    <span class="text"><span v-show="item.type>0" class="icon" :class="iconlist[item.type]">
                    </span>{{item.name}}</span>
                </li>
            </ul>
            </div>
        </div>

        <div class="goods-content" ref="foodwarpper">
            <div ref="foodsScroll">
            <div class="foods-list" v-for="(item,index) in allGoods" :key="index" ref="foodlist">
                <h1 class="item-title">{{item.name}}</h1>
                <ul class="foods-ul">
                    <li class="foods-item" v-for="(food,index) in item.foods" :key="index">
                        <div class="foodsincon-box">
                          <img :src="food.icon" class="foods-img">
                        </div>
                        <div class="content">
                           <div class="content-title">
                               <h2 class="food-name">{{food.name}}</h2>
                               <p class="food-description">{{food.description}}</p>
                           </div>
                           <div class="expre">
                               <span class="sales">月售{{food.sellCount}}份</span>
                               <span class="sales">好评率{{food.rating}}%</span>
                           </div>
                           <div class="price">
                               <span class="current-price">现价:{{food.price}}</span>
                               <span class="original-price" v-show="food.oldPrice">￥原价{{food.oldPrice}}</span>
                          </div>
                          <div class="cart-warpper">
                            <cartcontro :food="food"></cartcontro>
                          </div>
                        </div>

                    

                        
                    </li>
                </ul>
            </div>
         </div>
        </div>

        <shopcart 
        :deliveryPrice="sellerdeliveryPrice"
        :minPrice="sellerminPrice"
        :foodsprice="sellerGoods"
        ></shopcart>
    </div>
</template>

<script>
import betterScroll from 'better-scroll'
import shopcart from '@/components/shopcart/shopcart'
import cartcontro from '@/components/cartcontro/cartcontro'
import axios from 'axios'
export default {
    name: 'goods',
    data() {
        return {
            allGoods : [],
            iconlist: ["decreas","discount","special"],
            foodlistheight: [],
            scrollY: 0
        }
    },
    props:{
        sellerdeliveryPrice:{
          type: Number,
          default: 0
        },
        sellerminPrice:{
          type: Number,
          default: 0
        }
    },
    components:{
       shopcart,
       cartcontro
    },
    computed:{
      sellerGoods(){
        let seler = []
        this.allGoods.forEach( (item) => {
             item.foods.forEach( (food) => {
               if(food.count){
                 
                 seler.push(food)
               }
             })
        })

        return seler
      }
    },
    methods:{
        getData(dis){
           this.allGoods = dis.data
        },
        initScroll(){
          this.scroll = new betterScroll(this.$refs.warpper, {
            click:true
          })
          this.scrollFood = new betterScroll(this.$refs.foodwarpper, {
            probeType: 3,
            click:true
          })
          
          this.scrollFood.on('scroll', (pos) =>{
              this.scrollY = (Math.abs(Math.floor(pos.y)))
          })
        },
        // scrollHandelClick(item,key){
        //   this.itemele = item
        //   const element = this.$refs.foodlist[key]
        //   console.log(this)
        // }
    },
    mounted(){
       axios.get('api/goods').then( (res) => {
           this.getData(res.data)
           this.$nextTick(() => {
               this.initScroll()
           })
       })
       
       
    },
    updated(){
         this.$nextTick(() => {
             let foodlistArr = this.$refs.foodlist
             let height = 0
             for(let i = 0;i<foodlistArr.length;i++){
             let fooditem = foodlistArr[i]
             height += fooditem.clientHeight
             this.foodlistheight.push(height)
           
         } 
       })

    }
}
</script>

<style lang="stylus" scoped>
.warpper
  position: absolute
  display: flex
  top:175px
  bottom: 44px
  width:100%
  .goods-sidebar
    flex: 0 0 80px
    width: 80px;
    overflow: hidden
    background: #f3f5f7
    .menu-box
      .menu-item
        width:56px
        height: 54px
        line-height :14px
        padding:0 12px
        border-bottom: 1px solid rgba(7,17,27,0.1)
        display: flex
        justify-content: center
        align-items: center
      .item-current
         background:rgb(250, 250, 250)
        .icon
          vertical-align: top
          display:inline-block
          width: 12px
          height: 12px

        .decreas
          background: url('./decrease_4@2x.png')
          background-size: 100% 100%
        .discount
          background: url('./discount_4@2x.png')
          background-size: 100% 100%
        .special
          background: url('./special_4@2x.png')
          background-size: 100% 100%
        .text
          vertical-align: tops
          width: 56px
          font-size: 12px
          font-weight: 200
      .item-current
        .text
          olor: rgb(0,0,0)
          font-size:12px
          font-weight: 400

  .goods-content
    flex: 1
    overflow: hidden
    .foods-list
      width:100%
      .item-title
        width:100%
        height: 26px
        line-height: 26px
        background: #f3f5f7
        border-left:2px solid #d9dde1
        font-size: 12px
        color: rgb(147,153,159)
        text-indent : 14px
      .foods-ul
        .foods-item
          position: relative
          display: flex
          margin: 18px 18px 0 18px
          width: 100%
          border-bottom: 1px solid rgba(7,17,27,0.1)
          .foodsincon-box
            vertical-align: top
            display: inline-block
            width: 64px
            height: 64px;
            .foods-img
              width: 100%
              height: 100%
          .content
            position: relative
            flex: 1
            margin-left: 10px
            vertical-align: top
            display: inline-block
            .content-title
              .food-name
                font-size: 14px
                line-height: 14px
                color: rgb(7,17,27)
              .food-description
                font-size: 10px
                color: rgb(147,153,159)
        
                margin: 8px 0px
            .expre
              .sales
                font-size: 10px
                color: rgb(147,153,159)
                line-height: 10px
                margin-bottom: 8px
            .price
              margin-bottom: 18px
              .current-price
                font-size: 14px
                font-weight: 700
                color:rgb(255, 83, 57)
                line-height: 24px
            .cart-warpper
              position :absolute
              right:35px
              bottom:18px
              z-index:10
              .original-price
                font-size: 10px
                font-weight: 700
                color: rgb(147,153,159)
                line-height: 24px
                text-decoration:line-through
        
              
              
              

</style>