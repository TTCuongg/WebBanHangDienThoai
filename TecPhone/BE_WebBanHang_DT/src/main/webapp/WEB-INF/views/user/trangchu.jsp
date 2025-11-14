<%-- 
    Document   : trangchu
    Created on : Nov 14, 2025, 4:36:39 AM
    Author     : truon
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chào mừng đến với TecPhone - Điện thoại thông minh chính hãng</title>
    <link rel="stylesheet" href="<c:url value="/assets/user/style_trangchu.css"/>" />

</head>
<body>
    <!-- Welcome Hero Section -->
    <section class="welcome-hero">
        <div class="container">
            <h1>Chào mừng đến với TecPhone</h1>
            <p>Khám phá thế giới công nghệ với những chiếc điện thoại thông minh hàng đầu. Chúng tôi mang đến trải nghiệm mua sắm tuyệt vời với sản phẩm chính hãng, giá cả hợp lý và dịch vụ chuyên nghiệp.</p>
            <a href="danhsachsanpham.jsp" class="btn">Khám phá ngay</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
        <div class="container">
            <h2 class="section-title">Tại sao chọn TecPhone?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🚚</div>
                    <h3>Giao hàng miễn phí</h3>
                    <p>Miễn phí giao hàng toàn quốc cho đơn hàng từ 5 triệu đồng. Nhận hàng trong vòng 2-4 ngày.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>Bảo hành chính hãng</h3>
                    <p>Tất cả sản phẩm đều được bảo hành chính hãng từ 12-24 tháng tại các trung tâm uy tín.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💳</div>
                    <h3>Thanh toán linh hoạt</h3>
                    <p>Hỗ trợ nhiều hình thức thanh toán: tiền mặt, chuyển khoản, trả góp 0% lãi suất.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📞</div>
                    <h3>Hỗ trợ 24/7</h3>
                    <p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔄</div>
                    <h3>Đổi trả dễ dàng</h3>
                    <p>Chính sách đổi trả trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎁</div>
                    <h3>Quà tặng hấp dẫn</h3>
                    <p>Nhiều chương trình khuyến mãi, quà tặng giá trị đi kèm khi mua sản phẩm.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Promotions Section -->
    <section class="promotions-section">
        <div class="container">
            <h2 class="section-title">Ưu đãi đặc biệt</h2>
            <div class="promo-grid">
                <div class="promo-card">
                    <span class="promo-badge">Giảm 15%</span>
                    <h3>iPhone Series</h3>
                    <p>Giảm ngay 15% cho tất cả các dòng iPhone mới nhất</p>
                    <!-- <a href="#" class="btn btn-light">Mua ngay</a> -->
                </div>
                <div class="promo-card">
                    <span class="promo-badge">Trả góp 0%</span>
                    <h3>Samsung Flagship</h3>
                    <p>Trả góp 0% lãi suất cho dòng Galaxy S và Z series</p>
                    <!-- <a href="#" class="btn btn-light">Mua ngay</a> -->
                </div>
                <div class="promo-card">
                    <span class="promo-badge">Quà tặng</span>
                    <h3>Xiaomi Series</h3>
                    <p>Tặng kèm phụ kiện chính hãng trị giá 1.5 triệu</p>
                    <!-- <a href="#" class="btn btn-light">Mua ngay</a> -->
                </div>
                <div class="promo-card">
                    <span class="promo-badge">Giảm 20%</span>
                    <h3>Oppo & Realme</h3>
                    <p>Giảm sâu 20% cho các dòng Reno và Realme series</p>
                    <!-- <a href="#" class="btn btn-light">Mua ngay</a> -->
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
        <div class="container">
            <h2 class="section-title">Khách hàng nói gì về chúng tôi</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">"Tôi rất hài lòng với chiếc iPhone 14 Pro mua tại TecPhone. Sản phẩm chính hãng, giá tốt và dịch vụ chăm sóc khách hàng rất chuyên nghiệp."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">MN</div>
                        <div class="author-info">
                            <h4>Minh Ngọc</h4>
                            <p>Hà Nội</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"Đã mua nhiều điện thoại tại TecPhone và luôn cảm thấy yên tâm về chất lượng. Chế độ bảo hành rõ ràng, nhân viên tư vấn nhiệt tình."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">TH</div>
                        <div class="author-info">
                            <h4>Trung Hiếu</h4>
                            <p>TP.HCM</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm như mô tả, chính hãng. Tôi sẽ tiếp tục ủng hộ TecPhone trong tương lai."</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">LT</div>
                        <div class="author-info">
                            <h4>Lan Trinh</h4>
                            <p>Đà Nẵng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Brands Section -->
    <section class="brands-section">
        <div class="container">
            <h2 class="section-title">Thương hiệu nổi bật</h2>
            <div class="brands-grid">
                <div class="brand-logo">iPhone</div>
                <div class="brand-logo">Samsung</div>
                <div class="brand-logo">Xiaomi</div>
                <div class="brand-logo">Oppo</div>
                <div class="brand-logo">Realme</div>
                <div class="brand-logo">Vivo</div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Sẵn sàng nâng cấp điện thoại của bạn?</h2>
            <p>Khám phá bộ sưu tập điện thoại thông minh mới nhất với giá tốt nhất thị trường. Đăng ký ngay để nhận thông báo về các chương trình khuyến mãi đặc biệt.</p>
            <a href="dangky.jsp" class="btn btn-light">Đăng ký ngay</a>
        </div>
    </section>

    <script>
        // Simple animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const featureCards = document.querySelectorAll('.feature-card');
            const promoCards = document.querySelectorAll('.promo-card');
            const testimonialCards = document.querySelectorAll('.testimonial-card');
            
            // Simple fade-in animation on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Apply initial styles and observe elements
            const animatedElements = [...featureCards, ...promoCards, ...testimonialCards];
            animatedElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.5s, transform 0.5s';
                observer.observe(el);
            });
        });
    </script>
</body>
</html>
