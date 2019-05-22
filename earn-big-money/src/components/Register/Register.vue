<template>
    <div class="login_page">
        <el-container>
              <el-header></el-header>

              <el-container class="container">
                    <el-header >
                        <div class="logo">
                            <p>LOGO</p>
                        </div>
                    </el-header>

                    <el-container class="login_container" direction="vertical">
                        <el-form  ref="form"  :model="form" :rules="rules" label-position='right' label-width="80px"> 
                            <el-form-item label="用户名" class="login_form_item" prop="username">
                                <el-input v-model="form.username" placeholder="请输入账用户名称" clearable prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="手机" class="login_form_item" prop="phone">
                                <el-input class="register_form_item" v-model="form.phone" placeholder="请输入手机号码" clearable  prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" class="login_form_item" prop="email">
                                <el-input class="register_form_item" v-model="form.email" placeholder="请输入邮箱" clearable  prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" class="login_form_item" prop="password">
                                <el-input class="register_form_item" v-model="form.password" placeholder="请输入6至20位登录密码" clearable show-password prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" class="login_form_item" prop="checkPass">
                                <el-input class="register_form_item" v-model="form.checkPass" placeholder="请再次输入登录密码" clearable show-password prefix-icon="el-icon-lock"></el-input>
                            </el-form-item>
                            <el-form-item label="身份" prop="status">
                                <el-radio-group v-model="form.status">
                                    <el-radio label="student"></el-radio>
                                    <el-radio label="organization"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            
                        </el-form>
                        <el-checkbox v-model="checked">勾选同意《<el-link type="primary">用户服务协议</el-link>》</el-checkbox>
                        <el-button type="primary" round style="margin: 40px 0"  @click="onSubmit('form')">注册</el-button>
                        <router-link to="Login"><el-button type="text">已有账号, 登陆</el-button></router-link>
                        
                    </el-container>
                    
              </el-container>
              <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>

export default {
    data () {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                 callback();
            } else {
                if (this.form.checkPass !== '') {
                 this.$refs.form.validateField('checkPass');
                }
              callback();
            }
          };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback();
            } else if (value !== this.form.password) {
                 callback(new Error('两次输入密码不一致!'));
            } else {
                 callback();
            }
        };

        return {
            form: {
                username: '',
                password: '',
                checkPass: '',
                email: '',
                phone: '',
                status: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
                    { validator: validatePass, trigger: 'blur' },
                ],
                checkPass: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    { validator: validatePass2, trigger: 'blur'}
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { pattern: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/, message: '邮箱格式不正确', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { pattern: /^[0-9-_]{11}$/, message: '手机号码格式不正确', trigger: 'blur' },
                ],
                status: [
                    { required: true, message: '请输入身份', trigger: 'blur' },
                ],
            },

            checked: true,
            
        }
    },

    methods: {
        onSubmit: function(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var url = "/api/users/create";
                    var type = "post";
                    var data = { username: this.form.username, password: this.form.password, phone: this.form.phone,
                                    email: this.form.email, status: this.form.status};
                    var path = "/RegisterSuccess";

                    this.$http.post(url, data, {emulateJSON: true}).then(function(res){
                            console.log(res);
                            this.$router.push(path);
                        },function(res){
                            console.log('请求失败处理' + res);
                            console.log(res.body)

                        });

                    
                } else {
                    console.log('error submit!!');
                     return false;
                }
            });
        },
    }
};
</script>

<style>
@import "../../assets/css/LoginAndRegister.css" 

</style>