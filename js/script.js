// scripts.js

// Giả lập dữ liệu sản phẩm mở rộng
const products = [
    {
        id: 1,
        name: "Sản phẩm 1",
        description: "Mô tả chi tiết về sản phẩm 1.",
        price: 100000,
        image: "img/product1.jpg",
        related: [
            { id: 2, name: "Sản phẩm liên quan 1", price: 50000, image: "img/related1.jpg" },
            { id: 3, name: "Sản phẩm liên quan 2", price: 75000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 2,
        name: "Sản phẩm 2",
        description: "Mô tả chi tiết về sản phẩm 2.",
        price: 50000,
        image: "img/product2.jpg",
        related: [
            { id: 1, name: "Sản phẩm liên quan 1", price: 100000, image: "img/related1.jpg" },
            { id: 3, name: "Sản phẩm liên quan 2", price: 75000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 3,
        name: "Sản phẩm 3",
        description: "Mô tả chi tiết về sản phẩm 3.",
        price: 75000,
        image: "img/product3.jpg",
        related: [
            { id: 1, name: "Sản phẩm liên quan 1", price: 100000, image: "img/related1.jpg" },
            { id: 2, name: "Sản phẩm liên quan 2", price: 50000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 4,
        name: "Sản phẩm 4",
        description: "Mô tả chi tiết về sản phẩm 4.",
        price: 120000,
        image: "img/product4.jpg",
        related: [
            { id: 1, name: "Sản phẩm liên quan 1", price: 100000, image: "img/related1.jpg" },
            { id: 3, name: "Sản phẩm liên quan 2", price: 75000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 5,
        name: "Sản phẩm 5",
        description: "Mô tả chi tiết về sản phẩm 5.",
        price: 90000,
        image: "img/product5.jpg",
        related: [
            { id: 1, name: "Sản phẩm liên quan 1", price: 100000, image: "img/related1.jpg" },
            { id: 2, name: "Sản phẩm liên quan 2", price: 50000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 6,
        name: "Sản phẩm 6",
        description: "Mô tả chi tiết về sản phẩm 6.",
        price: 110000,
        image: "img/product6.jpg",
        related: [
            { id: 3, name: "Sản phẩm liên quan 1", price: 75000, image: "img/related1.jpg" },
            { id: 4, name: "Sản phẩm liên quan 2", price: 120000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 7,
        name: "Sản phẩm 7",
        description: "Mô tả chi tiết về sản phẩm 7.",
        price: 130000,
        image: "img/product7.jpg",
        related: [
            { id: 1, name: "Sản phẩm liên quan 1", price: 100000, image: "img/related1.jpg" },
            { id: 2, name: "Sản phẩm liên quan 2", price: 50000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 8,
        name: "Sản phẩm 8",
        description: "Mô tả chi tiết về sản phẩm 8.",
        price: 115000,
        image: "img/product8.jpg",
        related: [
            { id: 3, name: "Sản phẩm liên quan 1", price: 75000, image: "img/related1.jpg" },
            { id: 4, name: "Sản phẩm liên quan 2", price: 120000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 9,
        name: "Sản phẩm 9",
        description: "Mô tả chi tiết về sản phẩm 9.",
        price: 125000,
        image: "img/product9.jpg",
        related: [
            { id: 5, name: "Sản phẩm liên quan 1", price: 90000, image: "img/related1.jpg" },
            { id: 6, name: "Sản phẩm liên quan 2", price: 110000, image: "img/related2.jpg" }
        ]
    },
    {
        id: 10,
        name: "Sản phẩm 10",
        description: "Mô tả chi tiết về sản phẩm 10.",
        price: 95000,
        image: "img/product10.jpg",
        related: [
            { id: 7, name: "Sản phẩm liên quan 1", price: 130000, image: "img/related1.jpg" },
            { id: 8, name: "Sản phẩm liên quan 2", price: 115000, image: "img/related2.jpg" }
        ]
    }
];


// Hiển thị danh sách sản phẩm trên trang sản phẩm và trang chủ
function displayProductList() {
    const productListContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productHTML = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price.toLocaleString('vi-VN')} VND</p>
                        <a href="product-details.html?id=${product.id}" class="btn btn-primary">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        `;
        productListContainer.innerHTML += productHTML;
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
        alert('Sản phẩm không tồn tại');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.id === product.id);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    window.location.href = 'cart.html'; // Chuyển hướng đến trang giỏ hàng
}

// Hiển thị danh sách sản phẩm khuyến mãi
function displayPromotionList() {
    const promotionListContainer = document.getElementById('promotion-list');
    products.forEach(product => {
        if (product.promotionPrice) {
            const promotionHTML = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">
                                <del>${product.price.toLocaleString('vi-VN')} VND</del>
                                <br>
                                <strong>${product.promotionPrice.toLocaleString('vi-VN')} VND</strong>
                            </p>
                            <a href="product-details.html?id=${product.id}" class="btn btn-primary">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            `;
            promotionListContainer.innerHTML += promotionHTML;
        }
    });
}

// Hiển thị thông tin sản phẩm chi tiết
function displayProductDetails(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
        alert('Sản phẩm không tồn tại');
        return;
    }

    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-title').innerText = product.name;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-price').innerText = product.price.toLocaleString('vi-VN') + " VND";
    document.getElementById('product-image').src = product.image;

    const relatedProductsContainer = document.getElementById('related-products');
    relatedProductsContainer.innerHTML = '';
    product.related.forEach(related => {
        const relatedProductHTML = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${related.image}" class="card-img-top" alt="${related.name}">
                    <div class="card-body">
                        <h5 class="card-title">${related.name}</h5>
                        <p class="card-text">${related.price.toLocaleString('vi-VN')} VND</p>
                        <a href="product-details.html?id=${related.id}" class="btn btn-primary">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        `;
        relatedProductsContainer.innerHTML += relatedProductHTML;
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
        alert('Sản phẩm không tồn tại');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.id === product.id);

    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
    window.location.href = 'cart.html'; // Chuyển hướng đến trang giỏ hàng
}


// Hiển thị các sản phẩm trong giỏ hàng
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartHTML = '';
    let cartTotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const itemTotal = item.quantity * product.price;
            cartTotal += itemTotal;
            cartHTML += `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.price.toLocaleString('vi-VN')} VND</td>
                    <td>${item.quantity}</td>
                    <td>${itemTotal.toLocaleString('vi-VN')} VND</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Xóa</button></td>
                </tr>
            `;
        }
    });

    cartItemsContainer.innerHTML = cartHTML;
    cartTotalContainer.textContent = cartTotal.toLocaleString('vi-VN') + ' VND';
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}


// Hiển thị các sản phẩm khi tải trang
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('product-list')) {
        displayProductList();
    }

    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});

// Hàm để hiển thị thông báo
function showMessage(elementId, message, isSuccess) {
    const messageElement = document.getElementById(elementId);
    messageElement.innerHTML = `<div class="alert ${isSuccess ? 'alert-success' : 'alert-danger'}">${message}</div>`;
}

// Xử lý form đăng nhập
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Giả lập kiểm tra thông tin đăng nhập
    if (email === "test@example.com" && password === "password") {
        showMessage('login-message', 'Đăng nhập thành công!', true);
        // Chuyển hướng hoặc thực hiện hành động sau khi đăng nhập thành công
    } else {
        showMessage('login-message', 'Email hoặc mật khẩu không đúng!', false);
    }
});

// Xử lý form đăng ký
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        showMessage('register-message', 'Mật khẩu xác nhận không khớp!', false);
        return;
    }

    // Giả lập lưu thông tin đăng ký vào localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        showMessage('register-message', 'Email đã được sử dụng!', false);
    } else {
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        showMessage('register-message', 'Đăng ký thành công!', true);
        // Chuyển hướng hoặc thực hiện hành động sau khi đăng ký thành công
    }
});
