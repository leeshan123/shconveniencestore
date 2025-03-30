import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  // State
  const userInfo = ref(null);
  const token = ref(localStorage.getItem('accessToken') || ''); // 로컬 스토리지에서 초기 토큰 로드
  const isLoggedIn = ref(!!token.value); // !! 값을 불리언값으로 변환하는 꼼수 Boolean(값)과 동일

  // Actions
  async function login(credentials) {
    const { id, pw, isSaveLocal } = credentials; // saveSession 값 분해 (없으면 undefined)
    try {
      // --- API 호출 로직 ---
      const response = await axios.post('/api/auth/login', { id, pw });
      // -------------------

      // API 성공 시 상태 업데이트 및 토큰 저장
      const { user, accessToken } = response.data;
      userInfo.value = user;
      token.value = accessToken;
      isLoggedIn.value = true;
      if (isSaveLocal) localStorage.setItem('accessToken', accessToken); // 토큰 저장

      return true; // 성공 여부 반환
    } catch (error) {
      console.error('Login failed:', error);
      // 실패 시 상태 초기화 (선택적)
      logout();
      throw error; // 에러를 다시 던져 컴포넌트에서 처리할 수 있도록 함
    }
  }

  function logout() {
    userInfo.value = null;
    token.value = '';
    isLoggedIn.value = false;
    localStorage.removeItem('accessToken'); // 토큰 제거
  }

  // 앱 로드 시 토큰 유효성 검사 및 사용자 정보 로드 (선택적)
  async function checkAuth() {
    if (token.value) {
      try {
        // 토큰 유효성 검증 및 사용자 정보 가져오는 API 호출
        // const response = await axios.get('/api/users/me', { headers: { Authorization: `Bearer ${token.value}` } });
        // userInfo.value = response.data;
        // isLoggedIn.value = true;
        console.log('User is authenticated');
      } catch (error) {
        console.error('Token validation failed:', error);
        logout(); // 유효하지 않으면 로그아웃 처리
      }
    }
  }

  return { userInfo, token, isLoggedIn, login, logout, checkAuth };
});
