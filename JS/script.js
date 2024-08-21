// ScrollGiveClass 플러그인 호출
var sgc1 = new ScrollGiveClass(".fix",{
    baseline:50
});

  //  press영역 스와이퍼 호출
  const swiper2 = new Swiper('#press .inner', {
    wrapperClass: 'slider',
    slideClass: 'item',
    slidesPerView: 1,
    spaceBetween: 10,
    pagination:{
      el:'.dot',
      bulletActiveClass:'active',
      clickable:true
    },
    breakpoints: {
      320: { //화면의 너비가 320이상 적용 옵션
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: { //화면의 너비가 640이상 적용 옵션
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: { //화면의 너비가 768이상 적용 옵션
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: { //화면의 너비가 1024이상 적용 옵션
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  swiper2.slidesPerView = 4;