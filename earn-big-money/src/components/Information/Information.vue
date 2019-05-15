<template>
    <el-container>
        <el-aside style="position: absolute; width: 30%;" class="leftside">
            <el-image
                class="headimage"
                :src="url"
                ></el-image>
            <div class="part">
              <span class="number">16</span>
              <span>已接收任务</span>
            </div>
            <div class="part">
              <span class="number">16</span>
              <span>已发布任务</span>
            </div>
            <div class="part">
              <span class="number">16</span>
              <span>已完成任务</span>
            </div>
            <div class="part">
              <span class="number">16</span>
              <span>待完成任务</span>
            </div>
        </el-aside>
        <el-main style="margin-left: 30%; border: 1px solid black; width: 70%;">
          <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 0 auto;">
            <el-tab-pane label="个人信息" name="first">
              <p>昵称：啊啊啊</P><hr style="margin: 0 100px; opacity: 0.2">
              <p>昵称：啊啊啊</P><hr style="margin: 0 100px; opacity: 0.2">
              <p>昵称：啊啊啊</P><hr style="margin: 0 100px; opacity: 0.2">
              <p>昵称：啊啊啊</P><hr style="margin: 0 100px; opacity: 0.2">
              <p>昵称：啊啊啊</P>
            </el-tab-pane>
            <el-tab-pane label="已接收任务" name="second">已接收任务</el-tab-pane>
            <el-tab-pane label="已发布任务" name="third">
              <div>
                <el-row>
                  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                      <img src="head.jpg" class="image">
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
            </el-tab-pane>
          </el-tabs>
        </el-main>
    </el-container>
</template>

<style>
  .leftside{
    height: 100%; 
    background:#409EFF;
    border: 0px solid red;
  }

  .headimage{
    margin: 5px 0px;
    width: 100px;
    height: 100px; 
    border: 0px solid black;
  }

  .part{
    width: 100%;
    border: 0px solid red;
    text-align: left;
  }

  .number{
    font-size: 50pt
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
        url: './../assets/head.jpg',
        activeName: 'first',
        currentDate: new Date()
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>