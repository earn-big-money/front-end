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
			<el-menu-item index="checkContent">任务内容</el-menu-item>
		</el-menu>
		<el-row>
		  <el-col :span="12":offset="6" >
				<v-TaskBasicInfo :initPage="initPage" v-show="cleckStatus=='checkInfo' " ref='TaskBasicInfo'></v-TaskBasicInfo>
				<v-TaskContent v-show="cleckStatus=='checkContent' " ref='TaskContent'></v-TaskContent>
			</el-col>
			<el-col :span="6">
				<v-TaskPaticipantInfo :taskId="duty.id"
					:doneUsers="doneUsers"
					:unDoneUsers="unDoneUsers"
					:initPage="initPage"
					ref='TaskPaticipantInfo'
					v-if="userId==duty.sponsor">
				</v-TaskPaticipantInfo>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import TaskBasicInfo from './TaskBasicInfo.vue'
	import TaskPaticipantInfo from './TaskPaticipantInfo.vue'
	import TaskContent from './TaskContent.vue'
	export default {
	components: {
		"v-TaskBasicInfo":TaskBasicInfo,
		"v-TaskPaticipantInfo":TaskPaticipantInfo,
		"v-TaskContent":TaskContent
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
		if(!this.$route.params.dutyid){
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

			//有用户登陆
			if(this.$cookies.get('id') ){
				this.userId = this.$cookies.get('id')
				if(this.userId == this.duty.sponsor){
					this.$refs.TaskBasicInfo.userStatus = '发布者'
				}
				else{
					this.$refs.TaskBasicInfo.userStatus  = '未参加'
				}
			}
			else{
				this.$refs.TaskBasicInfo.userStatus  = '无'
			}

			this.$http.get('/api/duties/duty/'+this.$route.params.dutyid).then(function(response){
				this.duty = response.body
				var task =  {
					id: this.dutyid,
					taskName:this.duty.title,
					taskType:this.duty.type,
					creater:this.duty.sponsor,
					startTime:this.duty.startTime,
					endTime:this.duty.endTime,
					taskContent:this.duty.content,
					paticipantNum:this.duty.maxAccepters-this.duty.curAccepters,
					taskWage:this.duty.money
				}
				this.$refs.TaskBasicInfo.task = task
				this.$refs.TaskContent.task = task

				var isUserParticipate = false

				for( let taskAccepter of this.duty.accepters){
					if(taskAccepter.status=='accepted'){
						this.unDoneUsers.push(taskAccepter.uid)
						if(taskAccepter.uid == this.userId ){
							this.$refs.TaskBasicInfo.userStatus  = '已参加'
						}
					}
					else if(taskAccepter.status=='finish'){
						this.doneUsers.push(taskAccepter.uid)
						if(taskAccepter.uid == this.userId ){
							this.$refs.TaskBasicInfo.userStatus  = '已完成'
						}
					}

				}

			}, function(response){
				console.log(response.body)
				alert('error')
			});
		}
	}
}
</script>
