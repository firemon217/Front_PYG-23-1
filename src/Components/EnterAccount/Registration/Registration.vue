<template>
    <div id="WindowRegistration"> <!-- Окно авторизации -->
		<div id="WindowRegistrationBlock"> <!-- Блок конкатыновки элементов -->
			<h1>
				Регистрация <!-- Заголовок окна -->
			</h1>
			<div class="form" method="post"> <!-- Форма, передающая значения на обработку -->
				<my-input placeholder="Логин" v-model="login" name="login"/> <!-- Поле для ввода логина -->
				<my-input placeholder="Email" v-model="email" name="e-mail"/> <!-- Поле для ввода email -->
				<my-input placeholder="Пароль" v-model="password" name="password"/> <!-- Поле для ввода пароля -->
				<span> <!-- Текстовый блок для ссылка на регистрацию -->
					<span @click="OnClickCheckBox"><span class="OnCheckBox" v-if="OnCheckBox"></span><input style="display:none" type="checkbox" /> </span> Согласие на обработку персональных данных
				</span>
				<my-button @click="Registration"> <!-- Кнопка, для отправки формы -->
					<span>Подтвердить</span> <!-- Текст кнопки -->
				</my-button>
			</div>
		</div>
		<div class="error" v-if="error">
			{{this.errorText}}
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
			OnClickCheckBox()
			{
				if(this.OnCheckBox == true)
				{
					this.OnCheckBox = false;
					document.querySelector(".form> span> span> input").checked = false;
				}
				else
				{
					this.OnCheckBox = true;
					document.querySelector(".form> span> span> input").checked = true;
				}
			},

			Registration()
			{
				if(this.OnCheckBox)
				{
					if(!this.login)
					{
						this.error = true;
						this.login = ''
						this.password = ''
						this.email = ''
						this.errorText = "Введите логин"
						return
					}
					if(!this.password)
					{
						this.error = true;
						this.login = ''
						this.password = ''
						this.email = ''
						this.errorText = "Введите пароль"
						return
					}
					if(!this.email)
					{
						this.error = true;
						this.login = ''
						this.password = ''
						this.email = ''
						this.errorText = "Введите e-mail"
						return
					}
					if(this.password.length < 8)
					{
						this.error = true;
						this.login = ''
						this.password = ''
						this.email = ''
						this.errorText = "Пароль меньше 8 символов"
						return
					}
					else
					{
						this.$store.state.login = this.login
						this.$store.state.password = this.password
						this.$store.state.email = this.email
						this.$router.push("/enteraccount")
					}
				}
				else
				{
					this.error = true;
					this.login = ''
					this.password = ''
					this.email = ''
					this.errorText = "Вы не подтвердили согласие"
				}
			}

		},

		
		data()
		{
			return{
				OnCheckBox: false,
				login: '',
				password: '',
				email: '',
				error: false,
				errorText: ""
			}
		},
	}
</script>

<style scoped>
#WindowRegistration
	{
		width: 32%;
		height: 52vh;
		background-color: #edeae2;
		border: 3px solid #294c26;
		border-radius: 25px;
		position: relative;
		top: 24.5vh;
		left: 34%;
	}

		#WindowRegistrationBlock
		{
			width: 75%;
			height: 80%;
			position: relative;
			left: 12.5%;
			top: 13%;
			display: flex;
			flex-direction: column;
		}

		#WindowRegistrationBlock> h1
		{
			position: relative;
			text-align: center;
			color: #2d5728;
			font-size: 3em;
			margin-bottom: 7%;
			font-weight: 500;
		}

		#WindowRegistrationBlock> .form
		{
			width: 100%;
			height: 73%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		#WindowRegistrationBlock> .form> span
		{
			width: 100%;
			height: 12%;
			color: #2d5728;
			font-size: 1.2em;
			position: relative;
			padding-left: 25px;
			display: flex;
			align-items: center;
		}

		#WindowRegistrationBlock> .form> span> span
		{
			width: 15px;
			height: 15px;
			position: absolute;		
			border: 2px solid #2d5728;
			left: 0;
		}

		#WindowRegistrationBlock> .form> span> span> .OnCheckBox
		{
			width: 13px;
			height: 13px;
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
				0px 2px
			);
			background-color: #588d52;
			position: absolute;
			left: -1px;
			top: -1px;
		}

		.form> button
		{
			height: 15%;
		}

		.form> input
		{
			height: 15%;
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
		font-size: 1.2em;
	}

	.error> button
	{
		width: 80%;
		height: 10%;
		position: relative;
		left: 10%;
		top: 20%;
	}
</style>