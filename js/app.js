const searchInp = document.querySelector("#searchInp");
const submitBtn = document.querySelector("#submitBtn");
const todoForm = document.querySelector("#todoForm");
const productList = document.querySelector("#productList");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = searchInp.value;
  searchInp.value = "";

  productList.innerHTML += `<li class="list-item">${text}<div><img src="img/edit-tools-and-utensils-svgrepo-com.svg" alt="" width="20"><img id="delete" src="img/delete-2-svgrepo-com (1).svg" alt="" width="20"></div></li>`;
});
