<template>
    <div class="flex justify-center items-center min-h-screen bg-white">
        <div class="w-[1024px] h-[auto] bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col p-6">
            <!-- 상단 헤더 영역 -->
            <div class="bg-[#e94e97] text-white p-3 -mx-6 -mt-6 mb-4">
                <h1 class="text-2xl font-bold">상품조회</h1>
            </div>

            <div class="flex gap-4 h-full">
                <!-- 왼쪽 상품 정보 영역 -->
                <div class="flex-1 flex flex-col">
                    <div class="grid grid-cols-[180px,1fr] gap-y-2 mb-4">
                        <div class="flex items-center text-lg font-medium px-2 border-r bg-gray-100">바코드</div>
                        <div class="flex gap-2 items-center">
                            <el-input v-model="barcode" class="flex-1" placeholder="8801007835396"></el-input>
                            <el-button type="primary" class="!bg-[#494c61] !text-white">상품명으로 조회</el-button>
                        </div>

                        <div class="flex items-center text-lg font-medium px-2 border-r bg-gray-100">상품명</div>
                        <el-input v-model="productName" placeholder="맥스봉 직화꼬치바 90g" disabled></el-input>

                        <div class="flex items-center text-lg font-medium px-2 border-r bg-gray-100">단가</div>
                        <el-input v-model="price" placeholder="2,500" class="text-right" disabled></el-input>

                        <div class="flex items-center text-lg font-medium px-2 border-r bg-gray-100">분류정보</div>
                        <el-input v-model="category" placeholder="14 안주류" disabled></el-input>

                        <div class="flex items-center text-lg font-medium px-2 border-r bg-gray-100">행사정보</div>
                        <div class="grid grid-cols-2 gap-2">
                            <el-input v-model="eventType1" placeholder="023 욱가공품" disabled></el-input>
                            <el-input v-model="eventType2" placeholder="069 핫바" disabled></el-input>
                        </div>
                    </div>

                    <div class="bg-gray-100 p-3 border rounded">
                        <div class="text-lg font-medium mb-2">행사정보</div>
                        <div class="text-sm text-gray-700">
                            <p>재선당 냉장면 2층 중 1층 구매 시, CJ)</p>
                            <p>핫바 2층 중 1층 증정</p>
                            <p>행사기간 : 2022-12-01 ~ 2022-12-31</p>
                            <p>행사요일 : 매일</p>
                            <p>경옥모재 이글기 쿠킹 최대진 1층 구매</p>
                            <p>시 CJ핫바 1층 증정</p>
                            <p>행사기간 : 2022-12-01 ~ 2022-12-31</p>
                            <p>행사요일 : 매일</p>
                        </div>
                    </div>
                </div>

                <!-- 오른쪽 이미지 및 정보 영역 -->
                <div class="w-[400px] flex flex-col">
                    <div class="bg-white border rounded-md p-2 mb-4 flex items-center justify-center h-[220px]">
                        <img src="https://via.placeholder.com/150x200" alt="상품 이미지" class="max-h-full" />
                    </div>

                    <div class="grid grid-cols-1 gap-3">
                        <div class="text-lg font-medium">행사연관상품</div>
                        <div class="text-lg font-medium">급일판매수량</div>
                        <div class="text-lg font-medium">재고</div>
                        <div class="text-lg font-medium">판매불가여부</div>
                        <div class="text-lg font-medium">미상점거래여부</div>
                        <div class="text-lg font-medium">입출고이력</div>
                    </div>

                    <div class="mt-auto">
                        <div class="grid grid-cols-2 gap-2 mb-2">
                            <el-button type="primary" class="!bg-[#494c61] !text-white">판매가능</el-button>
                            <el-button>판매불가</el-button>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <el-button>발주가능</el-button>
                            <el-button>발주가능</el-button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 하단 바코드 목록 영역 -->
            <div class="mt-4 border rounded p-2 bg-white">
                <div class="text-sm text-gray-700 max-h-[150px] overflow-y-auto">
                    <p>8809802263109 재선당넉장사브</p>
                    <p>8809802263116 재선당매운넉장사브</p>
                    <p>8801007835396 맥스봉직화꼬치바</p>
                    <p>8801007880303 맥스봉꼬치바정렬앙</p>
                    <p>8809367692581 정육면제1깨부수면앙</p>
                    <p>8809802265318 풀내린닭도리탕용면앙</p>
                    <p>8809802265325 치네치부닭찜개장면앙</p>
                    <p>8809802266100 이글기쿠킹소스봉옵</p>
                    <p>8801007835396 맥스봉직화꼬치바앙</p>
                    <p>8801007880303 맥스봉꼬치바앙</p>
                    <p>8801007348308 맥스봉참앙앙</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const barcode = ref('8801007835396');
const productName = ref('맥스봉 직화꼬치바 90g');
const price = ref('2,500');
const category = ref('14 안주류');
const eventType1 = ref('023 욱가공품');
const eventType2 = ref('069 핫바');
</script>

<style scoped>
:deep(.el-input__wrapper) {
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    padding: 0 11px;
}

:deep(.el-button) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dcdfe6;
    height: 36px;
    min-height: 36px;
}

:deep(.el-button--default) {
    background-color: white;
    color: #333;
}
</style>
