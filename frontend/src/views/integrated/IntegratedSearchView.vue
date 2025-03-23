<template>
    <div class="flex justify-center items-center min-h-screen bg-white">
        <div class="w-[1024px] h-[768px] bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col p-8">
            <!-- 상단 헤더 영역 -->
            <div class="flex items-center mb-6">
                <img src="/images/logo.png" alt="승환 편의점 로고" class="w-24 h-24 mr-6" />
                <div>
                    <h1 class="text-3xl font-semibold mb-2">통합조회</h1>
                    <p class="text-gray-600">승환 편의점 업무 통합 관리 시스템</p>
                </div>
            </div>

            <!-- 버튼 그리드 섹션 -->
            <div class="grid grid-cols-3 gap-4 mt-4">
                <el-button
                    class="h-32 text-lg font-semibold rounded-lg flex flex-col items-center justify-center"
                    color="#4285f4"
                    @click="$router.push('/product-search')"
                >
                    <el-icon class="mb-1 mr-2" :size="24"><Search /></el-icon>
                    상품조회
                </el-button>

                <el-button
                    class="h-32 text-lg font-semibold rounded-lg flex flex-col items-center justify-center"
                    color="#34a853"
                    @click="$router.push('/receipt-search')"
                >
                    <el-icon class="mb-1 mr-2" :size="24"><Document /></el-icon>
                    영수증 조회
                </el-button>

                <el-button
                    class="h-32 text-lg font-semibold rounded-lg flex flex-col items-center justify-center"
                    color="#fbbc05"
                    @click="$router.push('/staff-search')"
                >
                    <el-icon class="mb-1 mr-2" :size="24"><User /></el-icon>
                    스마트 스태프조회/등록
                </el-button>

                <el-button
                    class="h-32 text-lg font-semibold rounded-lg flex flex-col items-center justify-center"
                    color="#ea4335"
                    style="margin-left: 0"
                    @click="$router.push('/report')"
                >
                    <el-icon class="mb-1 mr-2" :size="24"><Warning /></el-icon>
                    신고
                </el-button>

                <el-button
                    class="h-32 text-lg font-semibold rounded-lg flex flex-col items-center justify-center"
                    color="#673ab7"
                    @click="$router.push('/point-search')"
                >
                    <el-icon class="mb-1 mr-2" :size="24"><CreditCard /></el-icon>
                    제휴카드 포인트 조회
                </el-button>

                <el-button
                    class="h-32 text-lg font-semibold rounded-lg flex flex-col items-center justify-center"
                    @click="$router.push('/')"
                >
                    <el-icon class="mb-1 mr-2" :size="24"><Back /></el-icon>
                    메인으로 돌아가기
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search, Document, User, Warning, CreditCard, Back } from '@element-plus/icons-vue';
</script>

<style scoped>
:deep(.el-button) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: var(--shadow-md);
    min-height: 3.5rem;
}

:deep(.el-button--default) {
    background-color: white;
    color: #333;
}

.rounded-lg {
    border-radius: 0.5rem;
}
</style>
