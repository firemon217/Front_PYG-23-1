<template>
    <div class="body">
        <header>
            <div>
                <div class="Logo">
                    <img src="@/Assets/Pictures/MainMenu/Logo.jpg"/>TeamFinder
                </div>
                <div class="MainProfile">
                    <img src="@/Assets/Pictures/MainMenu/EmptyPhotoProfile.jpg"/><a href="/Profile">Мой профиль</a>/
                    <a href="/EnterAccount">Авторизоваться</a>
                </div>
            </div>
        </header>
        <div class="popup" v-if="!IsOpenUpdateProfileModal">
            <div class="popup-content">
                <img src="@/Assets/Pictures/Profile/account_big.png" alt="account" title="account" />
                <div>
                    <div>Логин:</div>
                    <div>Че:</div>
                    <div>Теги:</div>
                    <div>О себе:</div>
                    <my-button @click="OpenUpdateProfileModal">Редактировать</my-button>
                </div>
                <a class="back_link" href="/">Назад</a>
            </div>
        </div>
        <div class="robo">
            <img src="@/Assets/Pictures/Profile/robot.png"/>
        </div>
        <update-profile-modal v-if="IsOpenUpdateProfileModal" @closeUpdateProfileModal="CloseUpdateProfileModal"></update-profile-modal>
    </div>
</template>

<script>
    import UpdateProfileModal from "@/Components/Profile/UpdateProfileModal/UpdateProfileModal.vue"

    export default
    {
        components:
        {
            UpdateProfileModal
        },

        data()
        {
            return{
                IsOpenUpdateProfileModal: false
            }
        },

        methods:
        {
            CloseUpdateProfileModal()
            {
                this.IsOpenUpdateProfileModal = false;
            },

            OpenUpdateProfileModal()
            {
                this.IsOpenUpdateProfileModal = true;
            }
        }
    }
</script>

<style scoped>

    .body
    {
        height: 100vh;
        position: relative;
    }

    header
    {
        width: 100%;
        height: 11%;
        position: relative;
        background-color: #4e7d49;
        color: white;
    }

    header> div
    {
        width: 95%;
        height: 54%;
        position: relative;
        top: 23%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .Logo
    {
        width: 35%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 2em;
    }

    .Logo> img
    {
        height: 100%;
        border-radius: 50%;
        margin-right: 20px;
    }

    .MainProfile
    {
        width: 35%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: right;
        align-items: center;
        font-size: 1.5em;
    }

    .MainProfile> img
    {
        height: 100%;
        border-radius: 50%;
        margin-right: 20px;
    }

    .MainProfile> a
    {   
        color: white;
        position: relative;
        text-decoration: underline;
    }

    .popup
    {
        height: 89%;
        position: relative;
    }

    .popup .popup-content
    {
        width: 33%;
        height: 71%;
        border-radius: 20px;
        left: 33.5%;
        top: 10%;
        border: 2px solid #4f7d4b;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .popup .popup-content img
    {
        height: 27.5%;
        margin-top: 4%;
    }

    .popup .popup-content> div
    {
        width: 60%;
        height: 57%;
        margin-top: 7%;
        display: flex;
        flex-direction: column;
    }

    .popup .popup-content> div> div
    {
        height: 12%;
        width: 100%;
        margin-top: 7%;
        border-radius: 20px;
        border: 2px solid #4f7d4b;
        background-color: rgba(0, 0, 0, 0);
        font-size: 1.3em;
        color: #4f7d4b;
        padding-left: 5%;
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    .popup .popup-content button
    {
        height: 12%;
        width: 100%;
        margin-top: 13%;
        font-size: 1.3em;
    }

    .popup .popup-content .back_link
    {
        position: absolute;
        font-size: 1.25em;
        display: flex;
        align-items: center;
        color: #4f7d4b;
        top: 20px;
        right: 20px;
    }

    .popup .popup-content .back_link:after
    {
        content: '';
        display: inline-block;
        margin-left: 5px;
        background: url("@/Assets/Pictures/Profile/arrow.png");
        background-size: 100% 100%;
        width: 19px;
        height: 28px;
    }

    .robo
    {
        width: 25%;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .robo> img
    {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1526px)
    {
        .popup .popup-content .back_link:after
        {
            width: 14px;
            height: 23px;
        }
    }

</style>