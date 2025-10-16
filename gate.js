(function () {
  var STORAGE_KEY = "devUnlock";
  var PASSWORD = "858";
  var gate = document.getElementById("gate");
  var form = document.getElementById("gate-form");
  var input = document.getElementById("gate-input");
  var error = document.getElementById("gate-error");

  function revealSite() {
    if (!gate) return;
    gate.hidden = true;
    gate.style.display = "none";
  }

  function showGate() {
    if (!gate) return;
    gate.hidden = false;
    gate.style.display = "grid";
    setTimeout(function(){ try { input && input.focus(); } catch (_) {} }, 0);
  }

  try {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      revealSite();
      return;
    }
  } catch (_) {}

  showGate();

  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var value = (input && input.value || "").trim();
      if (value === PASSWORD) {
        try { localStorage.setItem(STORAGE_KEY, "true"); } catch (_) {}
        revealSite();
      } else {
        if (error) { error.textContent = "Incorrect code. Please try again."; error.classList.add("show"); }
      }
    });
  }
})();


