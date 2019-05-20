<template>
	<div style="width: 600px; margin: 0 auto;" >
		<h1>创建任务</h1>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="任务名称">
				<el-col :span="18">
					<el-input  v-model="form.taskName"  type="textarea":autosize="{ minRows: 1, maxRows: 2}"></el-input>
				</el-col>

				<el-col :span="6">
					<div class="warning">{{warnMsg.taskName}}</div>
				</el-col>
			</el-form-item>

			<el-form-item label="任务内容">
				<el-col :span="18">
					<el-input v-model="form.taskContent" type="textarea":autosize="{ minRows: 4, maxRows: 10}"></el-input>
				</el-col>
				<el-col :span="6">
					<div class="warning">{{warnMsg.taskContent}}</div>
				</el-col>
			</el-form-item>

			<el-form-item label="任务时间">
				<el-col :span="18">
					<v-DateTimePicker ref="taskTime"></v-DateTimePicker>
				</el-col>
				<el-col :span="6">
					<div class="warning">{{warnMsg.taskTime}}</div>
				</el-col>
			</el-form-item>

			<el-form-item label="参加人数" >
				<el-col :span="18">
					<el-input  v-model="form.paticipantNum"></el-input>
				</el-col>
				<el-col :span="6">
					<div class="warning">{{warnMsg.paticipantNum}}</div>
				</el-col>
			</el-form-item>

			<el-form-item label="薪酬">
				<el-col :span="18">
					<el-input v-model="form.taskWage" >
						<template slot="append">元/每人</template>
					</el-input>
				</el-col>

				<el-col :span="6">
					<div class="warning">{{warnMsg.taskWage}}</div>
				</el-col>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<router-link :to="{name:'Login'}">
					<el-button>取消</el-button>
				</router-link>
			</el-form-item>
		</el-form>
	</div>
</template>




<script>
	import DateTimePicker from './DateTimePicker.vue'
	import axios from 'axios'
	export default {
	components: {
		"v-DateTimePicker":DateTimePicker
	},

	data() {
	  return {
			form: {
				taskName:'',
				taskContent:'',
				paticipantNum:'',
				taskWage:''
			},

			warnMsg:{
				taskName:'',
				taskContent:'',
				taskTime:'',
				paticipantNum:'',
				taskWage:''
			}
	  }
	},

	methods: {
		isNumber: function(obj) {
			var reg = /^(-?[0-9]+)$/;
			if (reg.test(obj)) {
				return true;
			}
			return false;
		},

		isFloat: function(obj) {
		  var reg = /^(-?[0-9]+)(\.[0-9]+)?$/;
		  if (reg.test(obj)) {
		    return true;
		  }
		  return false;
		},


		sendForm: function(){
			console.log('???')

			axios.get('/api/').then(function (response) {
				console.log(response);
			}).catch(function (error) {
				console.log(error);
			});

		},
		onSubmit() {
			if(!this.form.taskName)
				this.warnMsg.taskName = '请填写任务名字'
			else
				this.warnMsg.taskName = ''

			if(!this.form.taskContent)
				this.warnMsg.taskContent = '请填写任务内容'
			else
				this.warnMsg.taskContent = ''

			if(!this.$refs.taskTime.value )
				this.warnMsg.taskTime = '请填写任务时间'
			else
				this.warnMsg.taskTime = ''


			if(this.isNumber(this.form.paticipantNum) ){
				this.form.paticipantNum = parseInt(this.form.paticipantNum)
				if(this.form.paticipantNum <= 0)
					this.warnMsg.paticipantNum = '参加人数必须大于0'
				else
					this.warnMsg.paticipantNum = ''
			}
			else{
				this.warnMsg.paticipantNum ='参加人数必须为整数';
			}

			if(this.isFloat(this.form.taskWage) ){
				this.form.taskWage = parseFloat(this.form.taskWage)
				if(this.form.taskWage <= 0)
					this.warnMsg.taskWage = '薪酬必须大于0'
				else
					this.warnMsg.taskWage = ''
			}
			else{
				this.warnMsg.taskWage = '薪酬必须为数字'
			}

			var validate = true
			for(var key in this.warnMsg){
				if(this.warnMsg[key] != '')
					validate = false
			}
			if(validate){
				this.sendForm()
			}
			else {
				alert('提交失败，请将任务信息填写正确!')
			}
		}
	}
}
</script>
