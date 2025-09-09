// 음식 데이터
const foodData = {
    "밥류": [
        { name: "쌀밥", carbon: 0.29 },
        { name: "현미밥", carbon: 0.27 },
        { name: "잡곡밥", carbon: 0.31 },
        { name: "흑미밥", carbon: 0.32 },
        { name: "콩밥", carbon: 0.31 },
        { name: "김밥", carbon: 0.52 },
        { name: "볶음밥", carbon: 0.61 },
        { name: "주먹밥", carbon: 0.44 },
        { name: "오므라이스", carbon: 1.16 },
        { name: "카레라이스", carbon: 0.74 },
        { name: "유부초밥", carbon: 0.57 },
        { name: "참치마요덮밥", carbon: 0.83 },
        { name: "달걀덮밥", carbon: 0.61 },
        { name: "비빔밥", carbon: 1.43 },
        { name: "버섯비빔밥", carbon: 1.21 },
        { name: "두부덮밥", carbon: 0.41 },
        { name: "연근밥", carbon: 0.37 },
        { name: "감자밥", carbon: 0.27 },
        { name: "찹쌀밥", carbon: 0.29 },
        { name: "귀리밥", carbon: 0.32 },
        { name: "기장밥", carbon: 0.33 },
        { name: "찰보리밥", carbon: 0.32 },
        { name: "발아현미밥", carbon: 0.28 },
        { name: "곤드레나물밥", carbon: 0.37 },
        { name: "차수수밥", carbon: 0.31 },
        { name: "새우나시고랭볶음밥", carbon: 0.53 },
        { name: "해물빠에야", carbon: 0.54 },
        { name: "오므라이스덮밥", carbon: 1.17 }
    ],
    "국류": [
        { name: "미역국", carbon: 0.22 },
        { name: "북엇국", carbon: 0.29 },
        { name: "된장국", carbon: 0.25 },
        { name: "김치찌개", carbon: 0.81 },
        { name: "떡국", carbon: 0.47 },
        { name: "어묵탕", carbon: 0.33 },
        { name: "설렁탕", carbon: 10.01 },
        { name: "곰탕", carbon: 9.74 },
        { name: "갈비탕", carbon: 5.05 },
        { name: "육개장", carbon: 3.01 },
        { name: "소고기무국", carbon: 1.92 },
        { name: "순두부찌개", carbon: 0.73 },
        { name: "청국장찌개", carbon: 0.89 },
        { name: "나가사끼짬뽕국", carbon: 0.98 },
        { name: "감자국", carbon: 0.29 },
        { name: "배추들깨탕", carbon: 0.21 },
        { name: "콩나물국", carbon: 0.14 },
        { name: "만두국", carbon: 0.58 },
        { name: "근대된장국", carbon: 0.27 },
        { name: "우동국", carbon: 0.36 },
        { name: "떡만둣국", carbon: 0.61 },
        { name: "동태찌개", carbon: 0.46 },
        { name: "쇠고기미역국", carbon: 0.83 },
        { name: "고추장찌개", carbon: 0.91 },
        { name: "아욱된장국", carbon: 0.25 },
        { name: "도토리묵채냉국", carbon: 0.22 },
        { name: "닭곰탕", carbon: 1.31 },
        { name: "등뼈감자탕", carbon: 1.49 }
    ],
    "반찬류": [
        { name: "배추김치", carbon: 0.23 },
        { name: "깍두기", carbon: 0.23 },
        { name: "백김치", carbon: 0.21 },
        { name: "오이무침", carbon: 0.18 },
        { name: "무생채", carbon: 0.19 },
        { name: "콩나물무침", carbon: 0.22 },
        { name: "시금치나물", carbon: 0.2 },
        { name: "감자조림", carbon: 0.37 },
        { name: "브로콜리볶음", carbon: 0.37 },
        { name: "애호박볶음", carbon: 0.21 },
        { name: "두부부침", carbon: 0.41 },
        { name: "계란찜", carbon: 0.57 },
        { name: "치즈계란말이", carbon: 0.61 },
        { name: "멸치볶음", carbon: 0.4 },
        { name: "고구마맛탕", carbon: 0.4 },
        { name: "야채튀김", carbon: 0.68 },
        { name: "잡채", carbon: 0.83 },
        { name: "어묵볶음", carbon: 0.33 },
        { name: "동그랑땡", carbon: 0.61 },
        { name: "연두부", carbon: 0.38 },
        { name: "연근조림", carbon: 0.31 },
        { name: "메추리알장조림", carbon: 0.54 },
        { name: "청포묵무침", carbon: 0.33 },
        { name: "부추무침", carbon: 0.19 },
        { name: "바나나튀김", carbon: 0.44 },
        { name: "토마토비타민겉절이", carbon: 0.2 },
        { name: "피망볶음", carbon: 0.22 },
        { name: "콩조림", carbon: 0.28 },
        { name: "미나리무침", carbon: 0.21 },
        { name: "오징어채볶음", carbon: 0.31 }
    ],
    "고기/생선류": [
        { name: "닭갈비", carbon: 1.29 },
        { name: "제육볶음", carbon: 1.58 },
        { name: "불고기", carbon: 3.48 },
        { name: "돼지갈비찜", carbon: 1.91 },
        { name: "돈까스", carbon: 1.35 },
        { name: "생선까스", carbon: 1.05 },
        { name: "오징어볶음", carbon: 1.02 },
        { name: "고등어구이", carbon: 0.09 },
        { name: "삼겹살", carbon: 0.24 },
        { name: "함박스테이크", carbon: 1.66 },
        { name: "닭강정", carbon: 1.22 },
        { name: "닭볶음탕", carbon: 1.21 },
        { name: "떡갈비", carbon: 1.39 },
        { name: "파인애플탕수육", carbon: 1.13 },
        { name: "치즈함박", carbon: 1.68 },
        { name: "초콜릿돈까스", carbon: 1.32 },
        { name: "바싸불고기", carbon: 2.14 },
        { name: "두부스테이크", carbon: 0.47 },
        { name: "고등어카레구이", carbon: 0.22 },
        { name: "유자소스생선조림", carbon: 1.11 },
        { name: "참치오믈렛", carbon: 0.42 },
        { name: "치즈돈까스", carbon: 1.41 },
        { name: "코코넛돈가스", carbon: 1.45 },
        { name: "수제너비아니구이", carbon: 1.33 },
        { name: "미니깐쇼칠리새우", carbon: 1.02 },
        { name: "봉추찜닭", carbon: 1.46 },
        { name: "훈제오리야채볶음", carbon: 2.13 },
        { name: "돼지갈비구이", carbon: 1.97 },
        { name: "푸드빌등갈비폭립", carbon: 4.61 },
        { name: "등심스테이크", carbon: 4.81 },
        { name: "홍합탕", carbon: 0.19 },
        { name: "나시고랭새우볶음밥", carbon: 0.55 },
        { name: "낙지볶음", carbon: 0.98 }
    ],
    "후식류": [
        { name: "요구르트", carbon: 0.3 },
        { name: "푸딩", carbon: 0.36 },
        { name: "식혜", carbon: 0.31 },
        { name: "사과", carbon: 0.13 },
        { name: "바나나", carbon: 0.17 },
        { name: "귤", carbon: 0.1 },
        { name: "수박", carbon: 0.12 },
        { name: "초코우유", carbon: 0.37 },
        { name: "떡", carbon: 0.22 },
        { name: "파인애플", carbon: 0.14 },
        { name: "딸기", carbon: 0.16 },
        { name: "토마토", carbon: 0.18 },
        { name: "메론두유", carbon: 0.25 },
        { name: "팥빙수", carbon: 0.41 },
        { name: "구운고구마", carbon: 0.25 },
        { name: "젤리샐러드", carbon: 0.39 },
        { name: "블루베리푸딩", carbon: 0.34 },
        { name: "포도", carbon: 0.13 },
        { name: "바나나우유", carbon: 0.23 },
        { name: "한라봉롤케익", carbon: 0.38 },
        { name: "감탄케이크", carbon: 0.45 },
        { name: "팥앙금찐빵", carbon: 0.29 },
        { name: "초코시리얼/우유", carbon: 0.43 },
        { name: "미숫가루", carbon: 0.35 },
        { name: "카프리썬(쥬스류)", carbon: 0.3 }
    ],
    "패스트푸드류": [
        { name: "햄버거", carbon: 2.5 },
        { name: "치즈버거", carbon: 2.82 },
        { name: "베이컨치즈버거", carbon: 3.22 },
        { name: "프렌치프라이", carbon: 1.15 },
        { name: "치킨너겟", carbon: 1.89 },
        { name: "후랑크소시지", carbon: 1.2 },
        { name: "피자(페퍼로니)", carbon: 3.1 },
        { name: "치킨버거", carbon: 2.7 },
        { name: "핫도그", carbon: 2.2 },
        { name: "샌드위치", carbon: 1.62 },
        { name: "토스트(버터)", carbon: 0.95 },
        { name: "콜라(탄산음료)", carbon: 0.2 },
        { name: "맥너겟(스몰팩)", carbon: 1.1 },
        { name: "크리스피치킨", carbon: 2.25 },
        { name: "감자튀김(Large)", carbon: 1.3 },
        { name: "텐더스틱", carbon: 1.85 },
        { name: "치킨윙", carbon: 2.4 },
        { name: "바비큐 립", carbon: 3.75 },
        { name: "치즈스틱", carbon: 1.45 },
        { name: "베이컨 랩", carbon: 2.05 }
    ]
};

