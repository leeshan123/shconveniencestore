<template>
    <!-- 추후 스타일 수정 예정-->
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-full max-w-screen-xl bg-white p-6 shadow-lg rounded-lg min-h-[85vh]">
            <!-- 상단 영역 -->
            <header class="flex justify-between items-center px-6 sm:px-12 py-3">
                <div class="w-16 h-16 flex items-center">
                    <img src="/images/logo.png" alt="편의점 로고" class="w-full h-full object-contain" />
                </div>
                <div class="flex flex-col gap-1">
                    <h1 class="text-lg font-bold">
                        어서오세요 <strong class="store_name text-blue-600">승환</strong> 편의점입니다.
                    </h1>
                    <ul class="flex gap-2 text-sm">
                        <li class="bg-gray-200 px-3 py-1 rounded-md">
                            환불: <span class="action_refund font-bold text-blue-500">2</span>건
                        </li>
                        <li class="bg-yellow-200 px-3 py-1 rounded-md">
                            전체 취소: <span class="action_cancel_all font-bold text-yellow-600">5</span>건
                        </li>
                        <li class="bg-red-200 px-3 py-1 rounded-md">
                            등록 취소: <span class="action_cancel_reg font-bold text-red-500">10</span>건
                        </li>
                    </ul>
                </div>
            </header>

            <!-- 메인 콘텐츠 -->
            <section class="section-home flex flex-col flex-grow justify-center px-6 sm:px-12">
                <!-- 버튼 + 직전 결제 내역을 가로 배치 -->
                <article class="flex justify-between items-center gap-4 mt-2">
                    <!-- 버튼 그룹 -->
                    <div class="flex flex-col gap-2 w-1/2">
                        <a
                            href="#"
                            class="text-center text-white bg-blue-600 py-4 rounded-lg font-bold text-lg shadow-md flex items-center justify-center h-auto"
                            >통합조회</a
                        >
                        <a
                            href="#"
                            class="text-center text-black bg-yellow-400 py-4 rounded-lg font-bold text-lg shadow-md flex items-center justify-center h-auto"
                            >서비스</a
                        >
                    </div>

                    <!-- 직전 결제 내역 -->
                    <article class="bg-gray-100 p-4 rounded-lg w-1/2 flex flex-col justify-between">
                        <div class="flex justify-between items-center">
                            <h2 class="font-bold text-lg">직전 결제내역</h2>
                            <button class="text-white bg-gray-600 px-3 py-1 rounded-md shadow-md">영수증 출력</button>
                        </div>
                        <ul class="mt-2 space-y-1 text-base">
                            <li class="flex justify-between border-b pb-1">
                                <span>총 구매액:</span>
                                <span class="action_total-amount font-bold text-gray-800">11,300원</span>
                            </li>
                            <li class="flex justify-between border-b pb-1">
                                <span>결제한 금액:</span>
                                <span class="action_paid-amount font-bold text-gray-800">11,300원</span>
                            </li>
                            <li class="flex justify-between">
                                <span>거스름돈:</span>
                                <span class="action_change-amount font-bold text-gray-800">0원</span>
                            </li>
                        </ul>
                    </article>
                </article>

                <!-- 하단 버튼 -->
                <article class="grid grid-cols-3 gap-4 mt-6">
                    <div class="bg-white shadow-lg text-center p-4 rounded-md flex flex-col justify-center">
                        <p class="text-base font-semibold">금고 보관</p>
                        <p class="action_safe-amount text-red-600 font-bold text-xl">165,500</p>
                    </div>
                    <a
                        href="#"
                        class="bg-white shadow-lg text-center p-4 rounded-md font-bold text-lg flex items-center justify-center"
                        >대기</a
                    >
                    <a
                        href="#"
                        class="bg-white shadow-lg text-center p-4 rounded-md font-bold text-lg flex items-center justify-center"
                        >환불</a
                    >
                </article>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@/assets/reset.css';
import '@/assets/main.css';
</script>
