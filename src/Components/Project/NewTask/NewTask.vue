<template>
    <div class="newTask">
        <div>
            <h1>
                Добавление задачи
            </h1>
            <form>
                <div>Название: <my-input></my-input></div>
                <div>Дата окночания: <my-input></my-input></div>
                <div>Описание: <textarea></textarea></div>
                <div>
                    <my-button type="button">Создать</my-button>
                    <my-button type="button" @click="CloseNewTask">Отменить</my-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>    
    export default
    {
        methods:
        {
            CloseNewTask()
            {
                this.$emit("closeNewTask")
            }
        }
    }
</script>

<style scoped>
    .newTask
    {
        width: 42%;
        height: 59%;
        position: fixed;
        top: 26%;
        left: 29%;
        z-index: 2;
        border-radius: 25px;
        border: 4px solid #477243;
        background-color: #fefbf3;
    }

    .newTask> div
    {
        width: 80%;
        height: 90%;
        position: relative;
        top: 5%;
        left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .newTask> div> h1
    {
        text-align: center;
        font-size: 2.5em;
        color: #024601;
        font-weight: 500;
        margin-bottom: 25px;
    }

    .newTask> div> form
    {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
    }

    .newTask> div> form> div
    {
        width: 100%;
        height: 11%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.4em;
        color: #477243;
        font-weight: 500;
        margin-bottom: 5%;
    }

    .newTask> div> form> div:nth-child(3)
    {
        height: 30%;
        align-items: start;
        margin-bottom: 10%;
    }

    .newTask> div> form> div:nth-child(3)> textarea
    {
        max-height: 100%;
        min-height: 50%;
        max-width: 60%;
        min-width: 60%;
        background-color: white;
        border: 2px solid #477243;
        border-radius: 20px;
        box-shadow: none;
        color: black;
        font-size: 1.1em;
        padding-left: 0.7em;
        padding-right: 0.7em;
        padding-top: 0.3em;
    }

    .newTask> div> form> div> input
    {
        width: 60%;
        height: 80%;
        background-color: white;
        border: 2px solid #477243;
        box-shadow: none;
        color: black;
        font-size: 1.1em;
    }

    .newTask> div> form> div:nth-child(4)
    {
        height: 11%;
        margin-bottom: 0;
    }

    .newTask> div> form> div:nth-child(4)> button
    {
        width: 40%;
        height: 100%;
        font-size: 1.2em;
    }

</style>