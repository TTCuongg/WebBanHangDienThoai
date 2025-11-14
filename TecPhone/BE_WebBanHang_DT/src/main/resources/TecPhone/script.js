// script.js

// ============================
// CẤU TRÚC DỮ LIỆU VÀ BIẾN TOÀN CỤC
// ============================

// Dữ liệu sản phẩm mẫu
const productsData = [
    {
        id: 1,
        name: "iPhone 14 Pro Max",
        price: 29990000,
        image: "https://via.placeholder.com/300x200?text=iPhone+14+Pro+Max",
        description: "iPhone 14 Pro Max 128GB - Màn hình Dynamic Island, camera 48MP"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 24990000,
        image: "https://via.placeholder.com/300x200?text=Galaxy+S23+Ultra",
        description: "Samsung Galaxy S23 Ultra 256GB - Bút S-Pen, camera 200MP"
    },
    {
        id: 3,
        name: "Xiaomi 13 Pro",
        price: 19990000,
        image: "https://via.placeholder.com/300x200?text=Xiaomi+13+Pro",
        description: "Xiaomi 13 Pro 256GB - Snapdragon 8 Gen 2, camera Leica"
    },
    {
        id: 4,
        name: "Tai nghe AirPods Pro 2",
        price: 5990000,
        image: "https://via.placeholder.com/300x200?text=AirPods+Pro+2",
        description: "Tai nghe AirPods Pro 2 - Chống ồn chủ động, thời lượng pin 30h"
    },
    {
        id: 5,
        name: "Sạc dự phòng 10000mAh",
        price: 450000,
        image: "https://via.placeholder.com/300x200?text=S%E1%BA%A1c+D%E1%BB%B1+Ph%C3%B2ng",
        description: "Sạc dự phòng 10000mAh - 2 cổng USB, sạc nhanh 18W"
    },
    {
        id: 6,
        name: "Ốp lưng iPhone 14",
        price: 250000,
        image: "https://via.placeholder.com/300x200?text=%E1%BB%90p+L%C6%B0ng+iPhone",
        description: "Ốp lưng iPhone 14 - Chống sốc, nhiều màu sắc"
    }
];

// Biến toàn cục
let currentProducts = [...productsData]; // Sao chép mảng sản phẩm gốc
let currentUser = null; // Thông tin người dùng hiện tại

// ============================
// DOM ELEMENTS
// ============================

