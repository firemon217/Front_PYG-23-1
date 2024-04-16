<template>
    <button><slot></slot></button>
</template>

<script>
    export default
    {
        name: "my-button"
    }
</script>

<style scoped>
    
    button
    {
        width: 100%;
        height: 25%;
        background-color: #588d52;
        border: none;
        border-radius: 23px;
        color: white;
        font-size: 1.3em;
        box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
        transition-duration: 0.4s;

    }

    button:hover
    {
        background-color: #366131;
    }

    button:focus
    {
        background-color: #475c45;
        transition-duration: 0.1s;
        box-shadow: 0 0 15px 5px rgba(70, 70, 70, 0.8);
    }

</style>