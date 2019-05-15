<template>
    <div class="login_page">
        <el-container>
              <el-header>Header</el-header>

              <el-container class="container">
                    <el-header >
                        <div class="logo">
                            <p>LOGO</p>
                        </div>
                    </el-header>

                    <el-container class="login_container" direction="vertical">
                        <el-tabs :stretch = true class="login_tabs" v-model="tabs.activeName"><!-- v-model="activeName" @tab-click="handleClick" -->
                            <el-tab-pane name="first">
                                <span slot="label" class="tabs_label_onclick">账号登陆</span>
                                <el-form> 
                                    <el-form-item label="" class="login_form_item">
                                        <el-input v-model="username" placeholder="请输入账户/手机/邮箱" clearable prefix-icon="el-icon-user-solid"></el-input>
                                    </el-form-item>
                                    <el-form-item label="" class="login_form_item">
                                        <el-input style="height: 50px" v-model="password" placeholder="请输入登录密码" clearable show-password prefix-icon="el-icon-lock"></el-input>
                                    </el-form-item>
                                    <el-form-item class="login_form_item">
                                        <el-button type="primary" round>登录</el-button>
                                  </el-form-item>
                                </el-form>
                            </el-tab-pane>

                            <el-tab-pane name="second">
                                <span slot="label" class="tabs_label_onclick">短信登陆</span>
                                <el-form> 
                                    <el-form-item label="" class="login_form_item">
                                        <el-input model="" placeholder="请输入手机号码" clearable prefix-icon="el-icon-lock"></el-input>
                                    </el-form-item>
                                    <el-form-item label="" class="login_form_item">
                                        <el-input model="" placeholder="请输入短信验证码" clearable prefix-icon="el-icon-lock"></el-input>
                                    </el-form-item>
                                    <el-form-item class="login_form_item">
                                        <el-button type="primary" round>登录</el-button>
                                  </el-form-item>
                                </el-form>
                            </el-tab-pane>
                        </el-tabs>

                        <el-row class="login_option" type="flex" justify="space-around">
                            <el-col :span="20">
                                <el-checkbox v-model="checked">记住登录状态</el-checkbox>
                            </el-col>
                            <el-col :span="10">
                                <el-link type="primary">注册新用户</el-link>
                            </el-col>
                            <el-col :span="10">
                                <el-link type="primary">忘记密码</el-link>
                            </el-col>
                        </el-row>
                        <el-row class="other_login_way" type="flex" justify="space-around">
                            <el-col :span="10">
                            </el-col>
                            <el-col :span="10">
                            </el-col>
                            <el-col :span="10">
                            </el-col>
                        </el-row>
                    </el-container>
                    
              </el-container>
              <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>

export default {
    data () {
        return {
            tabs: {
                activeName: 'first'
            },
            username: '',
            password: '',
            bool: true,
            checked: false,
        }
    },
};
</script>

<style>
@import "../../assets/css/LoginAndRegister.css" 

</style>