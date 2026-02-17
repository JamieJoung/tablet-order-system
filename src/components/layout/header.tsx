function Header() {
    // 로고 클릭
    const handleLogoClick = () => {
        if (window.confirm('처음으로 돌아가시겠습니까?')) {
            localStorage.clear();
            window.location.href = '/';
        }
    };

    // 테이블 번호 클릭
    const handleTableClick = () => {
        if (window.confirm('테이블을 다시 선택하시겠습니까?')) {
            localStorage.removeItem('tableNumber');
            window.location.href = '/select-table';
        }
    };

    return (
        <div className="main-header">
            <a
                href="#"
                className="logo"
                onClick={(e) => {
                    e.preventDefault();
                    handleLogoClick();
                }}
            >
                로고
            </a>
            <a
                href="#"
                className="num"
                onClick={(e) => {
                    e.preventDefault();
                    handleTableClick();
                }}
            >
                TABLE
            </a>
        </div>
);
}

export default Header;