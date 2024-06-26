// Lấy phần tử header đầu tiên trong tài liệu HTML
const header = document.querySelector("header");

// Thêm sự kiện lắng nghe cho sự kiện scroll của cửa sổ
window.addEventListener("scroll", function() {
    const x = window.pageYOffset; // Lấy vị trí cuộn dọc hiện tại của cửa sổ
    if (x > 0) {
        header.classList.add("sticky"); // Nếu cuộn dọc lớn hơn 0, thêm class "sticky" vào header
    } else {
        header.classList.remove("sticky"); // Nếu cuộn dọc bằng 0, loại bỏ class "sticky" khỏi header
    }
});

// Lấy tất cả các hình ảnh trong các phần tử có class "aspect-ratio-169"
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");

// Lấy phần tử chứa hình ảnh (container) có class "aspect-ratio-169"
const imgContainer = document.querySelector(".aspect-ratio-169");

// Lấy tất cả các phần tử dot (chấm điều hướng)
const dotItem = document.querySelectorAll(".dot");

// Số lượng hình ảnh
let imgNumber = imgPosition.length;

// Biến index để xác định vị trí hiện tại của hình ảnh đang hiển thị
let index = 0;

// Đặt vị trí ban đầu cho các hình ảnh và thêm sự kiện click cho các dot
imgPosition.forEach(function(image, idx) {
    image.style.left = idx * 100 + "%"; // Thiết lập vị trí left cho từng hình ảnh
    dotItem[idx].addEventListener("click", function() {
        slider(idx); // Gọi hàm slider khi click vào dot
    });
});

// Hàm thực hiện chuyển hình ảnh tự động
function imgSlide() {
    index++;
    if (index >= imgNumber) {
        index = 0;
    }
    slider(index);
}

// Hàm slider để cập nhật vị trí hình ảnh và dot active
function slider(idx) {
    imgContainer.style.left = "-" + idx * 100 + "%"; // Di chuyển container đến vị trí mới
    const dotActive = document.querySelector(".dot.active"); // Tìm dot hiện tại có class active
    if (dotActive) {
        dotActive.classList.remove("active"); // Loại bỏ class active từ dot hiện tại (nếu có)
    }
    dotItem[idx].classList.add("active"); // Thêm class active cho dot mới
}

// Thiết lập setInterval để tự động chuyển hình sau mỗi 5 giây
setInterval(imgSlide, 5000);
