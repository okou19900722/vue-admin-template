import { isvalidUsername } from '@/utils/validate.ts'
import { Vue, Component, Watch } from 'vue-property-decorator'
import {ElForm} from "element-ui/types/form";

@Component({})
export default class Login extends Vue {
  loading = false;
  pwdType = 'password';
  redirect = undefined;
  loginForm = {
    username: 'admin',
    password: 'admin'
  };
  loginRules = {
    username: [{
      required: true,
      trigger: 'blur',
      validator(rule, value, callback) {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
    }],
    password: [{
      required: true,
      trigger: 'blur',
      validator(rule, value, callback) {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
      }
    }]
  };

  @Watch('$route', { immediate: true })
  watchRoute(route) {
    this.redirect = route.query && route.query.redirect
  }
  showPwd() {
    if (this.pwdType === 'password') {
      this.pwdType = ''
    } else {
      this.pwdType = 'password'
    }
  }
  handleLogin() {
    (this.$refs.loginForm as ElForm).validate(valid => {
      if (valid) {
        this.loading = true
        this.$store.dispatch('Login', this.loginForm).then(() => {
          this.loading = false
          this.$router.push({ path: this.redirect || '/' })
        }).catch(() => {
          this.loading = false
        })
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
}
