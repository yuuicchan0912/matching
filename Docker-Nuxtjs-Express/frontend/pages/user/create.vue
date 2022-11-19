<template>
  <v-app>
    <v-card>
      <v-card-title>
        <h1 class="title">会員登録</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <validation-observer v-slot="observerProps">
            <validation-provider name="ユーザー名" rules="required">
              <div slot-scope="providerProps">
                <v-text-field
                  v-model="userName"
                  prepend-icon="mdi-account-circle"
                  label="ユーザー名"
                />
                <v-messages :value="providerProps.errors" color="red" />
              </div>
            </validation-provider>
            <validation-provider name="メールアドレス" rules="required|email">
              <div slot-scope="providerProps">
                <v-text-field
                  v-model="email"
                  prepend-icon="mdi-email-outline"
                  label="メールアドレス"
                />
                <v-messages :value="providerProps.errors" color="red" />
              </div>
            </validation-provider>
            <validation-provider name="パスワード" rules="required">
              <div slot-scope="providerProps">
                <v-text-field
                  v-model="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  label="パスワード"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                />
                <v-messages :value="providerProps.errors" color="red" />
              </div>
            </validation-provider>
            <validation-provider name="画像ファイル" rules="required">
              <div slot-scope="providerProps">
                <v-file-input
                  v-model="file"
                  accept="image/png, image/jpeg"
                  append-icon="mdi-file"
                  placeholder="ファイルをアップロード"
                />
                <v-messages :value="providerProps.errors" color="red" />
              </div>
            </validation-provider>
            <v-card-actions>
              <v-btn
                class="info"
                :disabled="observerProps.invalid || !observerProps.validated"
                @click="signUp"
              >
                登録する
              </v-btn>
            </v-card-actions>
          </validation-observer>
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
