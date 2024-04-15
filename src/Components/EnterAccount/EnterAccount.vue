<script>
export default{

components:
{

},

data()
{
	return{
		switchAut: "block",
		switchReg: "none"
	}
},

methods:
{

},

}
</script>

<template>
	<div id="EnterAccount">
		<div id ="Chuvachanger"> <!-- Полусфера фона -->
			<img src="@/Assets/Pictures/Chuvachanger.jpg">
		</div>
		<div id ="HalfSphere"> <!-- Полусфера фона -->

		</div>
		<router-view></router-view>
	</div>
</template>

<style scoped>
	#EnterAccount
	{
		height: 100vh;
		position: relative;
	}

	.disactive
	{
		display: none
	}

	#HalfSphere
	{
		width: 47%;
		height: 100vh;
		position: absolute;
		background-color: #4e7d49;
		border-bottom-right-radius: 50%;
		border-top-right-radius: 50%;
	}

		#Chuvachanger
		{
			width: 582px;
			height: 504px;
			position: absolute;
			bottom: 0;
			right: 0;
		}

		#Chuvachanger> img
		{
			width: 100%;
			height: 100%;
		}

</style>
