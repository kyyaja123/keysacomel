function showMessage() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
  }
  
  function backToIntro() {
    document.getElementById("message").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");
  }