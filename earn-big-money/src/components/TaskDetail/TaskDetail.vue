<template>
	<div style="width: 600px; margin: 0 auto;" >
		<el-container>
		  <el-header>{{task.taskName}}</el-header>
		  <el-container style="height:50px">
		    <el-aside width="200px">任务类型:</el-aside>
		    <el-main>{{task.taskType}}</el-main>
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

			<el-container>
		    <el-header style="text-align:left">任务内容:</el-header>
		    <el-main style="text-align:left">
					{{task.taskContent}}
				</el-main>
		  </el-container>
		</el-container>
		<el-button type="primary">我要报名</el-button>
		<el-button type="primary">返回</el-button>
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
				taskName:'hello world',
				taskType:'问卷',
				startTime:'2019-07-13',
				endTime:'2019-08-12',
				taskContent:'内容是指事物所包含的实质性事物。一个艺术作品的表现、基本含义、意味或审美价值。内容关涉的是我们在艺术作品中感受到的感觉的、主观的、心理的和情感方面的意',
				paticipantNum:10,
				taskWage:1
			},
		}
	}
}
</script>
