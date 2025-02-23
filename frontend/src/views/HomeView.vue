<template>
    <div class="wrap">
        <div class="container">
            <!-- 상단 영역 -->
            <header class="flex justify-between items-center">
                <div class="header_left_box w-16 h-16">
                    <img src="/images/logo.png" alt="편의점 로고" class="w-full h-full object-contain" />
                </div>
                <div class="header_right_box">
                    <h1 class="text-lg font-bold">
                        어서오세요 <strong class="store_name text-blue-600">승환</strong> 편의점입니다.
                    </h1>
                    <ul class="cancel_menu_box flex gap-2 mt-2 text-sm">
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

            <section class="section-home mt-6">
                <!-- 메인 버튼 -->
                <article class="article_btn_box grid grid-cols-2 gap-4">
                    <a href="#" class="btn btn_blue text-center text-white bg-blue-600 py-3 rounded-md font-bold"
                        >통합조회</a
                    >
                    <a href="#" class="btn btn_yellow text-center text-black bg-yellow-400 py-3 rounded-md font-bold"
                        >서비스</a
                    >
                </article>

                <!-- 직전 결제내역 -->
                <article class="article_recent-payment_box bg-gray-100 p-4 rounded-lg mt-6">
                    <div class="recent_title_box flex justify-between items-center">
                        <h2 class="font-bold">직전 결제내역</h2>
                        <button class="receipt-btn text-white bg-gray-600 px-3 py-1 rounded-md">영수증 출력</button>
                    </div>
                    <ul class="payment-summary mt-2 space-y-2 text-sm">
                        <li class="flex justify-between border-b pb-2">
                            <span>총 구매액:</span>
                            <span class="action_total-amount font-bold text-gray-800">11,300원</span>
                        </li>
                        <li class="flex justify-between border-b pb-2">
                            <span>결제한 금액:</span>
                            <span class="action_paid-amount font-bold text-gray-800">11,300원</span>
                        </li>
                        <li class="flex justify-between">
                            <span>거스름돈:</span>
                            <span class="action_change-amount font-bold text-gray-800">0원</span>
                        </li>
                    </ul>
                </article>

                <!-- 하단 버튼 -->
                <article class="article_bottom_btn_box grid grid-cols-3 gap-4 mt-6">
                    <div class="safe-box bg-white shadow-md text-center p-4 rounded-md">
                        <p class="text-sm">금고 보관</p>
                        <p class="action_safe-amount text-red-600 font-bold text-lg">165,500</p>
                    </div>
                    <a href="#" class="bottom-btn bg-white shadow-md text-center p-4 rounded-md font-bold">대기</a>
                    <a href="#" class="bottom-btn bg-white shadow-md text-center p-4 rounded-md font-bold">환불</a>
                </article>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import '@/assets/reset.css';
</script>

<style scoped>
.wrap {
    @apply flex justify-center items-center min-h-screen bg-gray-100;
}

.container {
    @apply w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg;
}

.article_btn_box .btn_blue {
    @apply bg-blue-600 text-white font-bold;
}

.article_btn_box .btn_yellow {
    @apply bg-yellow-400 text-black font-bold;
}

.receipt-btn {
    @apply bg-gray-600 text-white px-3 py-1 rounded-md;
}

/* 하단 금고 */
.safe-box {
    @apply bg-white text-center p-4 rounded-md shadow-md;
}

.bottom-btn {
    @apply bg-white text-center p-4 rounded-md shadow-md font-bold;
}
</style>
