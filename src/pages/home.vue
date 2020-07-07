<template>
	<nav-header></nav-header>
	<router-view></router-view>
	<nav-footer></nav-footer>
</template>
<script>
import navHeader from './components/NavHeader'
import navFooter from './components/NavFooter'
export default {
  components{
  	navHeader,navFooter
 }
}
</script>