/*商品评分效果*/
$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
//	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
})

//尺码

//选中变色
$(function(){
    var ale="M";
    var num="199";
    $('#size a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        return ale=$(this).html();
    });
    $('#sel').change(function(){
        var $num=$(this).val();
        $('#price').html($num*199);
        return num=$('#price').html();
    });
    //立即购买
    $('#buy').click(function(){
        var sum=$('#sel').val();
        if(confirm("选择的尺寸是："+ale+"\n"+"\n"+"购买数量是："+sum+"\n"+"\n"+ "总价为："+num+"元")){
            alert("已经为您下单");
        }else{
            alert("已经为您取消了订单");
        }
    });
});



/*使用jqzoom*/
$(function(){
	$(".jqzoom").jqueryzoom({
		xzoom:300, //放大图的宽度(默认是 200)
		yzoom:300, //放大图的高度(默认是 200)
		offset:5, //离原图的距离(默认是 10)
		position:"right", //放大图的定位(默认是 "right")
		preload:1
	});
});