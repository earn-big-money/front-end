<template>
    <div>
        <div id='header'>
            <div id="title">
                EBM-赚闲钱
            </div>
        </div>

        <div class="container">
            <div class="input-container register-container">
                <div class="subtitle">Register</div>
                <form class="form-container">
                    <div class="form-group">
                        <label for="username_input">用户名</label>
                        <input id="username-input" type="text" v-model="username" class="form-input" placeholder="用户名"/>
                    </div>
                    <div class="form-group">
                        <label for="password-input">密码</label>
                        <input id="password-input" type="password" v-model="password"  class="form-input" placeholder="密码"/>

                    </div>

                    <div class="form-group">
                        <label for="password-confirm">再次输入密码</label>
                        <input id="password-confirm" type="password" v-model="password_confirm"  class="form-input" placeholder="再次输入密码"/>

                    </div>
                    <div class="form-group">
                        <button class="btn login-btn">注册</button>
                        
                    </div>
                    <div class="form-group">
                        <router-link to="Login" class="btn link-btn">返回</router-link>
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
            password_confirm: '',
        }
    },
};
</script>

<style>

@import "../assets/css/LoginAndRegister.css" 

</style>