var languageStrings = {};

function switchLanguage(languageCode) {
  // Kiểm tra xem ngôn ngữ đã được tải chưa
  if (languageCode in languageStrings) {
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var key = element.getAttribute("data-i18n");
      // Thay thế văn bản hiện tại bằng chuỗi ngôn ngữ mới
      element.textContent = languageStrings[languageCode][key];
    }
  } else {
    // Tải ngôn ngữ nếu chưa được tải
    loadLanguage(languageCode);
  }
}
loadLanguage("en");
loadLanguage("vi");
