<template>
  <div class="login-container">
    <div class="left-side">
      <div class="logo-container">
        <img src="@/assets/bank-logo.png" alt="Bank Logo" class="logo">
      </div>
    </div>
    <div class="right-side">
      <div class="login-box">
        <h2 class="login-title">登录</h2>
        <form class="login-form" @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">用户名</label>
            <input
                type="text"
                id="username"
                v-model="username"
                placeholder="请输入用户名"
                required
            />
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input
                type="password"
                id="password"
                v-model="password"
                placeholder="请输入密码"
                required
            />
          </div>
          <div class="form-group">
            <button type="submit" :class="{ 'loading': isLoading }">
              <span v-if="!isLoading">登录</span>
              <span v-else>登录中...</span>
            </button>
          </div>
          <div class="form-group">
            <a href="#" class="forgot-password">还没有账号？点击进行注册</a>
          </div>
        </form>
        <div class="social-login">
          <p>使用社交账号登录</p>
          <div class="social-icons">
            <a href="#" class="social-icon">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-wechat"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    handleLogin() {
      this.isLoading = true;
      // 在这里添加登录逻辑
      // ...
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.right-side {
  display: none;
}
.login-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

.left-side {
  width: 50%;
  background-image: linear-gradient(to right, #6a11cb, #2575fc);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.logo {
  width: 300px;
  height: 300px;
}

.right-side {
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 400px;
  padding: 40px;
  border-radius: 8px;
}

.login-title {
  text-align: center;
  margin-bottom: 30px;
}

.login-form .form-group {
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #6a11cb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-form button.loading {
  background-color: #2575fc;
  cursor: not-allowed;
}

.login-form .forgot-password {
  display: block;
  text-align: right;
  color: #6a11cb;
  text-decoration: none;
}

.social-login {
  margin-top: 30px;
  text-align: center;
}

.social-login p {
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 0 10px;
  background-color: #6a11cb;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: #2575fc;
}
</style>