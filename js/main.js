// ハンバーガーメニュー //
var hamburger = $('.hamburger-menu');
//OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

//カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
  infinite: true,
  dots: true,
  arrows: true,
  fade: true
});

//  アコーディオン
// 最初に全部閉じておく
$('.accordion-content').hide();

// アコーディオンのタイトルがクリックされたら
$('.accordion-service').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(this).next('.accordion-content');

  // .accordion-contentを表示・非表示
  content.slideToggle();

  // 矢印を上下反対
  $(this).find('.accordion-service-arrow').toggleClass('open');
});