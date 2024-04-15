<template>
    <div class="MainMenu">
        <header>
            <div>
                <div class="Logo">
                    <img src="@/Assets/Pictures/Logo.jpg"/>TeamFinder
                </div>
                <div class="MainProfile">
                    <img src="@/Assets/Pictures/EmptyPhotoProfile.jpg" /><a>Мой профиль</a>
                </div>
            </div>
        </header>
        <aside>

        </aside>
        <main>
            <div>
                <img src="@/Assets/Pictures/MainPhoto.jpg"/>
                <button @click="OpenCreateProject">
                    Создать проект
                </button>
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
        height: 120px;
        position: relative;
        background-color: #4e7d49;
    }

    header> div
    {
        width: 95%;
        height: 70px;
        position: relative;
        top: calc(50% - 35px);
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .Logo
    {
        width: 35%;
        height: 70px;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 30px;
    }

    .Logo> img
    {
        height: 70px;
        width: 70px;
        border-radius: 35px;
        margin-right: 20px;
    }

    .MainProfile
    {
        width: 35%;
        height: 70px;
        position: relative;
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .MainProfile> img
    {
        height: 70px;
        width: 70px;
        border-radius: 35px;
        margin-right: 20px;
    }

    .MainProfile> a
    {
        font-size: 27px;
        position: relative;
        text-decoration: underline;
    }

    main
    {
        width: 100%;
        height: calc(100vh - 120px);
    }

    main> div
    {
        width: 500px;
        height: 700px;
        position: relative;
        top: calc(50% - 350px);
        left: calc(50% - 250px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    main> div> img
    {
        width: 500px;
        height: 550px;
    }

    main> div> button
    {
        height: 60px;
        width: 400px;
        justify-content: space-between;
        background-color: #588d52;
        font-size: 24px;
        border: 0;
        box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
		transition-duration: 0.4s;
        color: white;
        font-size: 25px;
        border-radius: 20px;
        margin: auto;
    }  

    main> div> button:hover
    {
        background-color: #366131;
    }

    main> div> button:Focus
    {
        background-color: #475c45;
        transition-duration: 0.1s;
        box-shadow: 0 0 15px 5px rgba(70, 70, 70, 0.8);
    }


</style>