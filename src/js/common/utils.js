/**
 * 工具函数
 * 封装的函数
 */




const utils = {


  /**
   * @createToast 封装组件
   * @msg  String 提醒文本
   * @status  Number  状态（1：失败，0：成功）
   * @return 直接向页面写入了DOM节点 不需要接收返回数据
   */

  createToast: function (status, msg) {
    //创建div 
    let toast = document.createElement('div');
    //给创建的div 添加类名
    toast.className = 'toast';
    //iconfont 图标
    // html = `
    //   <p>
    //     <i class="iconfont ${status === 0 ? 'icon-true' : 'icon-flase'}">
    //   </p>
    // `
    let html = `
        <p>
          <span class="icon">${status === 0 ? '√' : '×'}</span>
        </p>
        <p>${msg}</p>
      `;
    //将toast 的内容添加到 toast 
    toast.innerHTML = html;
    //获取body
    let bodyDom = document.querySelector('body');

    //给bodyDom 添加 html代码
    bodyDom.appendChild(toast);
    //1s之后 清除

    setTimeout(function () {
      toast.remove();
    }, 1000)
  },

  /**
   * @createFooter   底部公共组件的封装
   * @page  String  当前调用的页面
   * @return 直接向页面写入了DOM节点 不需要接收返回数据
   */
  createFooter: function (page) {
    let footer = document.createElement('footer');
    footer.className = 'dpflex jscon'
    // 如果被选中的页面  footer-item active  
    //没有被选中的页面   footer-item
    let html = `
        <a href="./home.html">
        <div class="${page === 'home' ? 'footer-item active' : 'footer-item'}">
          <p>
            <i class="iconfont iconhome"></i>
          </p>
          <p>首页</p>
        </div>
      </a>
      <a href="./sports.html">
        <div class="${page === 'sports' ? 'footer-item active' : 'footer-item'} ">
          <p>
            <i class="iconfont iconsports"></i>
          </p>
          <p>运动</p>
        </div>
      </a>
      <a href="./about.html">
        <div class="${page === 'about' ? 'footer-item active' : 'footer-item'}">
          <p>
            <i class="iconfont iconmine"></i>
          </p>
          <p>我的</p>
        </div>
      </a>
    `;

    footer.innerHTML = html;
    document.querySelector('body').appendChild(footer);
  },


  /**
   * @ strToObj
   * @ str String  '?id=6&name=zangmazi'
   * @return Object  {id:6,name:zhangmazi}
   */
  strToObj: function (str) {
    let obj = {};
    str = str.substr(1);
    //id=6&name=zangmazi
    let arr = str.split('&');
    //['id=6','name=zhangmazi']

    arr.forEach(function (item, index) {
      let arr1 = item.split('=');
      //[id,6]  [name,zhangmazi]
      obj[arr1[0]] = arr1[1];
    })
    return obj;
  }


}

//挂载
window.utils = utils