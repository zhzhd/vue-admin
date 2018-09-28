<template>
    <Form ref="feedbackForm" :model="feedbackForm" :rules="ruleValidate" :label-width="100" class="form-feedback">
        <FormItem label="反馈类别：" prop="category">
            <Select v-model="feedbackForm.category" placeholder="请选择反馈事项类别">
                <Option v-for="(item, index) in  feedbackForm.categoryList" :key="index" :value="item.label">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="意见和建议" prop="feedback">
            <Input type="textarea" v-model="feedbackForm.feedback" :autosize="{minRows: 4, maxRows: 8}" 
            placeholder="请输入您的意见和建议，我们会关注您的反馈，不管改进，不断提升"></Input>
        </FormItem>
        <FormItem prop="upload" class="form-item-square file-upload" label="附件上传：" >
            <Upload :action="uploadUrl" :format="['jpg','png','jpeg']" :max-size="2048" :on-success="uploadSuccess" :on-error="uploadError" :on-progress="uploadProgress">
                <div :style="uploadStyle">
                    <Icon type="ios-add" size="48"></Icon>
                </div>
            </Upload>
        </FormItem>
        <FormItem>
            <Button shape="circle" type="primary" @click="handleSubmit('formReport')" class="feedback-btn">提交</Button>
        </FormItem>
        <p>注：我们期待您的建议和意见，如果使用中有什么不好用的地方，请大声说出来</p>
        <p>您的反馈信息我们收到之后会在私信中通知您，如果被采纳，会有神秘彩蛋奉上~感谢您的参与</p>
    </Form>
</template>
<style lang="less">
    .form-feedback {
        width: 480px;
        .feedback-btn {
            width: 120px;
            height: 40px;
            font-size: 16px;
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                feedbackForm: {
                    category: '',
                    categoryList: [
                        {
                            label: '工作相关方面',
                            value: ''
                        },
                        {
                            label: '生活相关方面',
                            value: ''
                        },
                        {
                            label: '思想相关',
                            value: ''
                        }
                    ],
                    feedback: ''
                },
                ruleValidate: {
                    category: [
                        { required: true, message: '请选择意见反馈类型', trigger: 'change'}
                    ],
                    feedback: [
                        { required: true, message: '请填写您的反馈意见', trigger: 'blur'}
                    ]
                },
                uploadStyle: {
                    'width': '58px',
                    'height': '58px',
                    'line-height': '58px',
                    'text-align': 'center',
                    'border': '1px solid #ccc',
                    'cursor': 'pointer'
                }
            
            }
        },
        computed: {
            uploadUrl () {
                return '上传地址'
            }
        },
        methods: {
            uploadProgress () {
                //上传过程
            },
            uploadSuccess () {
                //成功回调
            },
            uploadError () {
                //失败回调
            }
        }
    }
    
</script>