window.addEventListener("load", function () {
    /* var ul = this.document.querySelector(".scroll");
    var ol = this.document.querySelector(".footer"); */
    var conten = this.document.querySelector(".conten");
    var focusWidth = conten.offsetWidth;
    /* console.log(wd);
    for (var i = 0; i < ul.children.length; i++) {
        ol.children[i].setAttribute("index", i);
    }
    
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].addEventListener("touch", function () {
            var index = this.getAttribute('index');
            console.log(index);
            animate(ul, -index * wd);
        })
    } */
    var ul = conten.querySelector('ul');
    var ol = conten.querySelector('.footer');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li 
        // var li = document.createElement('li');
        // 记录当前小圆圈的索引号 通过自定义属性来做 
        ol.children[i].setAttribute('index', i);
        // 把小li插入到ol 里面
        // ol.appendChild(li);
        // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        ol.children[i].addEventListener('touchstart', function() {
            // 干掉所有人 把所有的小li 清除 current 类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 留下我自己  当前的小li 设置current 类名
            this.className = 'color';
            // 5. 点击小圆圈，移动图片 当然移动的是 ul 
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li 的索引号
            var index = this.getAttribute('index');
            // 当我们点击了某个小li 就要把这个li 的索引号给 num  
            // num = index;
            // 当我们点击了某个小li 就要把这个li 的索引号给 circle  
            // circle = index;
            // num = circle = index;
            console.log(focusWidth);
            console.log(index);

            animate(ul, -index * focusWidth);
        })
    };
    var link = this.document.querySelector(".linkman");
    var li = link.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("touchstart", function () {
            this.style.backgroundColor = "#ccc";
        });
        li[i].addEventListener("touchend", function () {
            this.style.backgroundColor = "#fff";
        })
    }
    var searc = this.document.querySelector("#sousuo");
    var magnifier = this.document.querySelector(".ri");
    magnifier.addEventListener("touchstart", function () {
        searc.style.display = "block";
        animate(searc, 173);
    });
   
})