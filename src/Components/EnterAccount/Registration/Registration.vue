<template>
    <div id="WindowRegistration"> <!-- Окно авторизации -->
		<div> <!-- Блок конкатыновки элементов -->
			<h1>
				Регистрация <!-- Заголовок окна -->
			</h1>
			<form method="post"> <!-- Форма, передающая значения на обработку -->
				<input placeholder="Логин" name="login"/> <!-- Поле для ввода логина -->
				<input placeholder="Email" name="e-mail"/> <!-- Поле для ввода email -->
				<input placeholder="Пароль" name="Password"/> <!-- Поле для ввода пароля -->
				<span> <!-- Текстовый блок для ссылка на регистрацию -->
					<span><span class=""></span><input style="display:none" type="checkbox" /> </span> Согласие на обработку персональных данных
				</span>
				<button> <!-- Кнопка, для отправки формы -->
					<span>Подтвердить</span> <!-- Текст кнопки -->
				</button>
			</form>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
#WindowRegistration
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

		#WindowRegistration> div
		{
			width: 430px;
			position: relative;
			left: calc(50% - 215px);
			top: 70px;
			display: flex;
			flex-direction: column;
		}

		#WindowRegistration> div> h1
		{
			position: relative;
			text-align: center;
			color: #2d5728;
			font-size: 50px;
			margin-bottom: 40px;
			font-weight: 500;
		}

		#WindowRegistration> div> form
		{
			width: 100%;
			height: 310px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		#WindowRegistration> div> form> input
		{
			width: 100%;
			height: 45px;
			background-color: #588d52;
			border: none;
			border-radius: 23px;
			color: white;
			padding-left: 25px;
			font-size: 23px;
			box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
		}

		input::-webkit-input-placeholder { color: #c9dec6; }

		#WindowRegistration> div> form> span
		{
			width: 430px;
			height: 40px;
			color: #2d5728;
			font-size: 18px;
			position: relative;
			padding-left: 25px;
		}

		#WindowRegistration> div> form> span> span
		{
			width: 15px;
			height: 15px;
			position: absolute;		
			border: 2px solid #2d5728;
			left: 0;
			top: calc(50% - 7.5px);
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

		#WindowRegistration> div> form> button
		{
			width: 100%;
			height: 45px;
			background-color: #588d52;
			border: none;
			border-radius: 23px;
			color: white;
			font-size: 23px;
			box-shadow: 0 20px 20px rgba(120, 120, 120, 0.4);
			transition-duration: 0.4s;
		}

		#WindowRegistration> div> form> button:hover
		{
			background-color: #366131;
		}

		#WindowRegistration> div> form> button:focus
		{
			background-color: #475c45;
			transition-duration: 0.1s;
			box-shadow: 0 0 15px 5px rgba(70, 70, 70, 0.8);
        }
</style>