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
				<el-col :span="18">
					<el-radio-group v-model="form.taskType">
						<el-radio label='问卷'>问卷</el-radio>
						<el-radio label='其他'>其他</el-radio>
					</el-radio-group v-model="radio">
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
				<router-link :to="{path:'/'}">
					<el-button>返回</el-button>
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

		getFormatDateTime: function(date){
			const year = date.getFullYear()
			const month = date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth()
			const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
			const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
			const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
			const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

			return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
		},
		
		sendForm: function(){
			starttime = this.getFormatDateTime(this.$refs.taskTime.value[0])
			endtime = this.getFormatDateTime(this.$refs.taskTime.value[1])
			var requestForm = {
				"title": this.form.taskName,
				"accepters": this.form.paticipantNum,
				"content": this.form.taskContent,
				"starttime": starttime,
				"endtime": endtime,
				"money": this.form.taskWage,
				"type": this.form.taskType,
			}



			this.$http.post('/api/duties/create',requestForm).then(function(response){
				console.log(response)
			}, function(response){
				console.log(response)
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
