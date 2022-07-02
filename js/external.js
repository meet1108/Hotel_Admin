var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}



$(document).ready(function(){
        $(".toggle-btn").click(function(){
            $('#sidebar').toggleClass('active');
            $('.sidebar-menu li span').toggleClass('menu-hide');
});
});

$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $('#main-content').toggleClass('active2');
});
});



