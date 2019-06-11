<template>
    <div class="score">
        <span v-for="(classitem,index) in classsrart" :key="index" :class="classitem" class="itemclass"></span>
    </div>
</template>

<script>
export default {
    props:{
      score: Number
    },
    computed:{
       classsrart(){
           var resole = []
           var onlength = Math.floor(this.score) / 1
           var halflength = this.score % 1
           for(var i = 0; i<onlength; i++){
               resole.push('on')
           }
           if(halflength !==0){
               resole.push('half')
           }
           while(resole.length < 5){
               resole.push("off")
           }
           return resole
       }
    }

}
</script>

<style lang="stylus" scoped>
.score
  height:24px
  margin-top: 16px
  text-align: center
  .itemclass
    display: inline-block
    width: 20px
    height: 20px
    margin: 0 10px
  .on
    background: url('./star36_on@2x.png')
    background-size: 100% 100%
  .off
    background: url('./star36_off@2x.png')
    background-size: 100% 100%
  .half
    background: url('./star36_half@2x.png')
    background-size: 100% 100%
</style>