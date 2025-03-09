<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-[1024px] h-[768px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col p-8">
            <!-- 상단 영역(환불, 전체취소, 환불취소) -->
            <header class="flex items-start gap-18 mb-12">
                <div class="w-30 h-30">
                    <img src="/images/logo.png" alt="승환 편의점 로고" class="w-full h-full object-contain" />
                </div>
                <div class="flex-1">
                    <h1 class="text-3xl font-semibold mb-6">
                        어서오세요 <strong class="store_name text-[#4285f4]">승환</strong> 편의점입니다.
                    </h1>
                    <ul class="flex gap-6">
                        <li class="bg-[#4285f4]/10 px-6 py-3 rounded-lg">
                            환불: <span class="action_refund font-bold text-[#4285f4]">2</span>건
                        </li>
                        <li class="bg-[#fbbc05]/10 px-6 py-3 rounded-lg">
                            전체 취소: <span class="action_cancel_all font-bold text-[#fbbc05]">5</span>건
                        </li>
                        <li class="bg-[#F19088]/10 px-6 py-3 rounded-lg">
                            등록 취소: <span class="action_cancel_reg font-bold text-[#F92F27]">10</span>건
                        </li>
                    </ul>
                </div>
            </header>
            <!-- 중간 영역-->
            <!-- 통합조회, 서비스 -->
            <section class="flex-1 flex flex-col gap-6">
                <div class="flex gap-8 h-[280px]">
                    <div class="flex flex-col gap-4 w-1/2">
                        <a
                            href="#"
                            class="flex-1 text-center text-white bg-[#4285f4] rounded-lg font-semibold text-3xl flex items-center justify-center"
                            aria-label="통합조회 페이지로 이동"
                            >통합조회</a
                        >
                        <a
                            href="#"
                            class="flex-1 text-center text-black bg-[#fbbc05] rounded-lg font-semibold text-3xl flex items-center justify-center"
                            aria-label="서비스 페이지로 이동"
                            >서비스</a
                        >
                    </div>
                    <!-- 직전 결제내역 -->
                    <div class="w-1/2 bg-gray-50 rounded-lg p-6 flex flex-col">
                        <div class="flex justify-between items-center mb-4">
                            <h2 class="font-bold text-2xl">직전 결제내역</h2>
                            <button
                                class="text-white bg-[#4285f4] px-6 py-3 rounded-lg text-base"
                                type="button"
                                aria-label="영수증 출력"
                            >
                                영수증 출력
                            </button>
                        </div>
                        <ul class="flex-1 flex flex-col justify-around">
                            <li class="flex justify-between items-center border-b border-gray-200 py-2">
                                <span class="text-gray-600 text-lg">총 구매액</span>
                                <span class="action_total-amount font-bold text-2xl">11,300원</span>
                            </li>
                            <li class="flex justify-between items-center border-b border-gray-200 py-2">
                                <span class="text-gray-600 text-lg">결제한 금액</span>
                                <span class="action_paid-amount font-bold text-2xl">11,300원</span>
                            </li>
                            <li class="flex justify-between items-center py-2">
                                <span class="text-gray-600 text-lg">거스름돈</span>
                                <span class="action_change-amount font-bold text-2xl">0원</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 하단 영역 (금고보관, 대기, 환불) -->
                <div class="grid grid-cols-3 gap-8 h-[160px]">
                    <div class="bg-gray-50 rounded-lg flex flex-col items-center justify-center">
                        <p class="text-lg mb-2">금고 보관</p>
                        <p class="action_safe-amount text-[#F92F27] font-bold text-4xl">165,500</p>
                    </div>
                    <a
                        href="#"
                        class="bg-gray-50 rounded-lg flex items-center justify-center font-bold text-3xl text-gray-700"
                        aria-label="대기 페이지로 이동"
                        >대기</a
                    >
                    <a
                        href="#"
                        class="bg-gray-50 rounded-lg flex items-center justify-center font-bold text-3xl text-gray-700"
                        aria-label="환불 페이지로 이동"
                        >환불</a
                    >
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css');
@import 'tailwindcss';
@tailwind utilities;

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(44, 44, 44, 0.1), 0 4px 6px -2px rgba(50, 50, 50, 0.05);
}

.rounded-lg {
    border-radius: 1.5rem;
}
</style>
