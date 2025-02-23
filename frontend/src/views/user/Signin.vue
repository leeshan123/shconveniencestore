<template>
  <div class="flex justify-center py-20">
    <div class="flex flex-col items-center">
      <div class="mb-10">
        <img width="130px" src="@/assets/icon/logo.svg" alt="승환편의점로고" />
      </div>
      <div class="flex flex-col items-center">
        <el-input
          v-model="input"
          style="width: 240px"
          placeholder="아이디"
          class="mb-3"
        />
        <el-input
          v-model="input"
          style="width: 240px"
          placeholder="비밀번호"
          class="mb-6"
        />
        <div class="flex items-center justify-between w-full mb-8">
          <el-checkbox v-model="checked1" label="아이디 저장" size="large" />
          <el-button color="#4285F4" type="primary">로그인</el-button>
        </div>
        <div>
          <ul class="flex gap-1">
            <li>회원가입 /</li>
            <li>아이디찾기 /</li>
            <li>비밀번호 찾기</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');

const checked1 = ref(true);
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
</style>
