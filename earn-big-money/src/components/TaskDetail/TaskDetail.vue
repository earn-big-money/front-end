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
		  <el-col :span="12":offset="6" >
				<v-taskInfo :initPage="initPage" v-show="cleckStatus=='checkInfo' " ref='taskInfo'></v-taskInfo>
			</el-col>
			<el-col :span="6">
				<v-taskPaticipantInfo :taskId="duty.id"
					:doneUsers="doneUsers"
					:unDoneUsers="unDoneUsers"
					:initPage="initPage"
					ref='taskPaticipantInfo'
					v-show="userId==duty.sponsor">
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
			duty:{},
			userIsCreater:false,
			unDoneUsers: [],
			doneUsers: []
    };
  },
	mounted: function () {
		if(!this.$route.params.duty){
			this.$router.push({path:'/'});
		}
		this.initPage()
	},

  methods: {
		handleSelect(key, keyPath) {
			this.cleckStatus = key
    },

		initPage(){
			this.unDoneUsers=[]
			this.doneUsers=[]

			if(this.$cookies.get('id') ){
				this.userId = this.$cookies.get('id')
			}
			this.$http.get('/api/duties/duty/'+this.$route.params.duty.did).then(function(response){
				this.duty = response.body
				this.$refs.taskInfo.task = {
					id: this.duty.id,
					taskName:this.duty.title,
					taskType:this.duty.type,
					creater:this.duty.sponsor,
					startTime:this.duty.startTime,
					endTime:this.duty.endTime,
					taskContent:this.duty.conotent,
					paticipantNum:this.duty.maxAccepters-this.duty.curAccepters,
					taskWage:this.duty.money
				}

				var isUserParticipate = false

				for( let taskAccepter of this.duty.accepters){
					if(taskAccepter.status=='accepted'){
						this.unDoneUsers.push(taskAccepter.uid)
					}
					else if(taskAccepter.status=='finish'){
						this.doneUsers.push(taskAccepter.uid)
					}

					if(taskAccepter.uid == this.userId ){
						isUserParticipate = true
					}
				}
				//有用户登陆
				if(this.$cookies.get('id') ){
					if(this.userId == this.duty.sponsor){
						this.$refs.taskInfo.userStatus = '发布者'
					}
					else if(isUserParticipate){
						this.$refs.taskInfo.userStatus  = '已参加'
					}
					else{
						this.$refs.taskInfo.userStatus  = '未参加'
					}
				}
				else{
					this.$refs.taskInfo.userStatus  = '无'
				}

			}, function(response){
				console.log(response.body)
				alert('error')
			});
		}
	}
}
</script>
