<template>
	<div>
		<el-menu :default-active="'checkInfo'"
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b"
			@select="handleSelect">
		  <el-menu-item index="checkInfo">任务信息</el-menu-item>
		  <el-submenu index="checkPaticipant" v-if="isCreater">
		    <template slot="title" >查看参加者信息</template>
		    <el-menu-item index="checkDone">已完成</el-menu-item>
		    <el-menu-item index="checkUnDone">未完成</el-menu-item>
		  </el-submenu>
		</el-menu>
		<v-taskInfo v-if='isShowInfo' ref='taskInfo'></v-taskInfo>
	</div>
</template>

<script>
	import taskInfo from './taskInfo.vue'
	export default {
	components: {
		"v-taskInfo":taskInfo,

	},
  data() {
    return {
			isShowInfo:true,
			userId:'',
			task:{},
			isCreater:false
    };
  },
	mounted: function () {
		this.userId = this.$refs.taskInfo.userId
		this.task = this.$refs.taskInfo.task
		this.isCreater = (this.userId == this.task.creater)
		//console.log()
	},
  methods: {
		handleSelect(key, keyPath) {
			if(key == 'checkInfo'){
				this.isShowInfo = true
			}
			else{
				this.isShowInfo = false
			}
    }
  }
}
</script>
