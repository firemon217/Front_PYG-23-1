<template>
    <div class="MainMenu">
        <my-header></my-header>
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