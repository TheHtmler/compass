<template>
    <div class="login-wrapper">
        <div class="login-content">
            <div class="logo">
                <img src="~assets/images/compass-logo.png" alt="hjhjjh" width="600">
                <div class="slogan">Aimless life is like sailing without compass</div>
            </div>
            <Form ref="formWrapper" :model="formData" :rules="rules" class="form-wrapper">
                <FormItem prop="username">
                    <Input type="text" v-model="formData.username" placeholder="Default: admin">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formData.password" placeholder="Default: admin">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="loginClick('formWrapper')">Login</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
import SStorage from 'utils/SStorage'

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
                    this.$store.dispatch('getUserInfoData', this.formData).then(() => {
                        this.$Loading.finish() 

                        this.$router.push({path: '/dashboard'})
                    }).catch(err => {
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
.login-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;

    .login-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .logo{
        padding: 30px 0 90px;
        img{
            display: inline-block;
        }

        .slogan {
            margin-top: 10px;
            font-size: 14px;
            color: #fff;
        }
    }

    .form-wrapper{
        margin: 0 auto;
        width: 300px;

        .ivu-btn{
            width: 100%;
        }
    }
}
</style>

