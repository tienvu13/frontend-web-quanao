document.addEventListener("DOMContentLoaded", function () {
  // Xử lý cho menu sidebar
  const itemsLiderbar = document.querySelectorAll(".cartegory-left-li");

  itemsLiderbar.forEach(function (menu) {
    menu.addEventListener("click", function () {
      menu.classList.toggle("block");
    });
  });

  // Xử lý cho bộ lọc màu sắc
  let selectedColors = [];

  document.querySelectorAll(".color-filter").forEach((item) => {
    item.addEventListener("click", function () {
      item.classList.toggle("selected");
    });
  });

  // Áp dụng bộ lọc màu sắc khi nhấn nút áp dụng
  document.getElementById("apply-filter").addEventListener("click", function () {
    selectedColors = [];
    document.querySelectorAll(".color-filter").forEach((item) => {
      if (item.classList.contains("selected")) {
        selectedColors.push(item.getAttribute("data-color"));
      }
    });
    applyColorFilter(selectedColors);
  });

  // Xóa bộ lọc khi nhấn nút xóa
  document.getElementById("clear-filter").addEventListener("click", function () {
    clearFilters();
  });

  // Hàm áp dụng bộ lọc màu sắc
  function applyColorFilter(colors) {
    document.querySelectorAll(".cartegory-right-content-item").forEach((item) => {
      let showItem = false;
      colors.forEach((color) => {
        if (item.classList.contains(`color-${color}`)) {
          showItem = true;
        }
      });
      if (showItem) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Hàm xóa bộ lọc
  function clearFilters() {
    document.querySelectorAll(".cartegory-right-content-item").forEach((item) => {
      item.style.display = "block";
    });
    document.querySelectorAll(".color-filter").forEach((el) => el.classList.remove("selected"));
    selectedColors = [];
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Xử lý sắp xếp các mục theo giá
  const sortSelect = document.getElementById("sort-select");
  const items = document.querySelectorAll(".cartegory-right-content-item");

  sortSelect.addEventListener("change", function () {
    const selectedValue = sortSelect.value;
    let sortedItems;

    if (selectedValue === "asc") {
      sortedItems = Array.from(items).sort((a, b) => {
        const priceA = parseInt(a.getAttribute("data-price"));
        const priceB = parseInt(b.getAttribute("data-price"));
        return priceA - priceB;
      });
    } else if (selectedValue === "desc") {
      sortedItems = Array.from(items).sort((a, b) => {
        const priceA = parseInt(a.getAttribute("data-price"));
        const priceB = parseInt(b.getAttribute("data-price"));
        return priceB - priceA;
      });
    } else {
      // Nếu là giá trị mặc định hoặc không chọn gì cả, hiển thị theo thứ tự ban đầu
      sortedItems = Array.from(items);
    }

    // Xóa các phần tử hiện tại khỏi DOM
    items.forEach((item) => item.parentNode.removeChild(item));

    // Thêm lại các phần tử đã được sắp xếp vào DOM
    sortedItems.forEach((item) => {
      document.querySelector(".cartegory-right-content").appendChild(item);
    });
  });
});

//Tìm kiếm sản phẩm
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const products = document.querySelectorAll(".cartegory-right-content-item");
  const searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (searchText.length > 0) {
      products.forEach(function (product) {
        const productName = product.querySelector("h1").textContent.toLowerCase();
        if (productName.includes(searchText)) {
          const listItem = document.createElement("li");
          listItem.textContent = product.querySelector("h1").textContent;
          listItem.addEventListener("click", function () {
            // Xử lý sự kiện click vào kết quả tìm kiếm
            searchInput.value = listItem.textContent;
            searchResults.innerHTML = "";
            filterProducts(searchText);
          });
          searchResults.appendChild(listItem);
        }
      });
    } else {
      showAllProducts();
    }
  });

  function filterProducts(searchText) {
    products.forEach(function (product) {
      const productName = product.querySelector("h1").textContent.toLowerCase();
      if (productName.includes(searchText)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  function showAllProducts() {
    products.forEach(function (product) {
      product.style.display = "block";
    });
  }
});

//Tìm kiếm trang chủ
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const products = [
    { name: "Chân Váy Xếp Ly Cạp Cao Phối Khuy", url: "product.html" },
    { name: "Chân Váy Xếp Ly Dáng Suông", url: "product.html" },
    { name: "Zuýp Xòe Rút Eo", url: "product.html" },
    { name: "ZUÝP XÒE RÚT EO", url: "product.html" },
    { name: "CHÂN VÁY XẾP LY CẠP CAO PHỐI KHUY", url: "product.html" },
    { name: "CHÂN VÁY KAKI PHỐI TÚI", url: "product.html" },
    { name: "CHÂN VÁY MIDI PHỐI REN", url: "product.html" },
    { name: "CHÂN VÁY CHỮ A PHỐI VIỀN HOA NỔI", url: "product.html" },
  ];

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (searchText.length > 0) {
      const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchText));

      filteredProducts.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = product.name;
        listItem.addEventListener("click", function () {
          window.location.href = product.url;
        });
        searchResults.appendChild(listItem);
      });
    }
  });

  searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    if (searchText.length === 0) {
      searchResults.innerHTML = "";
    }
  });
});
