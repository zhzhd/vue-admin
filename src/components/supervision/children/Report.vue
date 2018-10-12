<template>

    <Form ref="formReport" :model="formReport" :rules="ruleValidate" :label-width="100" class="form-report">
        <FormItem label="举报事项：" prop="matters">
            <Select v-model="formReport.matters" placeholder="请选择举报事项">
                <Option v-for="(item, index) in mattersList" :value="item.label" :key="index">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="人员类型：" prop="userType">
            <RadioGroup v-model="formReport.userType">
                <Radio label="0">本司员工</Radio>
                <Radio label="1">外派员工</Radio>
                <Radio label="2">不清楚</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="人员姓名：" prop="userName">
            <Input v-model="formReport.userName" placeholder="请输入姓名" :maxlength="15" />
        </FormItem>
        <FormItem label="举报主题：" prop="topic">
            <Input v-model="formReport.topic" placeholder="请输入20字以内" :maxlength="20" />
        </FormItem>
        <FormItem label="举报内容：" prop="content">
            <Input v-model="formReport.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入举报内容" :maxlength="2000" :resize="false" />
        </FormItem>
        <FormItem prop="upload" class="form-item-square file-upload" label="附件上传：" >
            <upload-component :uploadUrl="uploadUrl"  @uploadProgress="uploadProgress" @uploadSuccess="uploadSuccess" @uploadError="uploadError"></upload-component>
        </FormItem>
        <FormItem>
            <Button shape="circle" type="primary" @click="handleSubmit('formReport')" class="report-btn">提交</Button>
        </FormItem>
        <p>注：我们会严格保密您的隐私</p>
        <p>您的举报我们核实并处理后会第一时间通过私信将处理结果发送给你，请关注</p>
    </Form>

    
</template>
<style lang="less" scoped>
    .form-report {
        width: 480px;
        .report-btn {
            width: 120px;
            height: 40px;
            font-size: 16px;
            // line-height: 40px;
        }
    }
    
</style>
<script>
import UploadComponent from '../../commen/UploadComponent'
    export default {
        components: {
            UploadComponent
        },
        data () {
            return {
                formReport: {
                    matters: '',
                    userType: '2',
                    userName: '',
                    topic: '',
                    content: '',
                    //uploadUrl: ''              //附件，支持部超过5个，逗号分隔开的字符串
                },
                uploadUrl: 'test',
                mattersList: [
                    {
                        label: '收受贿赂',
                        value: ''
                    },
                    {
                        label: '泄露机密',
                        value: ''
                    },
                    {
                        label: '弄虚作假',
                        value: ''
                    },
                    {
                        label: '侵占财产',
                        value: ''
                    },
                    {
                        label: '不爱国！',
                        value: ''
                    },
                ],
                ruleValidate: {
                    matters: [
                        { required: true, message: '请选择举报事项', trigger: 'change'}
                    ],
                    userType: [
                        { required: true, message: '请选择员工类型', trigger: 'change'}
                    ],
                    userName: [
                        { required: true, message: '请输入员工姓名', trigger: 'blur'}
                    ],
                    topic: [
                        { required: true, message: '请输入举报主题', trigger: 'blur'}
                    ],
                    content: [
                        { required: true, message: '请输入举报内容', trigger: 'blur'}
                    ],
                },
                // uploadStyle: {
                //     'width': '58px',
                //     'height': '58px',
                //     'line-height': '58px',
                //     'text-align': 'center',
                //     'border': '1px solid #ccc',
                //     'cursor': 'pointer'
                // }
            }
        },
        methods: {
            uploadProgress () {
                //上传过程
            },
            uploadSuccess () {
                //上传成功
            },
            uploadError () {
                //上传失败
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    console.log(valid);    
                })
            }
        }
    }
</script>

