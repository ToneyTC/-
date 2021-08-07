require('../css/list.less')
document.ready(function () {

  const baseUrl = 'http://139.9.177.51:5000'
  let delet = document.querySelector('.delet')
  let add = document.querySelector('.add')
  let shopBox = document.querySelector('.shopBox')
  $http.get('/book/bookList', function (res) {
    let html = '';
    res.data.forEach(function (item, index) {
      console.log(item);
      html += `
      <div class="shopBox">
      <a href="./information.html?id=${item.Id}">
      <input type="checkbox" id="select">
      <img src="${item.book_imgurl}" alt="">
      <div class="name">${item.book_name}</div>
      分类<span class="classify">${item.book_cate}</span>
      <button class="delet">删除</button>
  </div>
      `
    })

    document.querySelector('.list').innerHTML = html;

  })

  
  add.addEventListener('click', function () {
    location.href = "./add.html"
  })

})