<template>
    <form class="form__update">
        <input type="hidden" name="update">
        <div class="form__update--content">
            <div class="form__update--div">
                <label for="login" class="form__update--label">Логин:</label>
                <my-input type="text" id="login" name="login" class="form__update--input" />
            </div>
            <div class="form__update--div">
                <label for="password" class="form__update--label">Пароль:</label>
                <my-input type="text" id="password" name="password" class="form__update--input" />
            </div>
            <div class="form__update--div">
                <label for="tags" class="form__update--label">Теги:</label>
                <my-input type="text" id="tags" name="tags" class="form__update--input" />
            </div>
            <div class="form__update--div">
                <label for="about" class="form__update--label">О себе:</label>
                <textarea id="about" name="about" cols="30" rows="10" class="form__update--about"></textarea>
            </div>
            <div class="buttons">
                <my-button type="submit" id="send">Сохранить</my-button>
                <my-button type="reset" @click="CloseUpdateProfileModal">Отмена</my-button>
            </div> 
        </div>       
        <button class="close">
            <span></span>
        </button>
    </form>
</template>

<script>
    export default
    {
       methods: 
       {
            CloseUpdateProfileModal()
            {
                this.$emit("closeUpdateProfileModal")
            }
       }
    }
</script>

<style scoped>
    .form__update 
    {
        width: 42%;
        height: 60%;
        border: 2px solid #4e7d49;
        border-radius: 15px;
        color: #4e7d49;
        position: absolute;
        top: 20%;
        left: 29%;
    }

    .form__update--content 
    {
        width: 80%;
        height: 80%;
        position: relative;
        left: 10%;
        top: 10%;
        display: flex;
        flex-direction: column;
    }

    .form__update--div {
        width: 100%;
        min-height: 8%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .form__update--label {
        font-size: 1.5em;
        font-weight: 600;
    }

    .form__update--input {
        width: 80%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
        border: 2px solid #4e7d49;
        border-radius: 50px;
        font-size: 1.25em;
        color: black;
        padding-left: 5%;
    }

    .form__update--div:nth-child(4) {
        height: 41%;
        align-items: flex-start;
    }

    .form__update--about {
        max-width: 80%;
        min-width: 80%;
        max-height: 100%;
        border: 2px solid #4e7d49;
        font-size: 1.25em;
        color: black;
        border-radius: 25px;
        padding-left: 5%;
        padding-top: 2%;
        margin-bottom: 5%;
    }

    .buttons {
        position: absolute;
        display: flex;
        width: 100%;
        height: 8%;
        bottom: 0;
        justify-content: space-between;
    }

    .buttons button {
        height: 100%;
        width: 40%;
    }

    .close 
    {
        width: 15px;
        height: 15px;
        border: none;
        position: absolute;
        top: 14px;
        right: 12px;
    }

    .close> span
    {
        display: block;
        width: 15px;
        height: 15px;
        clip-path: polygon(0px 2px,
				2px 0px,
				6px 6px,
				11px 0px,
				13px 2px,
				8px 7px,
				13px 11px,
				11px 13px,
				6px 8px,
				2px 13px,
				0px 11px,
				5px 7px,
				0px 2px);
        background-color: #4e7d49;
    }
</style>