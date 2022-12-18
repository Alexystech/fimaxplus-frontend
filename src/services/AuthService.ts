import {Ref, ref} from 'vue';

class AuthService {
  private jwt: Ref<string>
  private error: Ref<string>

  constructor() {
    this.jwt = ref('');
    this.error = ref('');
  }

  getJwt() {
    return this.jwt
  }

  getError() {
    return this.error
  }

  async login(userName: string, password: string) {
    // eslint-disable-next-line no-empty
    try {
    } catch (error) {
      this.error.value = "login falied";
      return false
    }
  }

}
