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

		<el-button type="primary" @click="participate" v-if="userStatus=='未参加' ">
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
		props:['initPage'],
		data() {
		  return {
				task: {
					id:'',
					taskName:'',
					taskType:'',
					creater:'',
					startTime:'',
					endTime:'',
					taskContent:'',
					paticipantNum:0,
					taskWage:0
				},
				userId: '',
				userStatus:'',
			}
		},

		methods: {
			participate(){
				var commitForm = {did:this.task.id}
				this.$http.post('/api/duties/take', commitForm).then(function(response){
					console.log(response.body)
					this.initPage()
					alert('报名成功')
				}, function(response){
					console.log(response.body)
				});
			}

		}
	}
</script>
