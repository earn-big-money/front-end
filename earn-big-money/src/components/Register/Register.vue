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
                        <el-form> 
                            <el-form-item label="" class="login_form_item">
                                <el-input v-model="username" placeholder="请输入账用户名称" clearable prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-input style="height: 50px" v-model="password" placeholder="请输入手机号码" clearable  prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-input style="height: 50px" v-model="password" placeholder="请输入短信验证码" clearable  prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-input style="height: 50px" v-model="password" placeholder="请输入6至20位登录密码" clearable ></el-input>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-input style="height: 50px" v-model="password" placeholder="请再次输入登录密码" clearable show-password prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-input style="height: 50px" v-model="password" placeholder="请输入登录密码" clearable show-password prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-checkbox v-model="checked">勾选同意《<el-link type="primary">用户服务协议</el-link>》</el-checkbox>
                            </el-form-item>
                            <el-form-item label="" class="login_form_item">
                                <el-button type="primary" round>登录</el-button>
                            </el-form-item>

                            <el-link type="primary">已有账号, 登陆</el-link>
                        </el-form>

                        
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