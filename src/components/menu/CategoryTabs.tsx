import { useState } from 'react';

// 배열 데이터를 통한 반복 생성
const CATEGORY_DATA = [
    { id: 'meal', name: '식사류' },
    { id: 'snack', name: '안주류' },
    { id: 'beverage', name: '주류/음료' },
];


function CategoryTabs( ){

    const [activeTab, setActiveTab] = useState(CATEGORY_DATA[0].id);

    return (
        <div className="order-tab-wrap headerSet">
            <div className="order-tab-scroll tab1">
                <ul>
                    {/* 배열을 map() 함수로 돌려서 동적으로 li를 생성 */}
                    {CATEGORY_DATA.map((category) => (
                        <li
                            key={category.id}
                            // 현재 활성화된 탭id와 내 id가 같으면 class 'on' 처리
                            className={activeTab === category.id ? 'on' : ''}
                        >
                            <a
                                href="#!"
                                onClick={(e) => {
                                    e.preventDefault(); // a태그의 페이지 이동(새로고침) 기능 막기
                                    setActiveTab(category.id); // 클릭한 탭의 id로 상태 업데이트
                                }}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="order-tab-scroll tab2">
                <ul>
                </ul>
            </div>
        </div>
    )
}

export default CategoryTabs;