<template>
  <div>
    <the-main />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/user'; // user 스토어 임포트
// import router from '@/router'; // 라우터 임포트 필요
import TheMain from './layout/TheMain.vue';

const userStore = useUserStore(); // 유저 스토어 인스턴스 생성

// Storage 이벤트 핸들러
// 여러개의 탭 사용중 특정 탭에서 로그아웃을 시도해서 토큰이 제거되었을시 스토리지변화를 감지하고 다른탭에서 강제 로그아웃처리를 보장한다
// 탭 간 로그아웃 상태 동기화는 일관된 사용자 경험을 위한 Best Practice
const handleStorageChange = (event: StorageEvent) => {
  console.log('이벤트발생', event);
  console.log('이벤트발생', event.url);

  // accessToken 키가 변경되었고, 새 값이 없는 경우 (삭제된 경우)
  if (event.key === 'accessToken' && !event.newValue) {
    console.log('Token removed in another tab. Logging out this tab.');
    // 현재 탭의 스토어에서 로그아웃 처리
    // 이미 로그아웃 상태면 중복 호출될 수 있으나, logout 함수가 멱등성을 가지면 괜찮음
    userStore.logout();
    // 선택적으로 로그인 페이지로 리다이렉션
    // router.push('/');
  }
};

// 컴포넌트가 마운트될 때 checkAuth 함수 호출
onMounted(() => {
  userStore.checkAuth();
  // storage 이벤트 리스너 등록
  window.addEventListener('storage', handleStorageChange);
});

// 컴포넌트 언마운트 시 리스너 제거 (메모리 누수 방지)
onUnmounted(() => {
  window.removeEventListener('storage', handleStorageChange);
});
</script>

<style scoped></style>
