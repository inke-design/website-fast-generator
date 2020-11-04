/**
 * name:   plugin-dragg-move.js
 * author:  wangteng
 * date:    2020-11-3
 *
 */
$(function () {
  var src_posi_Y = 0,
    dest_posi_Y = 0,
    move_Y = 0,
    is_mouse_down = false,
    destHeight = 30;
  $("#expander").mousedown(function (e) {
    // 开启div遮罩记录位置
    $("#bottom-panel-box").css("display", "block");
    src_posi_Y = e.pageY;
    is_mouse_down = true;
  });
  $(document)
    .bind("click mouseup", function (e) {
      if (is_mouse_down) {
        is_mouse_down = false;
        $("#bottom-panel-box").css("display", "none");
      }
    })
    .mousemove(function (e) {
      if(!is_mouse_down) return
      dest_posi_Y = e.pageY;
      move_Y = src_posi_Y - dest_posi_Y;
      src_posi_Y = dest_posi_Y;
      destHeight = $("#bottom-panel").height() + move_Y;
      Vvveb.MonacoEditorPlugin.isActive = true
      if (is_mouse_down && move_Y ) {
        $("#bottom-panel").css("height", destHeight > 30 ? destHeight : 30);
        Vvveb.MonacoEditorPlugin.setEditorLayout()
      }
    });
});
