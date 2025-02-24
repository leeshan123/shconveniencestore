<template>
  <div class="flex justify-center py-20">
    <div class="flex flex-col items-center">
      <div class="mb-4 flex flex-col items-center">
        <img width="130px" src="@/assets/icon/logo.svg" alt="승환편의점로고" />
        <span class="font-bold text-2xl">회원가입</span>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div>
          <el-input
            v-model="input"
            style="width: 240px"
            placeholder="아이디"
            class="mr-2"
          />
          <el-button color="#4285F4" type="primary">중복체크</el-button>
      </div>
          <el-input
            v-model="input"
            style="width: 100%"
            placeholder="비밀번호"
          />
          <el-input
            v-model="input"
            style="width: 100%"
            placeholder="비밀번호 확인"
          />
          <el-input
            v-model="input"
            style="width: 100%"
            placeholder="이름"
          />
          <div>
          <el-input
            v-model="input"
            style="width: 240px"
            placeholder="전화번호"
            class="mr-2"
          />
          <el-button color="#4285F4" type="primary">중복체크</el-button>
      </div>
      <div>
          <el-input
            v-model="input"
            style="width: 240px"
            placeholder="이메일"
            class="mr-2"
          />
          <el-button color="#4285F4" type="primary">중복체크</el-button>
      </div>
        <div class="flex w-full">
          <el-button color="" type="info" plane class="w-full">취소</el-button>
          <el-button color="#4285F4" type="primary" class="w-full">저장</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
</script>

<style scoped></style>
