require('../css/infomation.less')
document.ready(function () {
    let pid = ''
    $http.get('/book/detail/',{ id: utils.strToObj(str).id }, function (res) {
        let html = '';
        res.data.forEach(function (item, index) {
            console.log(item);
            html += `
            <img src="${book_imgurl}" alt="">
            <div>书名</div><span class="bookname">${book_name}</span>
            <div>添加时间</div><span class="time">${book_ctime}</span>
            <div>所属分类</div><span class="category">${book_cate}</span>
            <div>简介</div><span class="desc">${book_desc}</span>
          `
        })

        document.querySelector('.list').innerHTML = html;

    })


    add.addEventListener('click', function () {
        location.href = "./add.html"
    })


})