$('#button').on({
  //ひとつ目のイベントハンドラ
  'mouseenter': function() {
    alert("マウスオーバーされました");
  },
  //ふたつ目のイベントハンドラ
  'mouseleave': function() {
    alert("マウスアウトされました");
  }
});