<template>
	<div style="margin: 15px 15px;height:800px;" >

		<el-collapse>
			<el-collapse-item title="完成活动的用户" name="1" >
				<div style="text-align:center" v-for="user in doneUsers":key="user">
					{{user}}
				</div>
			</el-collapse-item>
			<el-collapse-item title="未完成活动的用户" name="2">
				<el-checkbox-group v-model="newDoneUser" v-for="user in unDoneUsers":key="user" >
					<el-checkbox  :label="user" >
						{{user}}
					</el-checkbox>
				</el-checkbox-group>
				<el-button type="primary" @click="submitNewDoneUser" >
					提交新的活动完成用户
				</el-button>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>

  export default {
		props:['taskId','unDoneUsers','doneUsers','initPage'],
    data() {
      return {
        newDoneUser:[],
      };
    },

    methods: {
			submitNewDoneUser(){
				if(this.unDoneUsers.length != 0){
					var confirmForm = {did:this.taskId, accepter:this.newDoneUser}
					this.$http.post('/api/duties/confirm',confirmForm).then(function(response){
						alert('提交成功')
						/*
						this.doneUsers = this.doneUsers.concat(this.newdoneUser)
						for(let user of this.newdoneUser){
							var deleteIndex = 0
							for(deleteIndex = 0; deleteIndex < this.unDoneUsers; deleteIndex++ ){
								if( this.unDoneUsers[deleteIndex] == user){
									break
								}
							}
							this.unDoneUsers.splice(deleteIndex, 1)
						}*/
						this.initPage()
					}, function(response){
						alert(response.body)
					});
				}
			}
    }
  };

</script>
