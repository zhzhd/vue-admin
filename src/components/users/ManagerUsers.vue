<template>
    <section>
        <p>{{ msg }}</p>
        1.Admin -> 添加新用户，删除旧用户，在职用户列表
        <hr>
        2.普通账户：个人信息展示

    </section>
</template>
<style lang="less" scoped>

</style>
<script>
    export default {
        created () {},
        data () {
            return {
                msg: "user用户管理"
            }
        },
    }
</script>
