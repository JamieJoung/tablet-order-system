
function Header() {
    return (
        <div className="main-header">
            <button
                className="logo"
                onClick={() => {
                    localStorage.clear();
                    window.location.href = '/';
                }}
            >
                로고
            </button>
            <button
                className="num"
                onClick={() => {
                    window.location.href = '/admin/login';
                }}
            >
                TABLE
            </button>
        </div>
    );
}

export default Header;