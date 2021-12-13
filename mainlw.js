window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const BtnNext = document.querySelector(".slider-next");
    const BtnPre = document.querySelector(".slider-pre");
    const dotItem = document.querySelector(".slider-dot-item");
    const sliderLength = sliderItems.length;
    const sliderItemsWidth = sliderItems[0].offsetWidth; 
    let positionX = 0;
    let index = 0;

    BtnNext.addEventListener("click", function () {
        handleChangeSlide(1);
    });
    BtnPre.addEventListener("click", function () {
        handleChangeSlide(-1);
    });

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            positionX = positionX - sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } 
        else if (direction === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemsWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
});
// -----------------------------------------------------------Giỏ hàng----------------------------------------------------------------------------------------
var itemList={
    "sp001":{   "name":"Asus Vivobook",
                "price":16290000,
                "photo":"./assets/img/laptop_Ausus.jpg"},
    "sp002":{   "name":" MSI Gaming GF63 ",
                "price":22390000,
                "photo":"./assets/img/lap2.jpg"},
    "sp003":{   "name":"Acer Nitro Gaming AN515-57-720A i7",
                "price":28990000,
                "photo":"./assets/img/lap3.jpg"},
    "sp004":{   "name":"Dell Inspiron N3510 Pentium N5030",
                "price":11699000,
                "photo":"./assets/img/lap4.jpg"},
    "sp005":{   "name":"Dell Vostro V3400 i5 1135G7",
                "price":18899000,
                "photo":"./assets/img/lap5.jpg"},
    "sp006":{   "name":"Asus Vivobook M513UA-L1230T R5 5500U",
                "price":18499000,
                "photo":"./assets/img/lap6.jpg"},
    "sp007":{   "name":"Asus Vivobook M513UA-L1230T R5 5500U",
                "price":18499000,
                "photo":"./assets/img/lap7.jfif"},
    "sp008":{   "name":"Acer Aspire Gaming A715 42G R4ST R5 5500U",
                "price":19199000,
                "photo":"./assets/img/lap8.jpg"},
    "sp009":{   "name":" MSI Modern 14 B11MOU 852VN i5 1155G7",
                "price":18799000,
                "photo":"./assets/img/lap9.jpg"},
    "sp010":{   "name":" MSI Gaming GF65 10UE 286VN i5 10500H",
                "price":28919000,
                "photo":"./assets/img/lap10.jpg"},
    "sp011":{   "name":" ASUS Flip BR1100FKA-BP0531T N4500",
                "price": 9499000,
                "photo":"./assets/img/lap11.jpg"},
    "sp012":{   "name":" Dell Inspiron N3502 N4020",
                "price": 10999000 ,
                "photo":"./assets/img/lap12.jpg"},  
    "sp013":{   "name":" Dell Inspiron N3505 R5 3450U",
                "price": 17999000 ,
                "photo":"./assets/img/lap13.jpg"},    
    "sp014":{   "name":"  Acer Aspire 3 A315-57G-524Z i5 1035G1",
                "price": 16999000,
                "photo":"./assets/img/lap14.jfif"},   
    "sp015":{   "name":" Acer Aspire Gaming A715-42G-R05G R5 5500U",
                "price": 16999000 ,
                "photo":"./assets/img/lap15.jpg"},    
    "sp016":{   "name":" Acer Swift 3 SF314-43-R4X3 R5 5500U",
                "price":  19949000 ,
                "photo":"./assets/img/lap16.jpg"},   
    "sp017":{   "name":"Dell Inspiron N3511 i5 1135G7U",
                "price":  19999000 ,
                "photo":"./assets/img/lap17.jpg"},    
    "sp018":{   "name":"Dell Vostro V5410 i5 11320H",
                "price": 22999000,
                "photo":"./assets/img/lap18_.jpg"},   
    "sp019":{   "name":"Dell Vostro V3510 i5 1135G7",
                "price": 20399000,
                "photo":"./assets/img/lap19.jpg"}, 
    "sp020":{   "name":"Asus Zenbook Flip UX363EA-HP532T i5 1135G7",
                "price": 26799000,
                "photo":"./assets/img/lap20.jpg"},  
    "sp021":{   "name":"Acer Nitro Gaming AN515-57-56S5 i5 11400H",
                "price": 22799000,
                "photo":"./assets/img/lap21.jpg"},  
    "sp022":{   "name":" Asus Vivobook ",
                "price": 22799000,
                "photo":"./assets/img/lap24.jpg"},    
    "sp023":{   "name":" Acer Aspire A315 57G 31YD i3 1005G1 ",
                "price": 13490000,
                "photo":"./assets/img/lap22.jpg"},
    "sp024":{   "name":" Air 13 2020 M1 256GB ",
                "price": 28999000,
                "photo":"./assets/img/lap23.jfif"},    
    };
function addCart(code) {
        // var number=parseInt(document.getElementById(code).value)
        var current=parseInt(window.localStorage.getItem(code));
        if (typeof localStorage[code] === "undefined") {
            window.localStorage.setItem(code,1);
            alert("Đặt hàng thành công Laptop: "+itemList[code].name+". Số lượng: "+1);
        }
        else{
                window.localStorage.setItem(code,1 +current);
                alert("Đặt hàng thành công Laptop: "+itemList[code].name+". Số lượng: " + (1+current));
        }
    }

