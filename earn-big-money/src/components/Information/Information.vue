<template>
    <el-container class="all">
        <el-aside class="leftside">
          <div style="overflow:hidden; width:300px; height: 100px; margin-top: 20px;">
            <el-image class="headimage" :src="url"></el-image>
            <div style="margin-top: 25px; text-align: left; width: 190px; height: 50px; float: right; border: 0px solid yellow;">
              <p style="display: inline-block; font-weight: bolder; font-size: 15pt;">稀里糊涂</p>
              <i style="margin-right: 10px; float: right" class="el-icon-setting"></i>
              <p style="margin-top: 3px;">id:123456</p>
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
          <div style="text-align: left; padding: 10px; margin-top: 20px;">
            <p style="display: inline-block; font-weight: bolder; font-size: 15pt;">组织</p>
            <i style="margin-right: 5px; float: right" class="el-icon-plus"></i>
            <hr style="background-color:black; height:1px; opacity: 0.2; border:none;">
            <p style="padding: 2px"><span>中山大学团委</span><span style="float: right">管理员</span></p>
            <p style="padding: 2px"><span>中山大学团委</span><span style="float: right">管理员</span></p>
          </div>
        </el-aside>
        <el-main class="rightside">
          <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 0 auto;">
            <el-tab-pane label="个人信息" name="first">
              <p style="text-align:left; margin: 10px 80px;">昵称：啊啊啊</P><hr style="margin: 0 80px; opacity: 0.2">
              <p style="text-align:left; margin: 10px 80px;">昵称：啊啊啊</P><hr style="margin: 0 80px; opacity: 0.2">
              <p style="text-align:left; margin: 10px 80px;">昵称：啊啊啊</P><hr style="margin: 0 80px; opacity: 0.2">
              <p style="text-align:left; margin: 10px 80px;">昵称：啊啊啊</P><hr style="margin: 0 80px; opacity: 0.2">
              <p style="text-align:left; margin: 10px 80px;">昵称：啊啊啊</P>
            </el-tab-pane>
            <el-tab-pane label="已接收任务" name="second">
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
    </el-container>
</template>

<style>
  .all{
    width: 1000px;
    height: 100%;
    border: 0px solid red;
    margin: 0 auto;
  }

  .leftside{
    height: 100%; 
    background: white;
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
  export default {
    data() {
      return {
        url: './../../../static/head.jpeg',
        activeName: 'first',
        currentDate: 'Sun May 19 2019',
        acceptDuties : 10
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>