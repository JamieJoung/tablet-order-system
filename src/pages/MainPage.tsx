import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CategoryTabs from "../components/menu/CategoryTabs.tsx";


function MainPage() {
    const [customerName, setCustomerName] = useState('');
    const [isEnglish, setIsEnglish] = useState(false);
    const tableName = localStorage.getItem('tableNumber') || 'T01';

    // 입력값 초기화
    const handleClear = () => {
        setCustomerName('');
    };

    // Enter 키 처리
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleOrder();
        }
    };

    // 주문하기
    const handleOrder = () => {
        if (!customerName.trim()) {
            alert('이름을 입력해주세요.');
            return;
        }

        // 체크인 확인 (Mock)
        console.log('체크인 확인:', customerName);

        // 주문 페이지로 이동
        localStorage.setItem('customerName', customerName);
        window.location.href = '/order';
    };

    // 단체팀 선택
    const handleTeamSelect = () => {
        console.log('단체팀 선택');
        // TODO: 팝업 열기
    };

    return (
        <div className="back-wrap" id="mainWrap">
            <Header />
            <CategoryTabs />
            <div className="login-contents">
                <h2 className="title01">
                    <b>table no.</b>
                    <span className="tableName">{tableName}</span>
                </h2>

                <ul className="line-color">
                    {/* 이름 입력 */}
                    <li className="basic">
                        <label htmlFor="textCode"></label>
                        <input
                            type="text"
                            id="textCode"
                            className="name"
                            placeholder={
                                isEnglish
                                    ? 'Please enter your name.'
                                    : '고객님 성함을 입력해주세요.'
                            }
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            onKeyPress={handleKeyPress}
                            maxLength={20}
                        />
                        <span
                            className="close"
                            onClick={handleClear}
                            style={{ cursor: 'pointer' }}
                        ></span>
                    </li>

                    {/* 영문 입력 체크박스 */}
                    <li className="check-box">
                        <input
                            type="checkbox"
                            id="checkBox"
                            checked={isEnglish}
                            onChange={(e) => {
                                setIsEnglish(e.target.checked);
                                setCustomerName('');
                            }}
                        />
                        <label htmlFor="checkBox">ENG</label>
                    </li>

                    <li className="sub-text">
                        * 고객님 성함 입력 후 주문하기를 눌러주세요.
                    </li>
                </ul>

                {/* 버튼 */}
                <div className="btn type01 btnSet">
                    <a
                        className="goOrder"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleOrder();
                        }}
                    >
                        주문하기
                    </a>
                    <a
                        className="selectTeam team"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleTeamSelect();
                        }}
                    >
                        단체팀 선택
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;