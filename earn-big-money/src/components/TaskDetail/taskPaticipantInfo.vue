<template>
	<div style="margin: 15px 15px;height:800px;" >

		<el-collapse>
			<el-collapse-item title="完成活动的用户" name="1" >
				<div>todo</div>
			</el-collapse-item>
			<el-collapse-item title="未完成活动的用户" name="2">
				<el-checkbox-group v-model="chekcUndoneUser" v-for="user in unDoneUsers" >
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
    data() {
      return {
        chekcUndoneUser:[],
        unDoneUsers: [],
				doneUsers:[],

      };
    },
    methods: {
			submitNewDoneUser(){
				if(unDoneUsers.length != 0){
					alert('后端接口尚未完善!')
				}
			}
    }
  };

</script>