// 전역 변수
let selectedMeals = [];
let currentCategory = "밥류";

// DOM 요소들
const foodGrid = document.getElementById('foodGrid');
const mealList = document.getElementById('mealList');
const totalCarbonEl = document.getElementById('totalCarbon');
const feedbackMessageEl = document.getElementById('feedbackMessage');
const clearMealBtn = document.getElementById('clearMeal');
const saveMealBtn = document.getElementById('saveMeal');

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 앱 초기화
function initializeApp() {
    setupEventListeners();
    displayFoodItems(currentCategory);
    updateMealDisplay();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 카테고리 탭 클릭
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // 전체 삭제 버튼
    clearMealBtn.addEventListener('click', clearAllMeals);

    // 식단 저장 버튼
    saveMealBtn.addEventListener('click', saveMeal);
}

// 카테고리 전환
function switchCategory(category) {
    currentCategory = category;
    
    // 탭 버튼 상태 업데이트
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    displayFoodItems(category);
}

// 음식 아이템 표시
function displayFoodItems(category) {
    const foods = foodData[category] || [];
    
    foodGrid.innerHTML = foods.map(food => `
        <div class="food-item" onclick="addToMeal('${food.name}', ${food.carbon})">
            <div class="food-info">
                <div class="food-name">${food.name}</div>
                <div class="food-carbon">${food.carbon} kg CO₂e</div>
            </div>
            <button class="add-btn">+</button>
        </div>
    `).join('');
}

