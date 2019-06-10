<template>
    <el-container class="all">
        <el-aside class="leftside">
          <div style="overflow:hidden; width:300px; height: 100px; margin-top: 20px;">
            <div>
              <div class="cover" @click="dialogHeadImageVisible = true">更换头像</div>
              <el-image class="headimage" :src="url"></el-image>
            </div>
            <div style="margin-top: 25px; text-align: left; width: 190px; height: 40px; float: right; border: 0px solid yellow;">
              <p style="display: inline-block; font-weight: bolder; font-size: 15pt;">{{infor.username}}</p>
              <i @click="dialogInforVisible = true" class="el-icon-setting seticon"></i>
              <p style="margin-top: 0px;">ID: {{infor.id}}</p>
            </div>
          </div>
          <div style="margin-top:10px; width:300px; height: 55px;border: 0px solid yellow;">
            <div class="part">
              <div class="number">{{acceptDuties}}</div>
              <span>已接收任务</span>
            </div>
            <div class="part">
              <div class="number">166</div>
              <span>已发布任务</span>
            </div>
            <div class="part">
              <div class="number">16</div>
              <span>已完成任务</span>
            </div>
            <div class="part">
              <div class="number">16</div>
              <span>待完成任务</span>
            </div>
          </div>
          <div style="text-align: left; padding: 10px; margin-top: 20px; border: 1px solid red;">
            <p style="display: inline-block; border: 1px solid red; font-weight: bolder; font-size: 15pt;">组织</p>
            <i style="margin: 5px; border: 1px solid red; float: right" class="el-icon-plus"></i>
            <hr style="background-color:black; height:1px; opacity: 0.4; border:none;">
            <p style="border: 1px solid red; padding: 2px"><span>中山大学团委</span><span style="float: right">管理员</span></p>
            <p style="padding: 2px"><span>中山大学团委</span><span style="float: right">管理员</span></p>
          </div>
        </el-aside>
        <el-main class="rightside">
          <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 0 auto;">
            <el-tab-pane label="个人信息" name="first">
              <p style="text-align:left; margin: 30px 80px 10px 80px;">  昵称  ： {{infor.username}}</P><hr style="margin: 0 80px; opacity: 0.4">
              <p style="text-align:left; margin: 10px 80px;">  ID    ： {{infor.id}}</P><hr style="margin: 0 80px; opacity: 0.4">
              <p style="text-align:left; margin: 10px 80px;">  手机  ： {{infor.phone}}</P><hr style="margin: 0 80px; opacity: 0.4">
              <p style="text-align:left; margin: 10px 80px;">  邮箱  ： {{infor.email}}</P><hr style="margin: 0 80px; opacity: 0.4">
              <p style="text-align:left; margin: 10px 80px;">  身份  ： {{infor.status}}</P><hr style="margin: 0 80px; opacity: 0.4">
              <p style="text-align:left; margin: 10px 80px;">创建时间： {{infor.createTime}}</P>
            </el-tab-pane>
            <el-tab-pane label="已接收任务" name="second">
              <div>
                <el-row>
                  <el-col :span="7" v-for="(o, index) in 6" :key="o" :offset="index % 2 == 0 ? 1 : 1">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 10px 0px;">
                      <img :src="url" class="image">
                      <div style="padding: 14px;">
                        <span>任务标题</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
              <el-pagination style="margin-top: 10px;"
                :page-size="13"
                :pager-count="8"
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="已发布任务" name="third">
              <div>
                <el-row>
                  <el-col :span="7" v-for="(o, index) in 6" :key="o" :offset="index % 2 == 0 ? 1 : 1">
                    <el-card :body-style="{ padding: '0px' }" style="margin: 14px 0px;">
                      <img :src="url" class="image">
                      <div style="padding: 14px;">
                        <span>任务标题</span>
                        <div class="bottom clearfix">
                          <time class="time">{{ currentDate }}</time>
                        </div>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </div>
              <el-pagination style="margin-top: 10px;"
                :page-size="13"
                :pager-count="8"
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-dialog title="修改头像" :visible.sync="dialogHeadImageVisible">
          <v-userPhoto></v-userPhoto>
        </el-dialog>
        <el-dialog title="修改个人信息" :visible.sync="dialogInforVisible">
          <v-auserPhoto></v-auserPhoto>
        </el-dialog>
    </el-container>
</template>

<style scoped>
  .all{
    width: 1000px;
    height: 100%;
    border: 0px solid red;
    margin: 0 auto;
  }

  .leftside{
    height: 100%; 
    background: rgb(178, 190, 194);
    border: 0px solid red;
    position: absolute; 
    width: 300px;
  }

  .rightside{
    margin-left: 300px; 
    border: 0px solid black; 
    width: 700px;
  }

  .headimage{
    margin: 10px 10px;
    width: 80px;
    height: 80px; 
    float: left;
    border: 0px solid black;
  }

  .cover {
    position: absolute;
    margin: 10px;
    width: 80px;
    height: 80px; 
    text-align: center;
    vertical-align: center;
    line-height: 80px;
    opacity: 0;
    background-color: black;
    color: white;
    font-size: 10pt;
    z-index: 10;
  }

  .cover:hover{
    opacity: 0.6;
    cursor: pointer;
  }

  .seticon{
    margin-right: 10px;
    margin-top: 10px; 
    float: right
  }

  .seticon:hover{
    cursor: pointer;
  }

  .part{
    width: 70px;
    height: 55px;
    font-size: 7pt;
    border: 0px solid red;
    text-align: center;
    margin: 5px 0px;
    display: inline-block;
  }

  .number{
    border: 0px solid black;
    font-size: 17pt;
    font-weight: bolder;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
  import userPhoto from './userPhoto.vue'
  import auserPhoto from '../Photo/userPhoto.vue'
  
  export default {
    components: {
      "v-userPhoto":userPhoto,
      "v-auserPhoto":auserPhoto
    },
    beforeCreate() {
      
    },
    mounted: function () {
      this.$http.get('api/users/user/test1').then(function(response){
        this.infor.id = response.data.id;
        this.infor.username = response.data.username;
        this.infor.phone = response.data.phone;
        this.infor.email = response.data.email;
        this.infor.status = response.data.status;
        this.infor.createTime = response.data.createTime;
        console.log(this.id);
      }, function(response){

      });
    },
    data() {
      return {
        infor: {
          "id": "",
          "username": "",
          "phone": "",
          "email": "",
          "status": "",
          "createTime": ""
        },
        url: 'http://localhost:3000/photo/UserPhoto/test1',
        activeName: 'first',
        currentDate: 'Sun May 19 2019',
        acceptDuties : 10,
        uid: null,

        dialogHeadImageVisible: false,
        dialogInforVisible: false,
      };
    },
    created: function() {
      alert(this.$route.query.uid);
      console.log(this.$route.query.uid);
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>