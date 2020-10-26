var ColorInput = $.extend({}, ColorInput, {
  events: [["change", "onChange", "input"]],
  setValue: function setValue(value) {
    var color = this.rgb2hex(value);
    $('input', this.element).val();
    $('i', this.element).css('background-color', value);
  },
  init: function init(data) {
    var colorinput = this.render("bootstrap-color-picker-input", data);
    var colorpicker = $('.input-group', colorinput).colorpicker();
    return colorinput;
  }
});