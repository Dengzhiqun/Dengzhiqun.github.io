function load() {
    //在页面未加载完毕之前显示的loading Html自定义内容
    var template = '<div id="#box"><canvas id="canvas"></canvas><div id="mengban"><p>Hello</p><p>Everybody</p><p>Welcome To My Word</p> </div></div>';   
    //呈现loading效果  
    document.write(template);    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    //全屏
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    //文字
    var txts = "01";
    //转为数组
    txts = txts.split("");
    var font_size = 16;
    var columns = c.width/font_size; 
    //用于计算输出文字时坐标，所以长度即为列数
    var drops = [];
    //初始值
    for(var x = 0; x < columns; x++)
        drops[x] = 1; 

    //输出文字
    function draw(){
        //让背景逐渐由透明到不透明
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#0F0"; //文字颜色
        ctx.font = font_size + "px arial";
        //逐行输出文字
        for(var i = 0; i < drops.length; i++){
            //随机取要输出的文字
            var text = txts[Math.floor(Math.random()*txts.length)];
            //输出文字，注意坐标的计算
            ctx.fillText(text, i*font_size, drops[i]*font_size);  
            //如果绘满一屏或随机数大于0.95（此数可自行调整，效果会不同）
            if(drops[i]*font_size > c.height || Math.random() > 0.95)
                drops[i] = 0;
            //用于Y轴坐标增加
            drops[i]++;
        }
    }
    var timer = setInterval(draw, 33);
    setTimeout(function () {
        $("#canvas").animate({opacity:0},2000,function () {
           $("#canvas").remove();
        });
    },10000);
    setTimeout(function () {
        $("#mengban").remove();
    },9000);
    setTimeout(function () {
        $("#hide").css({opacity:1});
        $("#btn").animate({opacity:1});
    },10000);
    setTimeout(function () {
        $("#sidebar").animate({width:350 + "px"},800);
    },12500);
}
load();
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
    getInsert();
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
    })
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
    })
}
function  dataProcessing(datas,con) {
    var data = eval(datas);
    var informate = data[0];
    switch(con.innerHTML){
        case "个人信息":
            var arrayData = [informate.sex,informate.national,informate.live,informate.birth];
            information(arrayData);
        break;
        case "技能清单":
            var arrayData = [informate.skills1,informate.skills2,informate.skills3,informate.skills4,informate.skills5,informate.skills6];
            information(arrayData);
        break;
        case "工作经历":
            var arrayData = [informate.company,informate.position,informate.responsibilities];
            information(arrayData);
        break;
        case "教育经历":
            var arrayData = [informate.education];
            information(arrayData);
        break;
        case "自我评价":
            var arrayData = [informate.evaluation1,informate.evaluation2,informate.evaluation3];
            information(arrayData);
        break;
    }
}
function createL(array) {
    var ary = [];
    for (var i = 0; i < array.length; i++) {
        ary.push("<li class='animated zoomIn'>"+ array[i] +"</li>");
    };
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
    if (name == ""|| text == "") {
        alert("建议或称谓未填写");
        return
    }
    var datas = {names:name,phones:phone,textes:text};
    $.ajax({
        type:"POST",
        url:"./postInformal.php",
        data:datas,
        success:function (datas) {
            if (datas == "success") {
                alert("非常感谢");
            }
        },
        error:function (error) {
            console.log(error);
        }
    });
    getInsert()
}
function output(datas) {
    if (datas == "") {
        return
    }
    var data = eval(datas);
    var array = [];
    for (var i = 0; i < data.length; i++) {
        array.push("<p>"+data[i].user+"："+data[i].content+"</p>");
    };
    $("#advice p").remove();
    $("#advice").append(array);
}