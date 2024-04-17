<template>
        <div id="WindowAuthorization"> <!-- Окно авторизации -->
            <div> <!-- Блок конкатыновки элементов -->
                <h1>
                    TeamFinder <!-- Заголовок окна -->
                </h1>
                <h2>Найди IT-проект по душе</h2>
                <form method="post"> <!-- Форма, передающая значения на обработку -->
                    <my-input placeholder="Логин" name="login"/> <!-- Поле для ввода логина -->
                    <my-input placeholder="Пароль" name="Password"/> <!-- Поле для ввода пароля -->
                    <my-button type="button" @click="SwitchMainMenu"> <!-- Кнопка, для отправки формы -->
                        <span>Войти</span> <!-- Текст кнопки -->
                        <a href="/" style="display: none"></a>
                    </my-button>
                </form>
                <span> <!-- Текстовый блок для ссылка на регистрацию -->
                    <span>Нет профиля?</span> <a href="/enteraccount/registration">Зарегистрироваться</a>
                </span>
            </div>
        </div>
</template>

<script>
    export default
    {
        methods:
        {
            SwitchMainMenu()
            {
                document.querySelector('form button a').click()
            }
        }
    }
</script>

<style scoped>
#WindowAuthorization
	{
		width: 32%;
		height: 51vh;
		background-color: #edeae2;
		border: 3px solid #294c26;
		border-radius: 25px;
		position: relative;
		top: 24.5vh;
		left: 34%;
	}

		#WindowAuthorization> div
		{
			width: 70%;
			height: 73.5%;
			position: relative;
			left: 15%;
			top: 16.5%;
			display: flex;
			flex-direction: column;
		}

		#WindowAuthorization> div> h1
		{
			position: relative;
			text-align: center;
			color: #2d5728;
			font-size: 3rem;
			margin-bottom: 10px;
			font-weight: 500;
		}

		#WindowAuthorization> div> h2
		{
			position: relative;
			text-align: center;
			color: #376a31;
			font-size: 1em;
			margin-bottom: 25px;
			font-weight: 500;
		}

		#WindowAuthorization> div> form
		{
			width: 100%;
			height: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-bottom: 25px;
		}

		#WindowAuthorization> div> span
		{
			width: 100%;
			height: 30px;
			font-size: 1.25rem;
			color: #477243;
			position: relative;
			display: flex;
			justify-content: space-between;
		}

		#WindowAuthorization> div> span> a
		{
			text-decoration: underline;
			color: #2d5728;
			font-weight: 700;
		}
</style>