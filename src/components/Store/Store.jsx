
export default function Store() {

    return (
        <div className="store-container">
            <h1 className="store-title">متجر الأنظمة و التطبيقات</h1>

            <div className="store-header">
                <p className="results-count">عرض 1-12 من أصل 24 نتيجة</p>
                <div className="sort-by">
                    <p>الترتيب الافتراضي</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down sort-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>

            <div className="product-grid">
                {/* Product cards will go here */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <div className="floating-cart">
                <span className="cart-count">0</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag cart-icon"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
        </div>
    )
}

function ProductCard() {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src="/public/unnamed.png" alt="Product" className="product-image" />
            </div>
            <div className="product-details">
                <p className="product-name">أورست نظام شاشة المطبخ</p>
                <p className="product-company">أورست</p>
            </div>
        </div>
    );
}  