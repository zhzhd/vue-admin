<template>
    <section>
        <p>{{ msg }}</p>
        <upload-component :uploadUrl="uploadUrl" :uploadStyle="uploadStyle" @uploadError="uploadError"></upload-component>
    </section>
</template>
<style lang="less">

</style>
<script>
import UploadComponent from '../../commen/UploadComponent'
    export default {
        components: {
            UploadComponent
        },
        data () {
            return {
                msg: "待发布页面",
                uploadStyle: {
                    'width': '58px',
                    'height': '58px',
                    'line-height': '58px',
                    'text-align': 'center',
                    'border': '1px solid #ccc',
                    'cursor': 'pointer'
                },
                uploadUrl: 'test'
            }
        },
        methods: {
            uploadError (data) {
                console.log(data)
            }
        },
        computed: {
            
        }
    }
</script>
