<template>
        <div id="WindowAuthorization"> <!-- Окно авторизации -->
            <div id="WindowAuthorizationBlock"> <!-- Блок конкатыновки элементов -->
                <h1>
                    TeamFinder <!-- Заголовок окна -->
                </h1>
                <h2>Найди IT-проект по душе</h2>
                <div class="form"> <!-- Форма, передающая значения на обработку -->
                    <my-input placeholder="Логин" name="login" v-model="login"/> <!-- Поле для ввода логина -->
                    <my-input placeholder="Пароль" name="password" v-model="password"/> <!-- Поле для ввода пароля -->
                    <my-button type="button" @click="Authorization"> <!-- Кнопка, для отправки формы -->
                        <span>Войти</span> <!-- Текст кнопки -->
                    </my-button>
                </div>
                <span> <!-- Текстовый блок для ссылка на регистрацию -->
                    <span>Нет профиля?</span> <a @click="$router.push('/enteraccount/registration')">Зарегистрироваться</a>
                </span>
            </div>
			<div class="error" v-if="error">
				Ошибка
				<my-button @click="error=false"> <!-- Кнопка, для отправки формы -->
					<span>Close</span> <!-- Текст кнопки -->
				</my-button>
			</div>
        </div>
</template>

<script>
    export default
    {
        methods:
        {
            Authorization()
            {
                if(this.login == this.$store.state.login && this.password == this.$store.state.password)
				{
					this.$router.push('/')
				}
				else
				{
					this.error = true
					this.login = ''
					this.password = ''
				}
            }
        },

		data()
		{
			return{
				login: '',
				password: '',
				error: false
			}
		},
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

		#WindowAuthorizationBlock
		{
			width: 70%;
			height: 73.5%;
			position: relative;
			left: 15%;
			top: 16.5%;
			display: flex;
			flex-direction: column;
		}

		#WindowAuthorizationBlock> h1
		{
			position: relative;
			text-align: center;
			color: #2d5728;
			font-size: 3rem;
			margin-bottom: 10px;
			font-weight: 500;
		}

		#WindowAuthorizationBlock> h2
		{
			position: relative;
			text-align: center;
			color: #376a31;
			font-size: 1em;
			margin-bottom: 25px;
			font-weight: 500;
		}

		.form
		{
			width: 100%;
			height: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-bottom: 25px;
		}

		#WindowAuthorizationBlock> span
		{
			width: 100%;
			height: 30px;
			font-size: 1.25rem;
			color: #477243;
			position: relative;
			display: flex;
			justify-content: space-between;
		}

		#WindowAuthorizationBlock> span> a
		{
			text-decoration: underline;
			color: #2d5728;
			font-weight: 700;
		}

		.error
		{
			width: 60%;
			height: 60%;
			background-color: #edeae2;
			border: 4px solid #588d52;
			border-radius: 25px;
			position: absolute;
			top: 20%;
			left: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
		}

		.error> button
		{
			width: 80%;
			height: 10%;
			position: relative;
			left: 10%;
		}
</style>