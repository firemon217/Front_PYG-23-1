<template>
    <div id="App">
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
    
    data()
    {
        return{
        }
    },
    
    components:
    {
    
    },
    
    methods:
    {
        
    }
    
    }
    
    </script>

<style>
    #App
    {
        width: 100%;
        height: 100vh;
        position: relative;
    }

    *
    {
        padding: 0;
        margin: 0;
        outline: none;
        outline-offset: unset;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    html
    {
        width: 100%;
        height: 100%;
        position: relative;
        font-size: 16px;
    }

        #app
        {
            height: 100%;
            position: relative;
        }

        body
        {
            width: 100%;
            height: 100%;
            position: relative;
            background-color: #fefbf3;
        }

    @media (max-width: 1526px)
    {
        html
        {
            font-size: 13px;
        }
    }
</style>