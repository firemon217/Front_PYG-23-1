<template>
        <div id="WindowAuthorization"> <!-- Окно авторизации -->
            <div> <!-- Блок конкатыновки элементов -->
                <h1>
                    TeamFinder <!-- Заголовок окна -->
                </h1>
                <h2>Найди IT-проект по душе</h2>
                <form method="post"> <!-- Форма, передающая значения на обработку -->
                    <input placeholder="Логин" name="login"/> <!-- Поле для ввода логина -->
                    <input placeholder="Пароль" name="Password"/> <!-- Поле для ввода пароля -->
                    <button type="button" @click="SwitchMainMenu"> <!-- Кнопка, для отправки формы -->
                        <span>Войти</span> <!-- Текст кнопки -->
                        <a href="/MainMenu" style="display: none"></a>
                    </button>
                </form>
                <span> <!-- Текстовый блок для ссылка на регистрацию -->
                    <span>Нет профиля?</span> <a href="/EnterAccount/Registration">Зарегистрироваться</a>
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
		width: 620px;
		height: 550px;
		background-color: #edeae2;
		border: 3px solid #294c26;
		border-radius: 25px;
		position: relative;
		top: calc(50% - 275px);
		left: calc(50% - 310px);
	}

		#WindowAuthorization> div
		{
			width: 430px;
			position: relative;
			left: calc(50% - 215px);
			top: 100px;
			display: flex;
			flex-direction: column;
		}

		#WindowAuthorization> div> h1
		{
			position: relative;
			text-align: center;
			color: #2d5728;
			font-size: 50px;
			margin-bottom: 10px;
			font-weight: 500;
		}

		#WindowAuthorization> div> h2
		{
			position: relative;
			text-align: center;
			color: #376a31;
			font-size: 16px;
			margin-bottom: 25px;
			font-weight: 500;
		}

		#WindowAuthorization> div> form
		{
			width: 100%;
			height: 200px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-bottom: 25px;
		}

		#WindowAuthorization> div> form> input
		{
			width: 100%;
			height: 50px;
			background-color: #588d52;
			border: none;
			border-radius: 23px;
			color: white;
			padding-left: 25px;
			font-size: 23px;
			box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
		}

		input::-webkit-input-placeholder { color: #c9dec6; }

		#WindowAuthorization> div> form> button
		{
			width: 100%;
			height: 50px;
			background-color: #588d52;
			border: none;
			border-radius: 23px;
			color: white;
			font-size: 23px;
			box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
			transition-duration: 0.4s;

		}

		#WindowAuthorization> div> form> button:hover
		{
			background-color: #366131;
		}

		#WindowAuthorization> div> form> button:focus
		{
			background-color: #475c45;
			transition-duration: 0.1s;
			box-shadow: 0 0 15px 5px rgba(70, 70, 70, 0.8);
		}

		#WindowAuthorization> div> span
		{
			width: 390px;
			height: 30px;
			font-size: 20px;
			color: #477243;
			position: relative;
			left: calc(50% - 195px);
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