// 식단에 음식 추가
function addToMeal(name, carbon) {
    const existingMeal = selectedMeals.find(meal => meal.name === name);
    
    if (existingMeal) {
        existingMeal.quantity += 1;
    } else {
        selectedMeals.push({
            name: name,
            carbon: carbon,
            quantity: 1
        });
    }
    
    updateMealDisplay();
    showAddNotification(name);
}

// 식단에서 음식 제거
function removeFromMeal(name) {
    const mealIndex = selectedMeals.findIndex(meal => meal.name === name);
    
    if (mealIndex !== -1) {
        if (selectedMeals[mealIndex].quantity > 1) {
            selectedMeals[mealIndex].quantity -= 1;
        } else {
            selectedMeals.splice(mealIndex, 1);
        }
    }
    
    updateMealDisplay();
}

// 식단 표시 업데이트
function updateMealDisplay() {
    updateTotalCarbon();
    updateMealList();
    updateFeedbackMessage();
}

// 총 탄소배출량 계산 및 표시
function updateTotalCarbon() {
    const totalCarbon = selectedMeals.reduce((total, meal) => {
        return total + (meal.carbon * meal.quantity);
    }, 0);
    
    totalCarbonEl.textContent = totalCarbon.toFixed(2);
}

// 선택된 음식 목록 업데이트
function updateMealList() {
    if (selectedMeals.length === 0) {
        mealList.innerHTML = '<div class="empty-state">아직 선택된 음식이 없습니다.</div>';
        return;
    }
    
    mealList.innerHTML = selectedMeals.map(meal => `
        <div class="meal-item">
            <div class="meal-info">
                <div class="meal-name">${meal.name} ${meal.quantity > 1 ? `x${meal.quantity}` : ''}</div>
                <div class="meal-carbon">${(meal.carbon * meal.quantity).toFixed(2)} kg CO₂e</div>
            </div>
            <button class="remove-btn" onclick="removeFromMeal('${meal.name}')">-</button>
        </div>
    `).join('');
}

