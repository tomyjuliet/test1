$(document).ready(function () {

  $(".gnb").hover(function(){ 
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  //주메뉴 오버시 서브박스 배경색과 왼쪽에 이미지 나오게 함
  $(".main").hover(function () {

    let oldimg = 0; //기존에 보이는 이미지
    let newimg = $(this).index(); //새로 바뀌는 이미지

    // $(this).find(".sub_all").css({ "background": "#dbe4ea"});

    $(".subBoxImg ul li").eq(oldimg).stop().hide("slow"); //기존이미지는 숨기기
    $(".subBoxImg ul li").eq(newimg).stop().show("slow"); //새로 선택된 이미지는 보이기
    oldimg = newimg; //위에서 새로 바뀐 이미지는 다시 기존이미지에 저장

  },function(){
    $(this).find(".sub_all").css({ "background": "#fff"});
    $(".subBoxImg ul li").stop().hide();
  });




  /* main */

  let $img = $(".changeimg ul li");
  let $text = $(".changeimg ul li .des");
  let $lbtn = $(".side_btn .lbtn");
	let $rbtn = $(".side_btn .rbtn"); 
  let oldImg=0;  
  let newImg=0; 
  let oldText=0;  
  let newText=0;
  let imgCount=$img.length;
  let textCount=$img.length;


  //이미지&텍스트 전환효과 함수
  function changeImg(newImg){ 

    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
			$img.eq(newImg).addClass("imgVisible"); 
    }
    oldImg = newImg;

  }

  function changeText(newText){ 

    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
			$text.eq(newText).addClass("textVisible"); 
    }
    oldText = newText;

  }
 
  //자동함수 생성
  function autoImg(){

    newImg++;
    if(newImg>imgCount-1){ 
      newImg=0;
		}
		changeImg(newImg);

  }

  function autoText(){

    newText++;
    if(newText>textCount-1){ 
      newText=0;
		}
		changeText(newText)

  }

  timer1=setInterval(autoImg,4000); 
  timer2=setInterval(autoText,4000); 


  //좌우버튼 클릭시.....
  $rbtn.click(function(){

    clearInterval(timer1);
    clearInterval(timer2);

    newImg++;
		if(newImg>imgCount-1){ 
      newImg=0;
		}
		changeImg(newImg);

    newText++;
		if(newText>textCount-1){ 
      newText=0;
		}
		changeText(newText);

    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000); 

  });

  $lbtn.click(function(){

    clearInterval(timer1);
    clearInterval(timer2);
    
    newImg--;
		if(newImg<0){ 
      newImg=imgCount-1;
		}
		changeImg(newImg);

    newText--;
		if(newText>textCount-1){ 
      newText=textCount-1;
		}
		changeText(newText);

    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000); 

  });




  $(".tab li").click(function(){

    //선택되지 않은 모든 이미지는 회색이미지로....  
    for(i=0;i<4;i++){  
      $(".tab li").eq(i).find("img").attr({"src":"image/tab"+i+".png"}); 
    }

    inum=$(this).index();
    $(this).find("img").attr({"src":"image/tabon"+inum+".png"});

    $(".i1").removeClass("active");  //css에서 적용된 1번째 현재위치활성화 해지

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active"); 

  });






});