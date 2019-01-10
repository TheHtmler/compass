<template>
    <div class="login-wrapper">
        <form @submit.prevent="submitForm">
            <input type="text" name="username" v-model="loginForm.username" placeholder="Username">
            <input type="password" name="password" v-model="loginForm.password" placeholder="Password">
            <button type="submit">Sign In</button>
        </form>
    </div>
</template>

<script>
    import { loginRequest } from 'api/login'
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                loginRequest(this.loginForm).then(res => {
                    console.log(res)
                    this.$router.push({
                        path: '/dashboard'
                    }).catch(err => {
                        console.log(err)
                    })
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .login-wrapper {

    }
</style>