// 피드백 메시지 업데이트
function updateFeedbackMessage() {
    const totalCarbon = parseFloat(totalCarbonEl.textContent);
    
    // 피드백 기준 설정 (하루 권장 탄소배출량 기준)
    const lowThreshold = 2.0;   // 2kg 미만: 좋음
    const mediumThreshold = 4.0; // 4kg 미만: 보통
    
    feedbackMessageEl.className = 'feedback-message';
    
    if (totalCarbon === 0) {
        feedbackMessageEl.textContent = '식단을 구성해보세요!';
    } else if (totalCarbon < lowThreshold) {
        feedbackMessageEl.classList.add('good');
        feedbackMessageEl.textContent = `🌟 훌륭해요! 환경을 생각하는 저탄소 식단이네요!`;
    } else if (totalCarbon < mediumThreshold) {
        feedbackMessageEl.classList.add('warning');
        feedbackMessageEl.textContent = `⚠️ 괜찮은 식단이에요. 조금 더 저탄소 음식을 고려해보세요.`;
    } else {
        feedbackMessageEl.classList.add('danger');
        feedbackMessageEl.textContent = `🔴 탄소배출량이 높아요. 다른 식단을 고려해보세요!`;
    }
}

// 전체 식단 삭제
function clearAllMeals() {
    if (selectedMeals.length === 0) return;
    
    if (confirm('모든 선택된 음식을 삭제하시겠습니까?')) {
        selectedMeals = [];
        updateMealDisplay();
        showNotification('식단이 모두 삭제되었습니다.', 'info');
    }
}

// 식단 저장
function saveMeal() {
    if (selectedMeals.length === 0) {
        showNotification('저장할 식단이 없습니다.', 'warning');
        return;
    }
    
    const mealData = {
        date: new Date().toISOString().split('T')[0],
        meals: selectedMeals,
        totalCarbon: parseFloat(totalCarbonEl.textContent)
    };
    
    // 로컬스토리지에 저장
    const savedMeals = JSON.parse(localStorage.getItem('savedMeals') || '[]');
    savedMeals.push(mealData);
    localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
    
    showNotification('식단이 저장되었습니다!', 'success');
}

// 알림 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'warning' ? '#fff3cd' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'warning' ? '#856404' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'warning' ? '#ffeaa7' : '#bee5eb'};
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 음식 추가 알림
function showAddNotification(foodName) {
    showNotification(`${foodName}이(가) 식단에 추가되었습니다.`, 'success');
}