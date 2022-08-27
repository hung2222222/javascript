"use strict";
const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const pageNum = document.getElementById("page-num");
const btnNext = document.querySelector("#btn-next");

// biến tính chỉ số news tối đa trả về từ API
let totalResults = 0;

getDatanews("us", 1);

//hàm lấy dữ liệu data news từ APi và hiển thị list news ra ứng dụng
async function getDatanews(country, page) {

  try {
    // kết nối API để lấy dữ liệu
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSiZe=${userActive.pageSiZe}&page=${page}&apikey=ac938e2862da40f2aacfda8d83d25ade
        `   
    );
   
    // trả về 1 promise
    const data = await res.json();
    //  console.log(data);
    // gọi hàm để hiển thị List News
    dislayNewList(data);
    // bắt lỗi
  } catch (err) {
    //thông báo lỗi
    alert("Eror: " + err.message);
  }
}

// hàm hiển thị List news lên trang
function dislayNewList(data) {
  //lấy giá trị cho biến totalResults
  totalResults = data.totalResults;
  // kiểm tra các nút next, previous  đã ẩn chưa và ẩn đi
  checkBtnPrev();
  checkBtnNext();

  let html = "";
    // tạo code các new đ
    // forEach lấy giá trị của phần tử trong mảng theo thứ tự 
  data.articles.forEach(function (article) {
    html += `
        <div class="new-content">
          <div class="img-banner">
            <img src=${
              article.urlToImage
              //    ? article.urlToImage : "no_image"
            } alt ="img">
             </div>
            <div class="content">
                <h4>${article.title}</h4>
                <p>${article.description}</p>
                <button><a href=${article.url}target="_blank">view</a></button>
            </div>
        </div>
        `;
  });
 
  newsContainer.innerHTML = html;

}

// hàm kiểm tra điều kiện ẩn và ẩn nút previous
function checkBtnPrev() {
  //nếu page number là 1 thì ẩn đi
  if (pageNum.textContent == 1) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
  }
}
// hàm kiểm tra điều kiện ẩn và ẩn nút next
function checkBtnNext() {
  // nếu page Number bằng với tổng số tin tức tối đa APi trả về thì ẩn đi
  if (pageNum.textContent == Math.ceil(totalResults / userActive.pageSize)) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}

// bắt sự iện nút prev
btnPrev.addEventListener("click", function () {
  getDatanews("us", --pageNum.textContent);
});

// bắt sự kiện nút next
btnNext.addEventListener("click", function () {
  getDatanews("us", ++pageNum.textContent);
});
