// đăng nhập

function formValidateDN(frm){
    if(frm.idlg.value.length<1){
        alert("cần nhập tên đăng nhập");
    }
    if(frm.pswlg.value.length<8){
        alert("Mật khẩu không đủ 8 kí tự!");
        return false;
    }
   
}
// eye
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
$(document).ready(function(){
    $('#eye2').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
$(document).ready(function(){
    $('#eyelg').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

// đăng kí
function formValidatedangki(frm){
    if(frm.iddk.value.length<1){
        alert("cần nhập tên đăng nhập")
    };
    var emailRegdk = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegdk.test(frm.email.value)==false){
        alert("Email không hợp lệ, vui lòng nhập lại!");
        return false;
    }
    if(frm.pswdk1.value.length<8){
        alert("Mật khẩu không đủ 8 kí tự!");
        return false;
    }
    if(document.getElementById("pswdk2").value!=document.getElementById("pswdk1").value){
        alert("Mật khẩu nhập lại không khóp!");
        return false;
    }

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
$(document).ready(function(){
    $('#eye2').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});