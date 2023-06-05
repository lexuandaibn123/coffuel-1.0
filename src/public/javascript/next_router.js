const next_router = document.getElementById("next_router");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  const text = next_router.value.toString();
  let new_text = "";
  if (text[0] == "/") new_text = text.slice(1);
  else new_text = text;
  window.location.assign("/admin/" + new_text);
});
