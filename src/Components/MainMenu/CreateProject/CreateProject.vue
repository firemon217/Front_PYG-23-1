<template>
    	<div id="CreateProject">
            <div>
                <h1>
                    Создать проект
                </h1>
                <form id="CreateProjectForm">
                    <div>
                        <h2>
                            Название:
                        </h2>
                        <my-input />
                    </div>
                    <div>
                        <h2>
                            Описание:
                        </h2>
                        <textarea></textarea>
                    </div>
                    <div>
                        <my-button type="button" @click="OpenProject">Готова!<a href="/Project"></a></my-button>
                        <my-button type="button" @click="DisactiveCreateProject">Отмена</my-button>
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
            DisactiveCreateProject()
            {
                this.$emit("disactiveCreateProject")
            },

            OpenProject()
            {
                document.querySelector("#CreateProjectForm> div:nth-child(3) a").click()
            }
        }
    }
</script>

<style scoped>
    #CreateProject
    {
        width: 52%;
        height: 65%;
        position: absolute;
        top: 17.5%;
        left: 24%;
        background-color: #edeae2;
        border: 5px solid #4e7d49;
        border-radius: 50px;
        color: #2d5728;
    }

    #CreateProject> div
    {
        width: 80%;
        height: 85%;
        position: relative;
        top: 7.5%;
        left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #CreateProject> div> h1
    {
        text-align: center;
        font-size: 2.5em;
        font-weight: 400;
        margin-bottom: 4%;
    }

    #CreateProjectForm
    {
        width: 100%;
        height: 84%;
        display: flex;
        flex-direction: column;
    }

    #CreateProjectForm> div
    {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #CreateProjectForm> div:nth-child(1)
    {
        margin-bottom: 5%;
    }  
    
    #CreateProjectForm> div:nth-child(2)
    {
        margin-bottom: 5%;
    }  

    #CreateProjectForm> div> h2
    {
        font-size: 2em;
        font-weight: 400;
    }

    #CreateProjectForm> div> input
    {
        width: 72%;
        height: 50px;
        border-radius: 0;
        padding-left: 3.5%;
        font-size: 1.7em;
        background-color: white;
        box-shadow: none;
        color: black;
    }

    #CreateProjectForm> div> textarea
    {
        max-width: 72%;
        min-width: 72%;
        max-height: 250px;
        min-height: 140px;
        border: 0;
        padding-left: 3.5%;
        padding-right: 3.5%;
        padding-top: 1%;
        font-size: 1.7em;
        color: black;
    }

    #CreateProjectForm> div:nth-child(3)
    {
        display: flex;
        width: 87%;
        height: 9%;
        margin: auto;
        justify-content: space-between;
    }  

    #CreateProjectForm> div:nth-child(3)> button
    {
        height: 100%;
        width: 36%;
        font-size: 1.3em;
    }  

</style>