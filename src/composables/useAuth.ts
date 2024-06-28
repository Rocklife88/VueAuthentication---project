import { ref } from 'vue';
import jwtDecode from 'jwt-decode';

const token = ref(localStorage.getItem('token'));

const isLoggedIn = ref(false);

if (token.value) {
  const decodedToken: any = jwtDecode(token.value);
  const expirationDate = new Date(decodedToken.exp * 1000);
  if (expirationDate > new Date()) {
    isLoggedIn.value = true;
  } else {
    localStorage.removeItem('token');
  }
}

export function useAuth() {
  return { isLoggedIn };
}
