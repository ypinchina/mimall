<template>
	<div>
		order
		<order-header></order-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>
<script>
import orderHeader from './../components/orderHeader'
import navFooter from './../components/NavFooter'
export default {
  components: {
    orderHeader,navFooter
  }
}
</script>