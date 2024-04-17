<template>
    <div class="MainMenu">
        <header>
            <div>
                <div class="Logo">
                    <img src="@/Assets/Pictures/MainMenu/Logo.jpg"/>TeamFinder
                </div>
                <div class="MainProfile">
                    <img src="@/Assets/Pictures/MainMenu/EmptyPhotoProfile.jpg"/><a href="/profile">Мой профиль</a>/
                    <a href="/enteraccount">Авторизоваться</a>
                </div>
            </div>
        </header>
        <aside>

        </aside>
        <main>
            <div>
                <img src="@/Assets/Pictures/MainMenu/MainPhoto.png"/>
                <my-button @click="OpenCreateProject">
                    Создать проект
                </my-button>
            </div>
        </main>
        <create-project v-if="IsCreateProjectOpen" @disactiveCreateProject="CloseCreateProject"></create-project>
    </div>
</template>

<script>
    import CreateProject from "@/Components/MainMenu/CreateProject/CreateProject.vue"

    export default
    {
        data()
        {
            return{
                IsCreateProjectOpen: false
            }
        },

        methods:
        {
            OpenCreateProject()
            {
                this.IsCreateProjectOpen = true
            },

            CloseCreateProject()
            {
                this.IsCreateProjectOpen = false
            }
        },

        components:
        {
            CreateProject
        }
    }
</script>

<style scoped>

    .MainMenu
    {
        width: 100%;
        height: 100vh;
        position: relative;
        color: white;
    }

    header
    {
        width: 100%;
        height: 11%;
        position: relative;
        background-color: #4e7d49;
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

    main
    {
        width: 100%;
        height: 89%;
    }

    main> div
    {
        width: 26%;
        height: 73%;
        position: relative;
        top: 13.5%;
        left: 37%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    main> div> img
    {
        width: 100%;
        height: 79%;
    }

    main> div> button
    {
        height: 8.5%;
        width: 95%;
        margin: auto;
        font-size: 1.5em;
    } 

</style>