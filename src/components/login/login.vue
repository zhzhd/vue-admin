<template>
    <section>
        <Form ref="userLoginForm" :model="userLoginForm">
            <FormItem prop="userName">
                <Input type="text" v-model="userLoginForm.userName" placeholder="请输入用户名" size="large">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="text" v-model="userLoginForm.password" placeholder="请输入密码" size="large">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem style="textAlign: center">
                <Button type="primary" @click="handleSubmit('userLoginForm')" :style="btnStyle">登录</Button>
            </FormItem>
        </Form>
    </section>
</template>
<style lang="less">
    section {
        width: 400px;
        border: 1px solid #ccc;
        padding: 30px 45px;
        margin: 200px auto;
    }
</style>
<script>
    export default {
        data () {
            return {
                userLoginForm: {
                    userName: '',
                    password: ''
                },
                btnStyle: {
                    width: '150px',
                    height: '40px'
                }
            }
        },
        methods: {
            handleSubmit () {

            }
        }
    }
</script>