// Lấy các phần tử DOM cần thiết
const productsListElement = document.getElementById('productsList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const closeButtons = document.querySelectorAll('.close');

// ============================
// HÀM HIỂN THỊ SẢN PHẨM
// ============================

/**
 * Hiển thị danh sách sản phẩm lên giao diện
 * @param {Array} products - Mảng các sản phẩm cần hiển thị
 */
function displayProducts(products) {
    // Xóa nội dung hiện tại
    productsListElement.innerHTML = '';
    
    // Kiểm tra nếu không có sản phẩm nào
    if (products.length === 0) {
        productsListElement.innerHTML = '<p class="no-products">Không tìm thấy sản phẩm nào.</p>';
        return;
    }
    
    // Tạo HTML cho từng sản phẩm và thêm vào DOM
    products.forEach(product => {
        const productElement = createProductElement(product);
        productsListElement.appendChild(productElement);
    });
}

/**
 * Tạo phần tử HTML cho một sản phẩm
 * @param {Object} product - Đối tượng sản phẩm
 * @returns {HTMLElement} Phần tử HTML của sản phẩm
 */
function createProductElement(product) {
    // Tạo định dạng giá tiền VND
    const formattedPrice = formatCurrency(product.price);
    
    // Tạo phần tử sản phẩm
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
    productDiv.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">${formattedPrice}</div>
            <p class="product-description">${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Thêm vào giỏ hàng</button>
        </div>
    `;
    
    return productDiv;
}

/**
 * Định dạng số tiền thành chuỗi VND
 * @param {number} amount - Số tiền cần định dạng
 * @returns {string} Chuỗi tiền đã định dạng
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// ============================
// HÀM TÌM KIẾM VÀ SẮP XẾP
// ============================

/**
 * Thực hiện tìm kiếm sản phẩm dựa trên từ khóa
 * @param {string} keyword - Từ khóa tìm kiếm
 * @returns {Array} Mảng sản phẩm phù hợp
 */
function searchProducts(keyword) {
    if (!keyword.trim()) {
        return [...productsData]; // Trả về tất cả sản phẩm nếu không có từ khóa
    }
    
    const lowerCaseKeyword = keyword.toLowerCase();
    return productsData.filter(product => 
        product.name.toLowerCase().includes(lowerCaseKeyword) || 
        product.description.toLowerCase().includes(lowerCaseKeyword)
    );
}

/**
 * Sắp xếp sản phẩm theo giá
 * @param {Array} products - Mảng sản phẩm cần sắp xếp
 * @param {string} sortType - Loại sắp xếp ('price-asc', 'price-desc')
 * @returns {Array} Mảng sản phẩm đã sắp xếp
 */
function sortProducts(products, sortType) {
    // Tạo bản sao của mảng để không ảnh hưởng đến mảng gốc
    const sortedProducts = [...products];
    
    switch(sortType) {
        case 'price-asc':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sortedProducts.sort((a, b) => b.price - a.price);
        default:
            return sortedProducts; // Trả về mảng gốc nếu không có sắp xếp
    }
}

/**
 * Xử lý sự kiện tìm kiếm và sắp xếp
 */
function handleSearchAndSort() {
    // Lấy từ khóa tìm kiếm
    const keyword = searchInput.value;
    
    // Tìm kiếm sản phẩm
    let filteredProducts = searchProducts(keyword);
    
    // Lấy loại sắp xếp
    const sortType = sortSelect.value;
    
    // Sắp xếp sản phẩm
    filteredProducts = sortProducts(filteredProducts, sortType);
    
    // Cập nhật sản phẩm hiện tại
    currentProducts = filteredProducts;
    
    // Hiển thị sản phẩm
    displayProducts(currentProducts);
}

// ============================
// HÀM QUẢN LÝ MODAL
// ============================

/**
 * Hiển thị modal
 * @param {HTMLElement} modal - Phần tử modal cần hiển thị
 */
function showModal(modal) {
    modal.style.display = 'block';
}

/**
 * Ẩn modal
 * @param {HTMLElement} modal - Phần tử modal cần ẩn
 */
function hideModal(modal) {
    modal.style.display = 'none';
}

// ============================
// HÀM QUẢN LÝ NGƯỜI DÙNG
// ============================

/**
 * Xử lý đăng ký người dùng
 * @param {Event} event - Sự kiện submit form
 */
function handleRegister(event) {
    event.preventDefault();
    
    // Lấy dữ liệu từ form
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    
    // Kiểm tra xem email đã tồn tại chưa (trong thực tế sẽ gửi request đến server)
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (existingUsers.find(user => user.email === email)) {
        alert('Email này đã được đăng ký!');
        return;
    }
    
    // Tạo user mới
    const newUser = {
        id: Date.now(), // ID đơn giản
        name,
        email,
        password // Trong thực tế cần mã hóa mật khẩu
    };
    
    // Lưu user vào localStorage
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Thông báo thành công
    alert('Đăng ký thành công! Vui lòng đăng nhập.');
    
    // Đóng modal và reset form
    hideModal(registerModal);
    registerForm.reset();
}

/**
 * Xử lý đăng nhập người dùng
 * @param {Event} event - Sự kiện submit form
 */
function handleLogin(event) {
    event.preventDefault();
    
    // Lấy dữ liệu từ form
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Kiểm tra thông tin đăng nhập (trong thực tế sẽ gửi request đến server)
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
        // Đăng nhập thành công
        currentUser = user;
        
        // Cập nhật giao diện
        updateUserInterface();
        
        // Thông báo thành công
        alert(`Chào mừng ${user.name} quay trở lại!`);
        
        // Đóng modal và reset form
        hideModal(loginModal);
        loginForm.reset();
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
}

/**
 * Cập nhật giao diện sau khi đăng nhập/đăng xuất
 */
function updateUserInterface() {
    if (currentUser) {
        // Người dùng đã đăng nhập
        loginBtn.textContent = currentUser.name;
        registerBtn.textContent = 'Đăng xuất';
        registerBtn.classList.remove('btn-primary');
        registerBtn.classList.add('btn-secondary');
    } else {
        // Người dùng chưa đăng nhập
        loginBtn.textContent = 'Đăng nhập';
        registerBtn.textContent = 'Đăng ký';
        registerBtn.classList.remove('btn-secondary');
        registerBtn.classList.add('btn-primary');
    }
}

/**
 * Xử lý đăng xuất
 */
function handleLogout() {
    currentUser = null;
    updateUserInterface();
    alert('Đã đăng xuất thành công!');
}

// ============================
// HÀM KHỞI TẠO
// ============================

/**
 * Khởi tạo ứng dụng - thiết lập các sự kiện và hiển thị dữ liệu ban đầu
 */
function initializeApp() {
    // Hiển thị sản phẩm ban đầu
    displayProducts(currentProducts);
    
    // Thiết lập sự kiện tìm kiếm
    searchBtn.addEventListener('click', handleSearchAndSort);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSearchAndSort();
        }
    });
    
    // Thiết lập sự kiện sắp xếp
    sortSelect.addEventListener('change', handleSearchAndSort);
    
    // Thiết lập sự kiện modal
    loginBtn.addEventListener('click', () => {
        if (currentUser) {
            // Nếu đã đăng nhập, hiển thị thông tin user
            alert(`Bạn đang đăng nhập với tên: ${currentUser.name}`);
        } else {
            showModal(loginModal);
        }
    });
    
    registerBtn.addEventListener('click', () => {
        if (currentUser) {
            // Nếu đã đăng nhập, cho phép đăng xuất
            handleLogout();
        } else {
            showModal(registerModal);
        }
    });
    
    // Đóng modal khi click vào nút đóng
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideModal(loginModal);
            hideModal(registerModal);
        });
    });
    
    // Đóng modal khi click bên ngoài nội dung modal
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            hideModal(loginModal);
        }
        if (event.target === registerModal) {
            hideModal(registerModal);
        }
    });
    
    // Thiết lập sự kiện form
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    
    // Thiết lập sự kiện thêm vào giỏ hàng (sẽ được thêm sau khi sản phẩm được hiển thị)
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = productsData.find(p => p.id === productId);
            
            if (product) {
                alert(`Đã thêm ${product.name} vào giỏ hàng!`);
                // Trong thực tế, bạn sẽ thêm sản phẩm vào giỏ hàng ở đây
            }
        }
    });
    
    // Kiểm tra xem có user đã đăng nhập từ trước không (trong session)
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
}

// ============================
// KHỞI CHẠY ỨNG DỤNG
// ============================

// Chạy ứng dụng khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', initializeApp);