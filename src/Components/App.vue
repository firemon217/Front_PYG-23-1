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

<template>
    <div id="App">
        <router-view></router-view>
    </div>
</template>

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

    .montserrat-<uniquifier> {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    }

    html
    {
        width: 100%;
        height: 100%;
        position: relative;
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
</style>