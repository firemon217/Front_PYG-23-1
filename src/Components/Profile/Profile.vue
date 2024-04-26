<template>
    <div class="body">
        <my-header></my-header>
        <div class="popup" v-if="!IsOpenUpdateProfileModal">
            <div class="popup-content">
                <img src="@/Assets/Pictures/Profile/account_big.png" alt="account" title="account" />
                <div>
                    <div>Логин: {{$store.state.login}}</div>
                    <div>e-mail: {{$store.state.email}}</div>
                    <div>Теги: {{$store.state.tags}}</div>
                    <div>О себе: {{$store.state.aboutSelf}}</div>
                    <my-button @click="OpenUpdateProfileModal">Редактировать</my-button>
                </div>
                <a class="back_link" @click="$router.push('/')">Назад</a>
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