function showCart(){
        var totalPreTax=0;    
        for(var i=0; i<localStorage.length; i++){
          var key=window.localStorage.key(i);
          item=itemList[key];
          photo=item.photo;
          Name=item.name;
          price=item.price;
          ordernumber=window.localStorage.getItem(key);
          var fra= document.createDocumentFragment();
          var td = document.createElement('td');
          var src= document.createAttribute("src");
          src.value= photo;
          var img=document.createElement('img');
          img.setAttributeNode(src);
          img.style.width="100px";
          td.appendChild(img);
          td.style.textAlign="center";
          fra.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(Name));
          td.style.textAlign="center";
          fra.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(ordernumber));
          td.style.textAlign="right";
          fra.appendChild(td);
          var td = document.createElement('td');
          td.appendChild(document.createTextNode(price));
          td.style.textAlign="right";
          fra.appendChild(td);
          var td = document.createElement('td');
          totalPreTax+=price*ordernumber;
           // td.appendChild(document.createTextNode(price*ordernumber + "đ"));
          td.innerHTML=price*ordernumber+"đ";
          td.style.textAlign="right";
          fra.appendChild(td);
          var td = document.createElement('td');
          var a = document.createElement("a");
          var href = document.createAttribute('href');
          var data = document.createAttribute('data-code');
          href.value= "#";
          data.value= key;
          a.setAttributeNode(href);
          a.setAttributeNode(data);
          a.innerHTML= '<i  class="fa fa-trash icon-pink"></i>';
          a.onclick=function(){removeCart(this);}
          td.appendChild(a);
          td.style.textAlign="right";
          fra.appendChild(td);
          var tr = document.createElement('tr');
          tr.appendChild(fra);
          tbd=document.getElementById('kiet');
          tbd.appendChild(tr);
        }
        // tính tiền
        A=totalPreTax;
        ck=getDiscountRate();
        B=totalPreTax*ck;
        C=(10*(A-B))/100;

        var td=document.createElement('td');
        td.colSpan="6";
        td.innerHTML="Tổng thành tiên (A) = "+A+"đ";
        var tr=document.createElement('tr');
        tr.appendChild(td);
        tbd=document.getElementById('kiet');
        tbd.appendChild(tr);
        var td=document.createElement('td');
        td.colSpan="6";
        td.innerHTML="Chiết khấu(B) = "+ck+" x A = "+B+"đ";
        var tr=document.createElement('tr');
        tr.appendChild(td);
        tbd=document.getElementById('kiet');
        tbd.appendChild(tr);
        var td=document.createElement('td');
        td.colSpan="6";
        td.innerHTML="Thuế (C) = 10% x (A - B) = "+C+"đ";
        var tr=document.createElement('tr');
        tr.appendChild(td);
        tbd=document.getElementById('kiet');
        tbd.appendChild(tr);
        var td=document.createElement('td');
        td.colSpan="6";
        td.innerHTML="Tổng đơn hàng = A - B + C = "+(A-B+C)+"đ";
        var tr=document.createElement('tr');
        tr.appendChild(td);
        tbd=document.getElementById('kiet');
        tbd.appendChild(tr);
                        // window.localStorage.clear();
 }
function removeCart(data){
    var bol=confirm("Bạn muốn xóa  đặt hàng sản phẩm này.");
    if(bol==true){
        var code = data.getAttribute("data-code");
        if(typeof window.localStorage[code] !== "undefined"){
            window.localStorage.removeItem(code);
            document.getElementById("kiet").innerHTML="";
            showCart();
        }
    }
}
function xacnhan(){
  var p=document.createElement("p");
  if(localStorage.length<=0){
      alert("Bạn chưa đặt mua sản phẩm nào!");
  }
  else{
    for(var i=0; i<localStorage.length; i++){
        var key=window.localStorage.key(i);
        var x=window.localStorage.getItem(key);
        p.appendChild(document.createTextNode("Laptop:"+itemList[key].name+". Số lượng = "+x+"\n"));
    }
    alert("Xác nhận đặt hàng \n"+p.textContent);
  }
}
function getDiscountRate(){
    var d=new Date();
    var weekday=d.getDay();
    var totalMins=d.getHours()*60+d.getMinutes();
    if(weekday>=1&&weekday<=3&&((totalMins>=420&&totalMins<=660)||(totalMins>=780&&totalMins<=1020)))
        return 0.1;
    return 0;
}


/* Đăng ký */ 

function formValidateDK(frm){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailReg.test(frm.email.value)==false){
        alert("Email không hợp lệ, vui lòng nhập lại!");
        return false;
    }
    if(frm.psw.value.length<8){
        alert("Mật khẩu không đủ 8 kí tự!");
        return false;
    }
    if(frm.psw2.value.length<8){
        alert("Mật khẩu ở ô nhập lại không đủ 8 kí tự!")
        return false;
    }
    alert("Đã đăng ký thành công!");
    return true;
}
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});