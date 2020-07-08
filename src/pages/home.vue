<template>
	<div>
		home
		<nav-header></nav-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>
<script>
import navHeader from './../components/NavHeader'
import navFooter from './../components/NavFooter'
export default {
  components:{
    navHeader,
    navFooter
  }
}
</script>
<style type="text/css" lang='stylus'>
  div{
    text-align: center;
  }
</style>