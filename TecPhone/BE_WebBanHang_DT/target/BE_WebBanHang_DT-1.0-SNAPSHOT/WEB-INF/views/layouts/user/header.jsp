<%-- 
    Document   : header
    Created on : Nov 13, 2025, 1:44:00 AM
    Author     : truon
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <div class="top-bar">
        <div class="container">
            <div class="contact-info">
                <span>📞 Hotline: 1900 1234</span>
                <span>✉️ Email: support@tecphone.vn</span>
            </div>
            <div class="auth-links">
                <a href="dangky.jsp">Đăng ký</a>
                <a href="dangnhap.jsp">Đăng nhập</a>
            </div>
        </div>
    </div>

    <!-- Main Header -->
    <header>
        <div class="main-header">
            <div class="container">
                <div class="logo">Tec<span>Phone</span></div>
                
                <div class="search-bar">
                    <input type="text" placeholder="Tìm kiếm sản phẩm...">
                    <button>Tìm</button>
                </div>
                
                <div class="header-actions">
                    <div class="cart-icon">
                        🛒 Giỏ hàng
                        <span class="cart-count"></span>
                    </div>
                    <div class="user-icon">
                        👤 Tài khoản
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Navigation -->
        <nav>
            <div class="container">
                <ul class="nav-menu">
                    <li><a href="trangchu">Trang chủ</a></li>
                    <li><a href="gioithieu">Giới thiệu</a></li>
                    <li class="dropdown">
                        <a href="danhsachsanpham">Sản phẩm ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">iPhone</a></li>
                            <li><a href="#">Samsung</a></li>
                            <li><a href="#">Xiaomi</a></li>
                            <li><a href="#">Oppo</a></li>
                            <li><a href="#">Realme</a></li>
                        </ul>
                    </li>
<!--                    <li><a href="chitietsanpham.jsp">Chi tiết sản phẩm</a></li>-->
                    <li><a href="giohang">Giỏ hàng</a></li>
                    <li><a href="thanhtoan">Thanh toán</a></li>
                    <li><a href="vanchuyen">Vận chuyển</a></li>
                    <li><a href="tintuc">Tin tức</a></li>
                    <li><a href="lienhe">Liên hệ</a></li>
                </ul>
            </div>
        </nav>
    </header>
