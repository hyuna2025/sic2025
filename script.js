function addMessage() {
  const input = document.getElementById("guestInput");
  const list = document.getElementById("guestList");
  const message = input.value.trim();

  if (message !== "") {
    const li = document.createElement("li");
    li.textContent = message;
    list.prepend(li);  // 최근 글이 위에 오게
    input.value = "";  // 입력창 초기화
  } else {
    alert("내용을 입력해주세요!");
  }
}

  // 스크롤 시 버튼 보이기/숨기기
  window.onscroll = function() {
    const button = document.getElementById("topButton");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  // 클릭하면 맨 위로 부드럽게 이동
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }