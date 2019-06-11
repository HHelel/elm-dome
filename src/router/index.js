import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path: '/',
		   component: goods,
		   name: 'goods'
		},
		{
			path: '/ratings',
			component: ratings,
			name: 'ratings'
		},{
			path: '/seller',
			component: seller,
			name: 'seller'
		}
	]
})

// router.go('/goods')
export default router