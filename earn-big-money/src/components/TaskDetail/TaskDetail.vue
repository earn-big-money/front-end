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
		</el-menu>
		<el-row>

		  <el-col :span="12":offset="6">
				<v-taskInfo v-show="cleckStatus=='checkInfo' " ref='taskInfo'></v-taskInfo>
			</el-col>
			<el-col :span="6">
				<v-taskPaticipantInfo ref='taskPaticipantInfo' v-show='userIsCreater'>
				</v-taskPaticipantInfo>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import taskInfo from './taskInfo.vue'
	import taskPaticipantInfo from './taskPaticipantInfo.vue'
	export default {
	components: {
		"v-taskInfo":taskInfo,
		"v-taskPaticipantInfo":taskPaticipantInfo,
	},
  data() {
    return {
			cleckStatus:'checkInfo',
			userId:'',
			task:{},
			userIsCreater:false,
			unDoneUsers: [],
			doneUsers: []
    };
  },
	mounted: function () {
		if(!this.$route.params.duty){
			this.$router.push({path:'/'});
		}
		else{
			this.userId = this.$refs.taskInfo.userId
			this.task = this.$refs.taskInfo.task
			this.userIsCreater = (this.userId == this.task.creater)
			this.unDoneUsers = this.$refs.taskInfo.unDoneUsers
			this.doneUsers = this.$refs.taskInfo.doneUsers
			if(this.userIsCreater){
				this.$refs.taskPaticipantInfo.unDoneUsers = this.unDoneUsers
				this.$refs.taskPaticipantInfo.doneUsers = this.doneUsers

			}
		}
	},

  methods: {
		handleSelect(key, keyPath) {
			this.cleckStatus = key
    }
  }
}
</script>
