//文字逐个显示
var text1=document.getElementById('text1'),
	text2=document.getElementById('text2');
	n=0;
	timer=setInterval(function()
	{
		text2.innerHTML=text1.innerHTML.substring(0,n);
		n++;
		if(text2.innerHTML==text1.innerHTML)
		{
			clearInterval(timer);
		}
	},300);



var Page=document.getElementById('page');
var Pspan=Page.getElementsByTagName('span');// 获取a对象

for(var i=0;i<Pspan.length;i++)
{
	Pspan[i].index=i;
	Pspan[i].onclick=function()// 点击a对象
	{
		for(var j=0;j<Pspan.length;j++)
		{
			Pspan[j].style.color="#555555";
			Pspan[j].style.borderBottom="none";
		}
		Pspan[this.index].style.color="#FF2741";// 改变a中的字体颜色

		Pspan[this.index].style.borderBottom="2px solid #FF2741";// 加下边框	
	}
}
// 弹出二维码
var IOS=document.getElementById('iOS');
var Almenu=IOS.getElementsByClassName('Almenu')[0];
var Android=document.getElementById('Android');
var Armenu=Android.getElementsByClassName('Armenu')[0];

IOS.onmouseover=function ()
{
	Almenu.style.display="block";
	IOS.onmouseout=function ()
	{
		Almenu.style.display="none";
	}
}
Android.onmouseover=function ()
{
	Armenu.style.display="block";
	Android.onmouseout=function ()
	{
		Armenu.style.display="none";
	}
}


var time;
var topbtn=document.getElementById('sidebar2');


//获取视口的高度
var clientHeight=document.documentElement.clientHeight;
window.onscroll=function(){
	//获取页面滚动的高度
	var topHeight=document.body.scrollTop||document.documentElement.scrollTop;
	if(topHeight>clientHeight){
		topbtn.style.display="block";
	}
	else{
		topbtn.style.display="none";
	}
}

topbtn.onclick=function(){
	time=setInterval(top,30);
	function top(){
		var topHeight1=document.body.scrollTop||document.documentElement.scrollTop;
		var j=Math.floor(-topHeight1/4);
		document.documentElement.scrollTop=document.body.scrollTop=topHeight1+j;
		if(topHeight1==0)
		{
			clearInterval(time);
		}
	}
}


var Bbtn=document.getElementsByClassName('Bbtn');
var Bright=document.getElementsByClassName('Bright')[0];
var Bimg=Bright.getElementsByTagName('img');
var x=0;

for(x=0;x<Bbtn.length;x++)
{
	Bbtn[x].index=x;
	Bbtn[x].onclick=function ()
	{
		for(var i=0;i<Bbtn.length;i++)
		{
			Bimg[i].style.display="none";
		}
		Bimg[this.index].style.display="block";
	}
}
