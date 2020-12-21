$(".btn_plus").click(function() {
    var num= parseInt($('.value').text());
    $('.value').text(num+1)
  });
  $(".btn_minus").click(function() {
    var num= parseInt($('.value').text());
    if (num >= 1){
      num = $('.value').text(num-1);
    }else{
     num = num$('.value').text(num);
    }
  });
function checkbox1(){
    checkbox = document.getElementById('first_check');
        if (checkbox.checked){
            document.getElementById("form1").style.backgroundColor = "#91BF81";
            document.getElementById("form1").style.color ="#fff"
        }else{
            document.getElementById("form1").style.backgroundColor = "#F3F0EF";
            document.getElementById("form1").style.color ="#8C8C8C"
        }
};
function checkbox2(){
    checkbox = document.getElementById('second_check');
        if (checkbox.checked){
            document.getElementById("form2").style.backgroundColor = "#91BF81";
            document.getElementById("form2").style.color ="#fff"
        }else{
            document.getElementById("form2").style.backgroundColor = "#F3F0EF";
            document.getElementById("form2").style.color ="#8C8C8C"
        }
};
function dropdown(){
    if (document.getElementById("form").style.zIndex = "-1" ){
        document.getElementById("form").style.zIndex = "1";
        document.getElementById("table").style.background= "#A8A6A6";
    }
}

