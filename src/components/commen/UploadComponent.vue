<template>
    <section>
        <Upload :action="uploadUrl" :format="['jpg','png','jpeg']" :max-size="2048" :on-success="uploadSuccess" :on-error="uploadError" :on-progress="uploadProgress">
            <div :style="uploadStyle">
                <Icon type="ios-add" size="48"></Icon>
            </div>
        </Upload>
    </section>
</template>
<style>

</style>
<script>
    export default {
        props: {
            uploadUrl: {
                type: String,
                default: ''
            },
            uploadStyle: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
                msg: '这是一个上传文件的公共组件'
            }
        },
        methods: {
            uploadSuccess () {
                this.$emit('uploadSuccess', 'success')
            },
            uploadError () {
                this.$emit('uploadError', 'error')
            },
            uploadProgress () {
                this.$emit('uploadProgress', 'progress')
            }
        }
    }
</script>