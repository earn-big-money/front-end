<template>
    <div>
        <div id='header'>
            <div id="title">
                EBM-赚闲钱
            </div>
        </div>

        <div class="container">
            <div class="input-container login-container">
                <div class="subtitle">Login</div>
                <form class="form-container">
                    <div class="tips">提示</div>
                    <div class="form-group">
                        <input id="username-input" type="text" v-model="username" class="form-input" placeholder="用户名"/>
                    </div>
                    <div class="form-group">
                        <input id="password-input" type="password" v-model="password"  class="form-input" placeholder="密码"/>

                    </div>
                    <!-- <div class="form-group">
                        <label>下次自动登录</label>
                    </div> -->
                    <div class="form-group">
                        <button class="btn login-btn">登录</button>
                        
                    </div>
                    <div class="form-group">
                        <router-link to="Register" class="btn link-btn">注册</router-link>
                    </div>
                </form>
            </div>
            
        </div>
 
    </div>
</template>

<script>

export default {
    data () {
        return {
            username: '',
            password: '',
        }
    },
};
</script>

<style>
@import "../assets/css/LoginAndRegister.css" 
</style>