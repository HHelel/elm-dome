<template>
<div>
   <div class="header">
     <div class="details">
       <div class="avatar">
         <img :src="seller.avatar" class="avatar-img">
       </div>
       <div class="Introduction">
         <div class="title">
           <span class="icon"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description-warpper">
           <span class="desceiption">{{seller.description}}/{{seller.deliveryTime}}年送达</span>
         </div>
         <div class="activity-warpper">
           <span class="activity-icon"></span>
           <span class="activity" v-if="seller.supports">{{seller.supports[0].description}}</span>
         </div>
       </div>
        <div class="header-btn" @click="handelClickShow">
          <span class="btn-tutle">5个 ></span>
        </div>
     </div>
     <div class="announcement">
       <span class="announcement-icon"></span><span class="announcement-title" @click="handelClickShow">{{seller.bulletin}}</span>
       <i class="go">></i>
     </div>
     <div class="background">
        <img :src="seller.avatar" class="background-img">
     </div>
   </div>
   <div class="details-mask" v-show="maskShow">
     <div class="details-content clraefix">
       <div class="details-main">
            <h1 class="shopName">{{seller.name}}</h1>
            <div class="shopScore">
              <Score :score="seller.score"></Score>
            </div>
       </div>
       <div class="supports">
         <div class="line"></div>
         <div class="title">优惠信息</div>
         <div class="line"></div>
       </div>
       <ul class="offer-list">
         <li class="offer" v-for="(item,index) in seller.supports" :key="item.type">
           <span class="offer-icon" :class="iconlist[index]"></span>
           <span class="offer-title">{{item.description}}</span>
         </li>
       </ul>
       <div class="supports">
         <div class="line"></div>
         <div class="title">商家公告</div>
         <div class="line"></div>
       </div>
       <div class="bulletin">
         <p class="bulletin-title">{{seller.bulletin}}</p>
       </div>
     </div>


     <div class="details-clone">
       <span class="details-clone-icon" @click="cloneMaskShow"></span>
     </div>
   </div>
</div>
</template>

<script>
import Score from '../score/score'
export default {
	props:{
    seller: Object
   },
   components:{
     Score
   },
   data() {
     return {
       maskShow: false,
       iconlist: ["decreas","discount","discount","special","special"]
     }
   },
   methods:{
     handelClickShow(){
       this.maskShow = true
     },
     cloneMaskShow(){
       this.maskShow = false
     }
   }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.header
  width: 100%
  background:reba(7, 17, 27, 0.5)
  color: #fff
  position: relative
  font-size: 0
  .details
    position relative
    width: 100%
    .avatar
      display: inline-block
      .avatar-img 
        width: 100%
        height: 100%
        width: 64px
        height: 64px
        padding: 24px 16px 18px 24px
    .Introduction
      vertical-align: top
      display: inline-block
      margin-top: 24px
      font-size: 16px
      .title
        margin-bottom: 6px
        .icon
          vertical-align: top
          display: inline-block
          width: 30px
          height: 18px
          background: url('./brand@2x.png')
          background-size: 30px 18px
        .name
          font-weight: bold
          line-height: 18px
      .description-warpper
        .desceiption
          font-size: 12px
          font-weigth: 200
          line-height: 12px
      .activity-warpper
        margin-top:6px
        .activity-icon
          vertical-align: middle
          display: inline-block
          width: 16px
          height: 16px
          background:url('./decrease_2@2x.png')
          background-size: 100% 100%
        .activity
          vertical-align: middle
          font-size: 10px
          font-weight: 200
          line-height: 12px
    .header-btn
      position: absolute
      right: 12px
      bottom: 15px
      height: 24px
      width: 48px
      border-radius: 12px
      color: #fff
      text-align:center
      background: rgba(0, 0, 0, 0.2)
      .btn-tutle
        font-size:10px
        line-height: 24px
  .announcement
    position: relative
    height: 28px
    line-height : 28px
    padding: 0 22px 0 12px
    overflow: hidden
    text-overflow: ellipsis
    white-space:nowrap
    background:rgba(7, 17, 27, 0.2)
    .announcement-icon
      vertical-align: top
      display: inline-block
      width:22px
      height: 12px
      background:url('./bulletin@2x.png')
      background-size:100% 100%
      margin-top: 9px
    .announcement-title
      vertical-align: top
      font-size: 10px
      margin:0 4px
    .go
      position: absolute
      right: 10px
      font-size: 10px
  .background
    position: absolute
    left: 0
    top: 0
    width:100%
    height:100%
    z-index: -1
    .background-img
      width:100%
      height:100%
      filter: blur(10px)
.details-mask
  z-index: 99
  position :absolute
  top:0
  left:0
  overflow hidden
  background:rgba(7, 17, 27, 0.8) 
  width:100%
  height:100%
  .details-content
    width:100%
    height:100%
    color:#fff
    .datails-list
      padding-bottom: 64px
      margin-top: 64px
  .clraefix
    display :inline-block
    &:after
      display: block
      content : ''
      height: 0
      line-height: 0
      clear: both
      visibility hidden
  .details-content
    min-height: 100%
    .details-main
      margin-top: 64px
      .shopName
        text-align: center
        font-size: 16px
        line-height: 16px
        font-weight: 700
    .supports
      width:80%
      display: flex 
      margin: 28px auto 24px auto
      .line
        flex: 1
        position: relative
        top:-6px
        border-bottom:1px solid rgba(255,255,255,0.2)
      .title
        padding: 0 12px
  .offer-list
    width:80%
    margin:20px auto 27px auto
    .offer
      margin-bottom: 12px
      .offer-icon
        vertical-align: middle
        display: inline-block
        width: 16px
        height: 16px
      .decreas
        background: url('./decrease_2@2x.png')
        background-size: 16px 16px
      .discount
        background: url('./discount_2@2x.png')
        background-size: 16px 16px
      .special
        background: url('./special_2@2x.png')
        background-size: 16px 16px
      .offer-title
        vertical-align: middle
        font-size: 12px
        line-height: 12px
        font-weight: 200

  .bulletin
    width:80%
    margin: 24px auto 0 auto
    .bulletin-title
      line-height:24px
      font-size:12px
      font-weight: 200

       

  .details-clone
    position relative
    width:32px
    height:32px
    margin: -64px auto 0 auto
    .details-clone-icon
      display: inline-block
      width: 100%
      height: 100%
      background: url('./guanbi.png')
      clear: both
      background-size: 100% 100%



    



</style>
