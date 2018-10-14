<template>
    <section>
        <p>{{ msg }}</p>
        <Table strip :columns="columns" :data="products"></Table>
    </section>
</template>
<style lang="less">

</style>
<script>
    export default {
        data () {
            return {
                msg: "已发布页面",
                columns: [
                    {title: '品牌', key: 'label'},
                    {title: '单价', key: 'unit'},
                    {title: 'id', key: 'id'},
                    {title: '产品描述', key: 'info'},
                    {title: '示例图', key: 'img'}
                ],
                products: [
                    {
                        label: '衣服',
                        unit: 123,
                        id: 798676,
                        info: '详细信息。。。',
                        img: ''
                    },
                    {
                        label: '衣服',
                        unit: 123,
                        id: 798676,
                        info: '详细信息。。。'
                    },
                    {
                        label: '衣服',
                        unit: 123,
                        id: 798676,
                        info: '详细信息。。。'
                    },
                    {
                        label: '衣服',
                        unit: 123,
                        id: 798676,
                        info: '详细信息。。。'
                    }
                ]
            }
        }
    }

</script>
