<template>
    <div class="login-wrapper">
        <Form ref="loginForm" :model="loginForm" :rules="rules" inline>
            <FormItem prop="username">
                <Input type="text" v-model="loginForm.username" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="loginForm.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submitForm('loginForm')">Signin</Button>
            </FormItem>
        </Form>
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
                },
                rules: {
                    username: [
                        { required: true, message: 'Please fill in the username', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 5, message: 'The password length cannot be less than 5 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!')
                        loginRequest(this.loginForm).then(res => {
                            console.log(res)
                            this.$router.push({
                                path: '/dashboard'
                            }).catch(err => {
                                console.log(err)
                            })
                        })
                    } else {
                        this.$Message.error('Fail!')
                    }
                })
            },
        },
    }
</script>

<style lang="less" scoped>
    .login-wrapper {

    }
</style>
