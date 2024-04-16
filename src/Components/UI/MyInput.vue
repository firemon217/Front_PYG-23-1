<template>
    <input />
</template>

<script>
    export default
    {
        name: "my-input"
    }
</script>

<style scoped>

    input
    {
        width: 100%;
        height: 25%;
        background-color: #588d52;
        border: none;
        border-radius: 23px;
        color: white;
        padding-left: 25px;
        font-size: 1.3em;
        box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
    }

	input::-webkit-input-placeholder { color: #c9dec6; }
</style>