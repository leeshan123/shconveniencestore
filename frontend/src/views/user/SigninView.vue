<template>
  <div class="flex justify-center py-20">
    <div class="flex flex-col items-center">
      <div class="mb-10">
        <img width="130px" src="@/assets/icon/logo.svg" alt="승환편의점로고" />
      </div>
      <div class="flex flex-col items-center">
        <el-input
          v-model="idInput"
          style="width: 240px"
          placeholder="아이디"
          autofocus
          class="mb-3"
        />
        <el-input
          v-model="pwInput"
          style="width: 240px"
          placeholder="비밀번호"
          :show-password="true"
          class="mb-6"
        />
        <div class="flex items-center justify-between w-full mb-8">
          <el-checkbox
            v-model="isSaveLocal"
            label="로그인 상태 유지"
            size="large"
          />
          <el-button color="#4285F4" type="primary" @click="login()"
            >로그인</el-button
          >
        </div>
        <div>
          <ul class="flex gap-1 text-gray-500">
            <li><RouterLink to="/signup">회원가입 /</RouterLink></li>
            <li><RouterLink to="/find-id">아이디찾기 /</RouterLink></li>
            <li><RouterLink to="/find-pw">비밀번호 찾기</RouterLink></li>
          </ul>
        </div>
      </div>
      <el-divider>
        <span class="text-gray-400">간편 로그인</span>
      </el-divider>
      <div class="flex gap-3">
        <div>
          <a href="/oauth2/authorization/naver" class="icon-naver">
            <img
              src="@/assets/icon/user/naver_btnW_아이콘사각.png"
              alt="네이버 로그인 버튼"
              width="50px"
            />
          </a>
        </div>
        <div>
          <a href="/oauth2/authorization/google" class="icon-google">
            <img
              src="@/assets/icon/user/google_web_neutral_sq_na@2x.png"
              alt="구글 로그인 버튼"
              width="50px"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'; // 라우팅 필요 시
const idInput = ref('admin');
const pwInput = ref('1234');
const isSaveLocal = ref(true);

const store = useUserStore();
const router = useRouter(); // 라우팅 필요 시

const login = async () => {
  try {
    const isSuccess = await store.login({
      id: idInput.value,
      pw: pwInput.value,
      isSaveLocal: isSaveLocal.value,
    });
    if (isSuccess) {
      console.log('Login successful!');
      // 예: 로그인 성공 후 대시보드로 이동
      router.push('/');
    }
  } catch (error: any) {
    // store.login에서 throw된 에러를 여기서 잡음
    console.error('Login failed in component:', error);
    if (error.status === 404) return alert('axios 잘못된 api요청');
    // 사용자에게 에러 메시지 표시 (API 응답 메시지 활용 권장)
    alert(
      error.response?.data?.message ||
        '로그인에 실패했습니다. 아이디 또는 비밀번호를 확인해주세요.'
    );
  }
};
</script>

<style scoped>
/* 체크된 상태의 체크박스 색상 변경 */
::v-deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #4285f4; /* 체크된 상태의 배경색 */
}

/* 체크된 상태의 라벨 색상 */
::v-deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
  color: #4285f4; /* 체크되었을 때 라벨 색상 변경 */
}
.icon-naver,
.icon-google {
  /* hover { */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px; */
  /* border-radius: 4px; */
  /* } */
}
</style>
