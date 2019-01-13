<template>
    <Form ref="formWrapper" :model="formData" :rules="rules" inline>
        <FormItem prop="username">
            <Input type="text" v-model="formData.username" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formData.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="loginClick('formWrapper')">Signin</Button>
        </FormItem>
    </Form>
</template>

<script>
import { loginRequest } from 'api/login'

 export default {
    data () {
        return {
            formData: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { 
                        required: true,
                        message: 'Please fill in the username',
                        trigger: 'blur'
                    }
                ],
                password: [
                    { 
                        required: true,
                        message: 'Please fill in the password.',
                        trigger: 'blur'
                    },
                    { 
                        // type: 'string',
                        // min: 6,
                        // message: 'The password length cannot be less than 6 bits',
                        // trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        loginClick(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Loading.start()
                    // this.$Message.success('Success!')
                    loginRequest(this.formData).then((res) => {
                        console.log(res)
                        this.$Loading.finish()
                        this.$router.push({path: '/dashboard'})
                    }).catch((err) => {
                        this.$Loading.error()
                        console.log(err)
                        this.$Message.error('Login failed !')
                    })
                } else {
                    console.log('Please check your enter format !')
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>

