$(function(){
    //브라우저를 스크롤 할때
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        //변수 scroll에 현재 스크롤 한 만큼의 거리를 저장
        // console.log(scroll)
        $('section').css('left',-scroll)//section의 left값을 스크롤한 거리만큼 마이너스 값으로 적용하여 이동
    });

    //포폴이 추가됐을때 스크롤 거리와 section의 넓이를 변경하는 코드
    let numAc = $('article').length;//article의 개수를 저장
    let widSec = 200*numAc;//article 넓이에 개수를 곱한 값을 저장(article요소의 총 넓이)
    let widTotal = widSec+600;//widSec에 600을 더한 값을 저장(패널이 하나 열렸을시의 총 넓이)

    $('section').width(widTotal);//section의 넓이를 widTotal값으로 대입
    $('body').height(widSec);//body의 높이 값을 변수widSec의 값으로 대입

    $('html,body').animate({'scrollTop':widSec},2000);
    //문서의 스크롤 거리를 변수 widSec로 animate함수를 이용하여 애니메이션 효과 적용

    //각 article의 h2를 클릭했을때
    $('article h2').click(function(e){
        e.preventDefault();//a요소의 링크기능 제거
        let index = $(this).parent().index();//클릭한 h2의 부모인 article의 순서값을 저장
        let src = $(this).find('a').attr('href');//클릭한 h2의 자식인 a요소의 href속성값을 저장(큰 이미지 경로)
        let posAc = 200*index;//현재 클릭한 article의 순서값에 200(페널의 넓이 )을 곱한 값을 저장

        $('article').removeClass('on');//모든 article요소에 on클래스를 제거
        $(this).parent().addClass('on');//클릭한 순서의 article에만 on클래스 추가

        $('article > img').attr('src','');//모든 article p img의 이미지 경로를 제거
        $(this).siblings('p').find('img').attr('src',src);//클릭한 h2요소의 형제들 중에서 p요소를 선택한 후 자식인 img요소의 src속성값을 src변수로 적용
        $('html,body').animate({'scrollTop':posAc},700);//클릭한 패널이 페이지 왼쪽으로 이동시키기위해 스크롤 이동값을 posAc로 0.7초동안 이동
    });

    //닫기 버튼 클릭시
    $('span').click(function(){
        $('article').removeClass('on');//모든 article요소의 on클래스 제거
    });

    //#navi li를 클릭했을때
    $('#navi>li').click(function(){
        let i = $(this).index();//클릭한 li의 순서값을 저장
        let posNavi = 1000*i;//1000곱하기 li의 순서값을 저장

        $('#navi > li, article').removeClass('on');//모든 #navi>li와 article요소에 on클래스를 제거
        $(this).addClass('on');//클릭한 요소에 on클래스 추가
        $('html,body').stop().animate({'scrollTop':posNavi},500);//문서의 스크롤 이동값을 변수 posNavi로 0.5초 동안 적용
    })
})