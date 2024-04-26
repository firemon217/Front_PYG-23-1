<template>
    <div class="body">
        <my-header></my-header>
        <aside :class="{aside__hidden: !IsOpenAside}">
            <div class="aside__button-slider" @click="OpenAside"><div class="button-slider__arrow" :class="{'button-slider__arrow--slide': !IsOpenAside}"></div></div>
            <div class="aside__header">
                {{$store.state.project.name}}
            </div>  
            <div class="aside__list-task">
                <div class="list-task__create" @click="OpenNewTask">
                    <span>
                        <span>

                        </span>
                    </span>
                    Добавить задачу
                </div>
            </div>
        </aside>
        <main>
            <div class="tasks">
                <div class="task">
                    <div>
                        <div class="task__name">
                            Задача 1
                        </div>
                        <div class="task__information">
                            <p>   От кого: </p>
                            <p>    Кому: </p>
                            <p>   Срок выполнения: </p>
                            <p>    Описание задачи: </p>
                        </div>
                        <span>

                        </span>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <new-task v-if="IsOpenNewTask" @closeNewTask="CloseNewTask"></new-task>
</template>

<script>

    import NewTask from "@/Components/Project/NewTask/NewTask.vue"

 export default
    {
        data()
        {
            return{
                IsOpenAside: true,
                IsOpenNewTask: false
            }
        },

        methods:
        {
            OpenAside()
            {
                if(this.IsOpenAside == true)
                {
                    this.IsOpenAside = false
                }
                else
                {
                    this.IsOpenAside = true
                }
            },
            OpenNewTask()
            {
                this.IsOpenAside = false;
                this.IsOpenNewTask = true;
            },

            CloseNewTask()
            {
                this.IsOpenAside = true;
                this.IsOpenNewTask = false;
            },
             
        },

        components:
        {
            NewTask
        }
    }
</script>

<style scoped>

    .body
    {
        color: white;
        width: 100%;
        height: 100%;
        position: relative;
    }

    aside
    {
        width: 20%;
        min-height: 89%;
        max-height: m;
        position: absolute;
        border-right: 4px solid #477243;
        transition-duration: 0.4s;
        color: black;
        float: left;
        margin-right: 5%;
        background-color: #fefbf3;
        z-index: 1;
    }

    .aside__button-slider
    {
        width: 50px;
        height: 30px;
        background-color: #477243;
        position: absolute;
        right: -50px;
    }

    .button-slider__arrow 
    {
        position: relative;
        width: 40px;
        height: 20px;
        background-color: white;
        clip-path: polygon(0 45%,
                            90% 45%,
                            70% 0,
                            75% 0,
                            100% 50%,
                            75% 100%,
                            70% 100%,
                            90% 55%,
                            0 55%
        );
        transform: rotate(180deg);
        top: calc(50% - 10px);
        left: calc(50% - 20px);
        transition-duration: 0.4s;
    }

    .button-slider__arrow--slide
    {
        transform: rotate(0deg);
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
        font-weight: 300;
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
        width: 90%;
        height: 89%;
        position: relative;
        justify-content: space-between;
        left: 5%;
    }

    .tasks
    {
        display: grid;
        width: 100%;
        min-height: 30%;
        position: relative;
        border-radius: 25px;
        transition-duration: 0.4s;
        grid-template-columns: repeat(3, 30%);
        column-gap: 5%;
        row-gap: 7.5%;
        top: 20px;
    }

    .task
    {
        width: 100%;
        height: 300px;
        position: relative;
        border: 2px solid #477243;
        border-radius: 25px;
    }

    .task> div
    {
        width: 90%;
        height: 90%;
        position: relative;
        top: 4%;
        left: 7%;
        display: flex;
        flex-direction: column;
        color: #024601;
    }

    .task__name
    {
        font-size: 1.7em;
        text-decoration: underline;
        margin-bottom: 20px;
        font-weight: 500;
    }

    .task__information
    {
        height: 70%;
        font-size: 1.4em;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-weight: 500;
    }

    
</style>