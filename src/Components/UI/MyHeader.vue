<template>
    <header>
        <div>
            <div class="Logo">
                <img src="@/Assets/Pictures/MainMenu/Logo.jpg"/>TeamFinder
            </div>
            <div class="MainProfile">
                <img src="@/Assets/Pictures/MainMenu/EmptyPhotoProfile.jpg"/><a @click="$router.push('/profile')">Мой профиль</a>/
                <a @click="$router.push('/enteraccount')">Авторизоваться</a>
            </div>
        </div>
    </header>
</template>

<script>
    export default
    {
        name: "my-header"
    }
</script>   

<style scoped>
    header
    {
        width: 100%;
        height: 11%;
        position: relative;
        background-color: #4e7d49;
        color: white;
    }

    header> div
    {
        width: 95%;
        height: 54%;
        position: relative;
        top: 23%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .Logo
    {
        width: 35%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 2em;
    }

    .Logo> img
    {
        height: 100%;
        border-radius: 50%;
        margin-right: 20px;
    }

    .MainProfile
    {
        width: 35%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: right;
        align-items: center;
        font-size: 1.5em;
    }

    .MainProfile> img
    {
        height: 100%;
        border-radius: 50%;
        margin-right: 20px;
    }

    .MainProfile> a
    {   
        color: white;
        position: relative;
        text-decoration: underline;
    }
</style>