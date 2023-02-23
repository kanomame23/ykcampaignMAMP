const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し

});

<script>
$(function() {
  $('#nav-content li a').on('click', function(event) {
    $('#nav-input').prop('checked', false);
  });
});
</script>