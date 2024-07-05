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
