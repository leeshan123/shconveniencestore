<template>
    <div class="flex justify-center items-center min-h-screen bg-white">
        <div class="w-[1024px] h-[768px] bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col p-8">
            <!-- 상단 헤더 영역 -->
            <div class="flex items-center mb-10">
                <img src="/images/logo.png" alt="승환 편의점 로고" class="w-32 h-32 mr-6" />
                <div>
                    <h1 class="text-3xl font-semibold mb-6">어서오세요 승환 편의점입니다.</h1>
                    <div class="flex gap-4">
                        <div class="bg-[#4285f4]/10 px-6 py-3 rounded-lg">
                            환불: <span class="font-bold text-primary">2</span>건
                        </div>
                        <div class="bg-[#fbbc05]/10 px-6 py-3 rounded-lg">
                            전체 취소: <span class="font-bold text-secondary">5</span>건
                        </div>
                        <div class="bg-[#F19088]/10 px-6 py-3 rounded-lg">
                            등록 취소: <span class="font-bold text-danger">10</span>건
                        </div>
                    </div>
                </div>
            </div>

            <!-- 중간 영역 (통합조회/서비스 버튼과 결제내역) -->
            <div class="flex gap-4 mb-6">
                <!-- 통합조회/서비스 버튼 영역 -->
                <div class="flex-1 flex flex-col gap-4">
                    <el-button
                        class="h-56 text-xl font-semibold rounded-custom"
                        color="#4285f4"
                        @click="navigateTo('/integrated')"
                    >
                        통합조회
                    </el-button>
                    <el-button
                        class="h-56 text-xl font-semibold rounded-custom ml-0"
                        color="#fbbc05"
                        style="margin-left: 0"
                        @click="navigateTo('/service')"
                    >
                        서비스
                    </el-button>
                </div>

                <!-- 직전 결제내역 -->
                <div class="flex-1 card p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-bold text-xl">직전 결제내역</h2>
                        <el-button class="rounded-full" color="#4285f4" @click="printReceipt"> 영수증 출력 </el-button>
                    </div>
                    <ul class="space-y-4">
                        <li class="flex justify-between items-center border-b pb-2">
                            <span class="text-gray-600">총 구매액</span>
                            <span class="font-bold text-xl">11,300원</span>
                        </li>
                        <li class="flex justify-between items-center border-b pb-2">
                            <span class="text-gray-600">결제한 금액</span>
                            <span class="font-bold text-xl">11,300원</span>
                        </li>
                        <li class="flex justify-between items-center">
                            <span class="text-gray-600">거스름돈</span>
                            <span class="font-bold text-xl">0원</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- 하단 영역 (금고보관, 대기, 환불) -->
            <div class="grid grid-cols-3 gap-8 h-[160px]">
                <div class="bg-gray-100 rounded-lg flex flex-col items-center justify-center">
                    <p class="text-lg mb-2">금고 보관</p>
                    <p class="action_safe-amount text-[#F92F27] font-bold text-4xl">165,500</p>
                </div>
                <el-button class="h-32 text-2xl font-semibold rounded-custom" @click="navigateTo('/waiting')">
                    대기
                </el-button>
                <el-button class="h-32 text-2xl font-semibold rounded-custom" @click="navigateTo('/refund')">
                    환불
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Printer } from '@element-plus/icons-vue';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
};

const printReceipt = () => {
    console.log('영수증 출력');
};
</script>

<style scoped>
:deep(.el-button) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: var(--shadow-md);
    height: 3.5rem;
    min-height: 3.5rem;
}

:deep(.el-button--default) {
    background-color: white;
    color: #333;
}
</style>
