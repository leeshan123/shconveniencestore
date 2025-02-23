<template>
  <div>
    <div>
      <div>로고</div>
      <div>
        <div>아이디 입력폼</div>
        <div>비밀번호 입력폼</div>
        <div>
          <div>체크박스</div>
          <div>아이디저장</div>
          <div>로그인 버튼</div>
        </div>
        <div>
          <ul>
            <li>회원가입</li>
            <li>아아디찾기</li>
            <li>비밀번호 찾기</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" />
      체크박스 선택
    </label>
    <p>체크 상태: {{ isChecked }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isChecked = ref(false); // 기본값 false
</script>

<style scoped></style>
