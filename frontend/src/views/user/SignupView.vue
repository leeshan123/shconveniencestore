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
          <el-button
            color="#4285F4"
            type="primary"
            @click="dialogVisible = true"
            >중복체크</el-button
          >
          <span class="warning-icon"></span>

          <el-dialog v-model="dialogVisible" title="" width="500">
            <div>
              <span class="warning-icon"></span>
              <div class="">중복된 아이디입니다 다시 입력해 주세요!</div>
              <div>rolem</div>
            </div>
          </el-dialog>
        </div>
        <el-input v-model="input" style="width: 100%" placeholder="비밀번호" />
        <el-input
          v-model="input"
          style="width: 100%"
          placeholder="비밀번호 확인"
        />
        <el-input v-model="input" style="width: 100%" placeholder="이름" />
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
          <el-button color="#4285F4" type="primary" class="w-full"
            >저장</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref(false); // 중복체크 모달창 온/오프 상태

const input = ref('');
</script>

<style scoped>
.warning-icon {
  /* 경고 아이콘 */

  /* position: absolute; */
  width: 91px;
  height: 91px;

  background: url(@/assets/icon/warning.svg);
}
.success-icon {
  /* 경고 아이콘 */

  /* position: absolute; */
  width: 91px;
  height: 91px;

  background: url(@/assets/icon/success.svg);
}
</style>
