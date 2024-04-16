<template>
    <div class="body">
        <header>
            <div>
                <div class="Logo">
                    <img src="@/Assets/Pictures/MainMenu/Logo.jpg"/>TeamFinder
                </div>
                <div class="MainProfile">
                    <img src="@/Assets/Pictures/MainMenu/EmptyPhotoProfile.jpg"/><a href="/Profile">Мой профиль</a>/
                    <a href="/EnterAccount">Авторизоваться</a>
                </div>
            </div>
        </header>
        <main>
            <aside :class="{aside__hidden: IsOpenAside}">
                <div class="aside__button-slider" @click="OpenAside"></div>
                <div class="aside__header">
                    Название проекта
                </div>  
                <div class="aside__list-task">
                    <div class="list-task__create">
                        <span>
                            <span>
    
                            </span>
                        </span>
                        Добавить задачу
                    </div>
                </div>
            </aside>
            <div class="tasks" :class="{tasks_slide: IsSlideMain}">
                <div class="task">

                </div>
                <div class="task">

                </div>
                <div class="task">

                </div>
            </div>
        </main>
    </div>
</template>

<script>
 export default
    {
        data()
        {
            return{
                IsOpenAside: false,
                IsSlideMain: false
            }
        },

        methods:
        {
            OpenAside()
            {
                if(this.IsOpenAside == true)
                {
                    this.IsOpenAside = false
                    this.IsSlideMain = false
                }
                else
                {
                    this.IsOpenAside = true
                    this.IsSlideMain = true
                }
            },

             
        },
    }
</script>

<style scoped>
    * 
    {
        color: white;
    }

    .body
    {
        width: 100%;
        height: 100%;
        position: relative;
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

    aside
    {
        width: 20%;
        min-height: 100%;
        position: relative;
        border-right: 4px solid #477243;
        transition-duration: 0.4s;
        color: black;
        float: left;
        margin-right: 5%;
    }

    .aside__button-slider
    {
        display: block;
        width: 50px;
        height: 30px;
        background-color: #477243;
        position: absolute;
        right: -50px;
    }

    .aside__hidden
    {
        transform: translate(-100%);
    }

    .aside__header
    {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        padding-left: 7%;
        position: relative;
        border-bottom: 4px solid #477243;
        font-size: 1.7em;
        color: black;
    }

    .aside__list-task
    {
        width: 80%;
        height: 80px;
        display: flex;
        align-items: center;
        padding-left: 7%;
        position: relative;
        font-size: 1.4em;
        color: black;
    }

    .list-task__create
    {
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        font-size: 1.1em;
        font-weight: 100;
        color: black;
    }

    .list-task__create> span
    {
        display: block;
        position: relative;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid #477243;
        margin-right: 20px
    }

    .list-task__create> span> span
    {
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        top: 3px;
        left: 3px;
        background-color: #477243;
        clip-path: polygon(9px 0,
                            11px 0,
                            11px 9px,
                            20px 9px,
                            20px 11px,
                            11px 11px,
                            11px 20px,
                            9px 20px,
                            9px 11px,
                            0 11px,
                            0 9px,
                            9px 9px
                            );
    }

    main
    {
        width: 100%;
        height: 89%;
        position: relative;
        justify-content: space-between;
    }

    .tasks
    {
        display: grid;
        width: 70%;
        min-height: 30%;
        position: relative;
        border-radius: 25px;
        transition-duration: 0.4s;
        grid-template-columns: repeat(2, 40%);
        grid-template-rows: repeat(300px);
        column-gap: 20%;
        row-gap: 30px;
        top: 20px;
    }

    .tasks_slide
    {
        transform: scaleX(1.3) translate(-10%);
        grid-template-columns: repeat(3, 31%);
        column-gap: 3%;
    }

    .task
    {
        width: 100%;
        height: 30%;
        position: relative;
        border: 2px solid #477243;
    }

    
</style>