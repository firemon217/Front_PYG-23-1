<template>
    <div id="WindowRegistration"> <!-- Окно авторизации -->
		<div> <!-- Блок конкатыновки элементов -->
			<h1>
				Регистрация <!-- Заголовок окна -->
			</h1>
			<form method="post"> <!-- Форма, передающая значения на обработку -->
				<my-input placeholder="Логин" name="login"/> <!-- Поле для ввода логина -->
				<my-input placeholder="Email" name="e-mail"/> <!-- Поле для ввода email -->
				<my-input placeholder="Пароль" name="Password"/> <!-- Поле для ввода пароля -->
				<span> <!-- Текстовый блок для ссылка на регистрацию -->
					<span @click="OnClickCheckBox"><span class="OnCheckBox" v-if="OnCheckBox"></span><input style="display:none" type="checkbox" /> </span> Согласие на обработку персональных данных
				</span>
				<my-button> <!-- Кнопка, для отправки формы -->
					<span>Подтвердить</span> <!-- Текст кнопки -->
				</my-button>
			</form>
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
					document.querySelector("form> span> span> input").checked = false;
				}
				else
				{
					this.OnCheckBox = true;
					document.querySelector("form> span> span> input").checked = true;
				}
			}
		},

		
		data()
		{
			return{
				OnCheckBox: false,
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

		#WindowRegistration> div
		{
			width: 75%;
			height: 80%;
			position: relative;
			left: 12.5%;
			top: 13%;
			display: flex;
			flex-direction: column;
		}

		#WindowRegistration> div> h1
		{
			position: relative;
			text-align: center;
			color: #2d5728;
			font-size: 3em;
			margin-bottom: 7%;
			font-weight: 500;
		}

		#WindowRegistration> div> form
		{
			width: 100%;
			height: 73%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		#WindowRegistration> div> form> span
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

		#WindowRegistration> div> form> span> span
		{
			width: 15px;
			height: 15px;
			position: absolute;		
			border: 2px solid #2d5728;
			left: 0;
		}

		#WindowRegistration> div> form> span> span> .OnCheckBox
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

		form> button
		{
			height: 15%;
		}

		form> input
		{
			height: 15%;
		}
</style>