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

			<el-form-item label="任务类型">
				<el-radio-group v-model="form.taskType">
					<el-radio label='问卷'>问卷</el-radio>
					<el-radio label='其他'>其他</el-radio>
				</el-radio-group v-model="radio">
			</el-form-item>

			<el-form-item label="任务时间">
				<el-col :span="18">
					<v-DateTimePicker ref="taskTime"></v-DateTimePicker>
				</el-col>
				<el-col :span="6">
					<div class="warning">{{warnMsg.taskTime}}</div>
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
				taskWage:'',
				taskType:'问卷',
			},

			warnMsg:{
				taskName:'',
				taskTime:'',
				taskContent:'',
				paticipantNum:'',
				taskWage:''
			},
			user: 'ddghost'
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
			var requestForm = {
				"dtitle": this.form.taskName,
				"dsponsor": this.user,
				"daccepters": this.form.paticipantNum,
				"dcontent": this.form.taskContent,
				"dstartTime": this.$refs.taskTime.value[0].toString(),
				"dendTime": this.$refs.taskTime.value[1].toString(),
				"dmoney": this.form.taskWage,
				"dtype": this.form.taskType
			}

			console.log(requestForm)

			this.$http.get('/api/test').then(function(response){

			}, function(response){
				// 响应错误回调
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
