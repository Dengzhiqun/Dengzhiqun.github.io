window.onload = function () {
    var bool = false;
    $("#btn").on("click",function () {
        if (bool) {
            $("#sidebar").animate({width:350 + "px"},600);
            close();
            bool = false;
        }else{
            $("#sidebar").animate({width:0},600);
            start();
            bool = true;
        }   
    });
    $("#resume_left ul li").on("click",rep);
    $("nav ul li a").on("click",routing);
    $("#mit").on("click",postInformate); 
}; 
function getInsert() {
    $.ajax({
        type:"GET",
        url:"./getInformal.php",
        success:function (datas) {
            output(datas);
        },
        error:function (error) {
            throw(error);
        }
    });
}
function rep() {
    for (var i = 0; i < $("#resume_left ul li").length; i++) {
        $("#resume_left ul li")[i].className = "";
    }
    this.className = "active";
    content(this);
}
function close() {
    $("#btn span").animate({top:13 + "px"},700);
    $("#btn_center").animate({opacity:0},700);
}
function start() {
    $("#btn_top").animate({top:6 + "px"},500);
    $("#btn_center").animate({opacity:1,top:13 + "px"},700); 
    $("#btn_bottom").animate({top: 20 + "px"},500);
}
function content(con) {
    $.ajax({
        type:'GET',
        url:"./config.php",
        success:function (datas) {
            dataProcessing(datas,con);
        },
        error:function (errors) {
            alert(errors);
        }
    });
}
function  dataProcessing(datas,con) {
    var data = JSON.parse(datas);
    var informate = data[0];
    var arrayData;
    switch(con.innerHTML){
        case "个人信息":
            arrayData = [informate.sex,informate.national,informate.live,informate.birth];
            information(arrayData);
        break;
        case "技能清单":
            arrayData = [informate.skills1,informate.skills2,informate.skills3,informate.skills4,informate.skills5,informate.skills6];
            information(arrayData);
        break;
        case "工作经历":
            arrayData = [informate.company,informate.position,informate.responsibilities];
            information(arrayData);
        break;
        case "教育经历":
            arrayData = [informate.education];
            information(arrayData);
        break;
        case "自我评价":
            arrayData = [informate.evaluation1,informate.evaluation2,informate.evaluation3];
            information(arrayData);
        break;
    }
}
function createL(array) {
    var ary = [];
    for (var i = 0; i < array.length; i++) {
        ary.push("<li class='animated zoomIn'>"+ array[i] +"</li>");
    }
    return ary;
}
function removeL() {
    $("#resume_right ul li").remove();
}
function information(data) {
    removeL();
    var array = createL(data);
    $("#resume_right ul").append(array);
}
function routing() {
    switch(this.innerHTML){
        case "首页":
            rotate($("#said"));
        break;
        case "音乐":
            rotate($("#music"));
        break;
        case "简历":
            rotate($("#resume"));
        break;
        case "留言板":
            getInsert();
            rotate($("#leaveMessage"));
        break;
    }
}
function rotate(obj) {
    $("#routing section").css({display:"none"});
    obj.slideDown(1000);
}
function postInformate() {
    var name = $("#name").val();
    var phone = $("#phone").val();
    var text = $("#text").val();
    if (name === ""|| text === "") {
        // alert("建议或称谓未填写");
        return;
    }
    var datas = {names:name,phones:phone,textes:text};
    $.ajax({
        type:"POST",
        url:"./postInformal.php",
        data:datas,
        success:function (datas) {
            if (datas == "success") {
                
            }
        },
        error:function (error) {
            console.log(error);
        }
    });
    getInsert();
}
function output(datas) {
    if (datas === "") {
        return;
    }
    var data = JSON.parse(datas);
    var array = [];
    for (var i = 0; i < data.length; i++) {
        array.push("<p>"+data[i].user+"："+data[i].content+"</p>");
    }
    $("#advice p").remove();
    $("#advice").append(array);
}