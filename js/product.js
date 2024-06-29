// Chọn phần tử ảnh lớn
const bigImg = document.querySelector(".product-content-left-big-img img");
// Chọn tất cả các phần tử ảnh nhỏ
const smallImgs = document.querySelectorAll(
  ".product-content-left-small-img img"
);

// Thêm sự kiện click cho từng ảnh nhỏ để thay đổi ảnh lớn
smallImgs.forEach(function (imgItem) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});

// Chọn các phần tử giới thiệu, chi tiết và bảo quản
const gioithieu = document.querySelector(".gioithieu");
const chitiet = document.querySelector(".chitiet");
const baoquan = document.querySelector(".baoquan");

// Thêm sự kiện click cho từng nút để hiển thị nội dung tương ứng
if (gioithieu) {
  gioithieu.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-gioithieu"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}

if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-gioithieu"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}

if (baoquan) {
  baoquan.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-gioithieu"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}

// Chọn nút bật/tắt phần nội dung lớn
const butTon = document.querySelector(".product-content-right-bottom-top");
if (butTon) {
  butTon.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
document.addEventListener("DOMContentLoaded", (event) => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("change", function () {
    console.log("Search input changed:", searchInput.value);
    // Thực hiện các hành động khác khi nội dung của ô input thay đổi
  });
});
