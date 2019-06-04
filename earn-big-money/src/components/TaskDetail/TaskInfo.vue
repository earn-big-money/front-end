<template>
	<div style="width: 100%; margin: 0 auto;" >
		<el-container>
		  <el-header>{{task.taskName}}</el-header>
		  <el-container style="height:50px">
		    <el-aside width="200px">任务类型:</el-aside>
		    <el-main>{{task.taskType}}</el-main>
		  </el-container>

			<el-container style="height:50px">
		    <el-aside width="200px">任务发布者:</el-aside>
		    <el-main>{{task.creater}}</el-main>
		  </el-container>

			<el-container style="height:50px">
		    <el-aside width="200px">任务时间:</el-aside>
		    <el-main>{{task.startTime}} ~ {{task.endTime}}</el-main>
		  </el-container>

			<el-container style="height:50px">
		    <el-aside width="200px">剩余参加人数:</el-aside>
		    <el-main>{{task.paticipantNum}}</el-main>
		  </el-container>
			<el-container style="height:50px">
		    <el-aside width="200px">参与薪酬:</el-aside>
		    <el-main>{{task.taskWage}}元</el-main>
		  </el-container>

			<el-container style="height:50px">
		    <el-aside width="200px">当前状态</el-aside>
		    <el-main>{{userStatus}}</el-main>
		  </el-container>

			<el-container v-if="task.taskType=='其他' ">
		    <el-header style="text-align:left">任务内容:</el-header>
		    <el-main style="text-align:left">
					{{task.taskContent}}
				</el-main>
		  </el-container>
		</el-container>

		<el-button type="primary" @click="participate" v-if="isShowPaticipateButton">
			我要报名
		</el-button>
		<router-link :to="{path:'/'}">
			<el-button type="primary">返回</el-button>
		</router-link>
	</div>
</template>


<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
		width: 200px;
    text-align: center;
		line-height: 50px
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
		padding: 0 40px;
    text-align: center;
		line-height: 50px
  }

</style>

<script>
	export default {
	data() {
	  return {
			task: {
				id:this.$route.params.duty.did,
				taskName:this.$route.params.duty.dtitle,
				taskType:this.$route.params.duty.dtype,
				creater:this.$route.params.duty.dsponsor,
				startTime:this.$route.params.duty.dstartTime,
				endTime:this.$route.params.duty.dendTime,
				taskContent:this.$route.params.duty.dcontent,
				paticipantNum:this.$route.params.duty.daccepters-this.$route.params.duty.curaccepters,
				taskWage:this.$route.params.duty.dmoney
			},
			userId: '',
			userStatus:'',
			isShowPaticipateButton: false,
			doneUsers:[],
			unDoneUsers:[]
		}
	},

	mounted: function () {


		//检查是否有用户
		if(this.$cookies.get('id') ){
			this.userId = this.$cookies.get('id')
			var queryStr = {did:this.task.id}
			//若用户不是发起者，检查用户是否参加活动
			//若用户是发起者

			this.$http.get('/api/duties/getAccepters', {params:queryStr}).then(function(response){
				var taskAccepters = response.body.accepters
				var isUserParticipate = false
				//todo
				for( let taskAccepter of taskAccepters){
					if(taskAccepter.status=='accepted'){
						this.unDoneUsers.push(taskAccepter.uid)
					}
					else if(taskAccepter.status=='done'){
						this.doneUsers.push(taskAccepter.uid)
					}

					if(taskAccepter.uid == this.userId && taskAccepter.status=='accepted'){
						isUserParticipate = true
					}
				}


				if(this.userId == this.task.creater){
					this.userStatus = '发布者'
				}
				else if(isUserParticipate){
					this.userStatus = '已参加'
				}
				else{
					this.isShowPaticipateButton = true
					this.userStatus = '未参加'
				}
				//console.log(response.body)
			}, function(response){
				console.log(response.body)
				alert('error')
			});


		}


	},

	methods: {
		participate(){
			var commitForm = {did:this.task.id}
			this.$http.post('/api/duties/take', commitForm).then(function(response){
				console.log(response.body)
				alert('报名成功')
				this.isShowPaticipateButton = false
			}, function(response){
				console.log(response.body)
			});
		}

	}



}
</script>
