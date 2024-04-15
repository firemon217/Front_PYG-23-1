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
                        <input />
                    </div>
                    <div>
                        <h2>
                            Описание:
                        </h2>
                        <textarea>

                        </textarea>
                    </div>
                    <div>
                        <button>Готова!</button>
                        <button type="button" @click="DisactiveCreateProject">Отмена</button>
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
            }
        }
    }
</script>

<style scoped>
    #CreateProject
    {
        width: 1000px;
        height: 700px;
        position: absolute;
        top: calc(50% - 350px);
        left: calc(50% - 500px);
        background-color: #edeae2;
        border: 5px solid #4e7d49;
        border-radius: 50px;
        color: #2d5728;
    }

    #CreateProject> div
    {
        width: 800px;
        height: 600px;
        position: relative;
        top: calc(50% - 300px);
        left: calc(50% - 400px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #CreateProject> div> h1
    {
        text-align: center;
        font-size: 40px;
        font-weight: 400;
    }

    #CreateProjectForm
    {
        width: 100%;
        height: 500px;
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
        margin-bottom: 30px;
    }  
    
    #CreateProjectForm> div:nth-child(2)
    {
        margin-bottom: 30px;
    }  

    #CreateProjectForm> div> h2
    {
        font-size: 30px;
        font-weight: 400;
    }

    #CreateProjectForm> div> input
    {
        width: 560px;
        height: 50px;
        border: 0;
        padding-left: 20px;
        font-size: 27px;
    }

    #CreateProjectForm> div> textarea
    {
        max-width: 560px;
        min-width: 560px;
        max-height: 300px;
        min-height: 200px;
        border: 0;
        padding-left: 20px;
        font-size: 27px;
    }

    #CreateProjectForm> div:nth-child(3)
    {
        display: flex;
        width: 700px;
        height: 40px;
        margin: auto;
        justify-content: space-between;
    }  

    #CreateProjectForm> div:nth-child(3)> button
    {
        height: 40px;
        width: 250px;
        justify-content: space-between;
        background-color: #588d52;
        font-size: 24px;
        border: 0;
        box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
		transition-duration: 0.4s;
        color: white;
        font-size: 25px;
        border-radius: 20px;
    }  

    #CreateProjectForm> div:nth-child(3)> button:hover
    {
        background-color: #366131;
    }

    #CreateProjectForm> div:nth-child(3)> button:Focus
    {
        background-color: #475c45;
        transition-duration: 0.1s;
        box-shadow: 0 0 15px 5px rgba(70, 70, 70, 0.8);
    }

</style>