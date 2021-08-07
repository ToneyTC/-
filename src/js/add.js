require('../css/add.less')
document.ready(function () {

    const baseUrl = 'http://139.9.177.51:5000'
    let photo = document.querySelector('.photo')
    let booksImg = document.querySelector('#addPhoto')
    let typeClass = document.querySelector('#typeClass')
    let booksBtn = document.querySelector('.booksBtn')
    let bookName = document.querySelector("#bookName")
    let params = {
        bookname: '',
        category: '',
        desc: '',

    }
    // 上传图片
    booksImg.addEventListener('change', function () {

        $updateFile('/book/upload', 'imgurl', this.files[0], function (res) {
            let url = baseUrl + res.imgurl;

            document.querySelector('#booksImg').src = url;
        })
    }),
        photo.addEventListener('click', function (e) {
            booksImg.click();
            e.stopPropagation();
        })
    booksImg.addEventListener('change', function () {
        console.log(this.files[0]);
        $updateFile('/book/upload', 'imgurl', this.files[0], function (res) {
            console.log(res);
            let url = baseUrl + res.imgurl;
            document.querySelector('#booksImg').src = url;
            $http.post('/book/add', { imgurl: url }, function (res) {
            })
        })
    })
    // 上传书名，简介，种类
    booksBtn.addEventListener('click', function () {
        params.bookname = bookName.value;
        params.category = typeClass.value;
        params.desc = document.querySelector('#sign').value;
        let paramsDate=JSON.stringify(params);
        localStorage.setItem("params",paramsDate)
        $http.post('/book/add', params, function (res) {
            if (res.status == 0) {
              utils.createToast(0, '修改成功');
              setTimeout(function () {
                location.href = "./list.html"
              }, 1000);
            } else {
              utils.createToast(1, '修改失败');
            }
          })




    })



})