<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1 class="title">会員登録</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="userName"
            prepend-icon="mdi-account-circle"
            label="ユーザー名"
          />
          <v-text-field
            v-model="email"
            prepend-icon="mdi-email-outline"
            label="メールアドレス"
          />
          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
          <v-btn
            class="info"
            @click="signUp"
          >
            登録する
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      errorMessage: '',
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters(['getData', 'isLogin']),
  },
  methods: {
    ...mapActions(['setUser']),
    signUp() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('会員登録せいこう！');
          console.log(userCredential);
          updateProfile(auth.currentUser, {
            displayName: this.userName,
          })
            .then(() => {
              console.log('Profile updated!');
              console.log(auth.currentUser);
              this.setUser({
                uid: auth.currentUser.uid,
                email: auth.currentUser.email,
              });
              this.$router.push('/');
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log('error');
          const errorCode = error.code;
          this.errorMessage = error.message;
          console.log(errorCode);
        });
    },
  },
};
</script>
<style scoped>
.v-application .v-messages__message {
  color: red;
  font-weight: bold;
}
</style>
