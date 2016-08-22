$(document).ready(function(){
	//旋转角度
	var angles;
	//可抽奖次数
	var clickNum = 5;
	//旋转次数
	var rotNum = 0;
	//中奖公
	var notice = null;
	//转盘初始化
	var color = ["#626262","#787878","rgba(0,0,0,0.5)","#DCC722","white","#FF4350","red","blue","#fffaaa","#124539"];
	var info = ["订单九折惠","谢谢参与","订单七折惠","谢谢参与","订单五折惠","谢谢参与","课程0元购","谢谢参与","再转一次","谢谢参与","再转一次","谢谢参与"];
	
	canvasRun();
	$('#tupBtn').bind('click',function(){
		if (clickNum >= 1) {
			//可抽奖次数减一
			clickNum = clickNum-1;
			//转盘旋转
			runCup();
			//转盘旋转过程“开始抽奖”按钮无法点击
			$('#tupBtn').attr("disabled", true);
			//旋转次数加一
			rotNum = rotNum + 1;
			//“开始抽奖”按钮无法点击恢复点击
			setTimeout(function(){
				alert(notice);
				$('#tupBtn').removeAttr("disabled", true);
			},6000);
		}
		else{
			alert("亲，抽奖次数已用光！");
		}
	});

	//转盘旋转
	function runCup(){
		probability();
		var degValue = 'rotate('+angles+'deg'+')';
		$('#myCanvas').css('-o-transform',degValue);           //Opera
		$('#myCanvas').css('-ms-transform',degValue);          //IE浏览器
		$('#myCanvas').css('-moz-transform',degValue);         //Firefox
		$('#myCanvas').css('-webkit-transform',degValue);      //Chrome和Safari
		$('#myCanvas').css('transform',degValue);
	}

	//各奖项对应的旋转角度及中奖公告内容
	function probability(){
		//获取随机数
		var num = parseInt(Math.random()*(11 - 0 + 0) + 0);
		//概率
		if ( num == 0 ) {
			angles = 2160 * rotNum + 1800;
			notice = info[0] ;
		}
		//概率
		else if ( num == 1 ) {
			angles = 2160 * rotNum + 1830;
			notice = info[11];
		}
		//概率
		else if ( num == 2 ) {
			angles = 2160 * rotNum + 1860;
			notice = info[10];
		}
		//概率
		else if ( num == 3 ) {
			angles = 2160 * rotNum + 1890;
			notice = info[9];
		}
		//概率
		else if ( num == 4 ) {
			angles = 2160 * rotNum + 1920;
			notice = info[8];
		}
		//概率
		else if ( num == 5 ) {
			angles = 2160 * rotNum + 1950;
			notice = info[7];
		}
		//概率
		else if ( num == 6 ) {
			angles = 2160 * rotNum + 1980;
			notice = info[6];
		}
		//概率
		else if ( num == 7 ) {
			angles = 2160 * rotNum + 2010;
			notice = info[5];
		}
		//概率
		else if ( num == 8 ) {
			angles = 2160 * rotNum + 2040;
			notice = info[4];
		}
		//概率
		else if ( num == 9 ) {
			angles = 2160 * rotNum + 2070;
			notice = info[3];
		}
		//概率
		else if ( num == 10 ) {
			angles = 2160 * rotNum + 2100;
			notice = info[2];
		}
		//概率
		else if ( num == 11 ) {
			angles = 2160 * rotNum + 2130;
			notice = info[1];
		}

	}

	//绘制转盘
	function canvasRun(){
		var canvas=document.getElementById('myCanvas');
		var canvas01=document.getElementById('myCanvas01');
		var canvas03=document.getElementById('myCanvas03');
		var canvas02=document.getElementById('myCanvas02');
		var ctx=canvas.getContext('2d');
		var img=document.getElementById("scream");
       img.onload = function() {
	   ctx.drawImage(img,0,0);
     } 

		 // var img=new Image();
		// img.onload=function(){
		// 	ctx.drawImage(img,0,0);
		// }
		// img.src="../../img/disk_4.png"
		var ctx1=canvas01.getContext('2d');
		var ctx3=canvas03.getContext('2d');
		var ctx2=canvas02.getContext('2d');
		createCircle();
		createCirText();
		initPoint();
	
		//外圆
		function createCircle(){
	        var startAngle = 0;//扇形的开始弧度
	        var endAngle = 0;//扇形的终止弧度

	        //画一个12等份扇形组成的圆形
	        for (var i = 0; i< 12; i++){
	            startAngle = Math.PI*(i/6-1/12);
	            endAngle = startAngle+Math.PI*(1/6);
	            ctx.save();
	            ctx.beginPath(); 
	            ctx.arc(150,150,100, startAngle, endAngle, false);
	            ctx.lineWidth = 120;
	            if (i%2 == 0) {
	            	ctx.strokeStyle =  color[0];
	            }else{
	            	ctx.strokeStyle =  color[1];
	            }
	            ctx.stroke();
	            ctx.restore();
	        } 
	    }

	    //各奖项
	    function createCirText(){	 
		    ctx.textAlign='start';
		    ctx.textBaseline='middle';
		    ctx.fillStyle = color[3];
		    var step = 2*Math.PI/12;
		    for ( var i = 0; i < 12; i++) {
		    	ctx.save();
		    	ctx.beginPath();
		        ctx.translate(150,150);
		        ctx.rotate(i*step);
		        ctx.font = " 20px Microsoft YaHei";
		        ctx.fillStyle = color[3];
		        ctx.fillText(info[i],-30,-115,60);
		        // ctx.font = " 14px Microsoft YaHei";
		        // ctx.fillText(info1[i],-30,-95,60);
		        ctx.closePath();
		        ctx.restore();
		    }
		}

		function initPoint(){ 
	        //箭头指针
	        ctx1.beginPath();
	        ctx1.moveTo(100,24);
	        ctx1.lineTo(90,62);
	        ctx1.lineTo(110,62);
	        ctx1.lineTo(100,24);
	        ctx1.fillStyle = color[5];
	        ctx1.fill();
	        ctx1.closePath();
	        //中间小圆
	        ctx3.beginPath();
	        ctx3.arc(100,100,40,0,Math.PI*2,false);
	        ctx3.fillStyle = color[5];
	        ctx3.fill();
	        ctx3.closePath();
	        //小圆文字
	        ctx3.font = "Bold 20px Microsoft YaHei"; 
		    ctx3.textAlign='start';
		    ctx3.textBaseline='middle';
		    ctx3.fillStyle = color[4];
	        ctx3.beginPath();
	        ctx3.fillText('开始',80,90,40);
	        ctx3.fillText('抽奖',80,110,40);
	        ctx3.fill();
	        ctx3.closePath();
	        //中间圆圈
	        ctx2.beginPath();
	        ctx2.arc(75,75,75,0,Math.PI*2,false);
	        ctx2.fillStyle = color[2];
	        ctx2.fill();
	        ctx2.closePath();
		}
	}
});