window.onload = function () {
    // 学校主页
    var first = document.querySelector(".fir");
    var second = document.querySelector(".sec");
    second.onclick = function () {
        window.location.href = "https://www.tyust.edu.cn/";
    }
    // 返回旧网址
    first.onclick = function () {
        window.location.href = "https://jwc.tyust.edu.cn/old/";
    }

    // 中间列表栏
    var lists = document.querySelectorAll(".list li")
    var dl = document.querySelectorAll(".list li dl")
    var index=0;
    for (var i = 0; i < lists.length; i++) {
        lists[i].num=i;
        lists[i].onmouseover = function () {
            index=this.num;
            set();   
        }
        lists[i].onmouseout = function () {
           clear();
        }
    }
    function clear(){
        for (var i = 0; i < lists.length; i++) {
            dl[i].style.display="none";
            lists[i].style.backgroundColor = "#0b6cb8"
        }
    }
    function set() {
        for (var i = 0; i < lists.length; i++) {
            lists[i].style.backgroundColor = "#0b6cb8"
            dl[i].style.display="none";
        }
        lists[index].style.backgroundColor = "#0a5894";
        dl[index].style.display="block";
        dl[index].style.backgroundColor="#0a5894";
    }


    // 第一个轮播图
    var allA = document.querySelectorAll(".nav a");
    var lunbo = document.querySelector(".lunbo");

    var index = 0;
    allA[index].style.backgroundColor = "black";
    for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            index = this.num;
            lunbo.style.left = -1420 * index + "px";
            setA();
            autoChange();
        }
    };
    function setA() {
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "#ccc"
        }
        allA[index].style.backgroundColor = "black";
    }

      // 第二个轮播图
      var lis = document.querySelectorAll(".li a");
      var nav1 = document.querySelector(".nav1");
  
      var index = 0;
      lis[index].style.backgroundColor = "#0b6cb8";
      for (var i = 0; i < lis.length; i++) {
        lis[i].num = i;
        lis[i].onclick = function () {
              index = this.num;
              nav1.style.left = -600 * index + "px";
              setB();
              autoChange();
          }
      };
      function setB() {
          for (var i = 0; i < lis.length; i++) {
            lis[i].style.backgroundColor = "#333"
          }
          lis[index].style.backgroundColor = "#0b6cb8";
      }

      function autochange(){
        setInterval(function(){
            index++;
            move(imgList,"left",-600*index,20,function(){})
        },3000)
      }
}