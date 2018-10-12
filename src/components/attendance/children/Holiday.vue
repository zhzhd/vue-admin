<template>
    <Form ref="holidayForm" :model="holidayForm" :rules="ruleValidate" :label-width="120" class="form-holiday" inline>
        <FormItem label="主题：" prop="holidayName">
            <Input v-model="holidayForm.holidayName" placeholder="这个应该是带出来的？" :maxlength="15" />
        </FormItem>
        <FormItem label="流水单号：" prop="followCode">
            <Input v-model="holidayForm.followCode" placeholder="这个流水单号是带出来的！" readonly />
        </FormItem>
        <FormItem label="申请人姓名：" prop="applyUser" class="apply-user">
            <Input v-model="holidayForm.applyUser" placeholder="这个姓名是带出来的！" readonly />
        </FormItem>
        <FormItem label="申请人工号：" prop="applyUserId" class="apply-user-id">
            <Input v-model="holidayForm.applyUserId" placeholder="这个是带出来的！" readonly />
        </FormItem>
        <FormItem label="休假及外出类型：" prop="applyType">
            <Select v-model="holidayForm.applyType" placeholder="请选择休假及外出类型" style="width:162px;">
                <Option v-for="(item, index) in holidayForm.applyTypeList" :value="item.label" :key="index">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="休假单位：" prop="levelUnit" class="level-unit">
            <RadioGroup v-model="holidayForm.levelUnit" :on-change="handelChangeRadio(holidayForm.levelUnit)">
                <Radio label="0">小时</Radio>
                <Radio label="1">天</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="开始日期：" prop="startTime" class="start-timer">
            <DatePicker type="date" placeholder="开始日期"  v-model="holidayForm.startTime"></DatePicker>
        </FormItem>
        <FormItem label="休假时长：" prop="applayHours" v-show="holidayForm.levelUnit === '0'">
            <Input v-model="holidayForm.applayHours" placeholder="请输入休假时长" />
        </FormItem>
        <FormItem label="休假天数：" prop="applyDays" v-show="holidayForm.levelUnit === '1'">
            <Input v-model="holidayForm.applyDays" placeholder="请输入休假天数" />
        </FormItem>
        <FormItem label="申请原因：" prop="applyReason" class="apply-reason">
            <Input v-model="holidayForm.applyReason" type="textarea" placeholder="请输入休假申请原因" />
        </FormItem>
        <FormItem prop="applyFile" class="form-item-square file-upload" label="附件上传：" >
            <upload-component :uploadUrl="uploadUrl"  @uploadError="uploadError" @uploadSuccess="uploadSuccess" @uploadProgress="uploadProgress"></upload-component>
        </FormItem>
        
    </Form>
</template>
<style lang="less">
    .form-holiday {
        width: 600px;
        .start-timer {
            width: 280px;
        }
        .apply-reason {
            display: block;
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
                holidayForm: {
                    holidayName: '',
                    followCode: '',
                    applyUser: '',
                    applyUserId: '',
                    applyType: '',
                    applyTypeList: [
                        {
                            label: '调休',
                            value: ''
                        },
                        {
                            label: '年假',
                            value: ''
                        },
                        {
                            label: '事假',
                            value: ''
                        },
                        {
                            label: '病假',
                            value: ''
                        },
                        {
                            label: '公出',
                            value: ''
                        },
                        {
                            label: '工伤假',
                            value: ''
                        },
                    ],
                    levelUnit: '0',
                    startTime: '',
                    applayHours: '',
                    applyDays: '',
                    applyReason: '',
                    applyFile: ''
                },
                ruleValidate: {},
                uploadUrl: 'test',
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
        // computed: {
        //     uploadUrl () {
        //         return 'url地址'
        //     }
        // },
        methods: {
            handelChangeRadio (name) {
                console.log(name)
            },
            uploadProgress () {

            },
            uploadSuccess () {

            },
            uploadError () {

            }
        }
    }
</script>
