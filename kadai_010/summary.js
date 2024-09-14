$(function() {
  // 文字色を変更
  $('#change-color').on('click', function() {
    $('#target').css('color', 'blue');
  });

  // 文字内容を変更
  $('#change-text').on('click', function() {
    $('#target').text('こんばんは！');
  });

  // フェードアウト
  $('#fade-out').on('click', function() {
    $('#target').fadeOut('slow');
  });

  // フェードイン
  $('#fade-in').on('click', function() {
    $('#target').fadeIn('slow');
  });
});