function NEXTpage() {
    window.location.href = './index/second.html';
    console.log("Выполнено, перебрпасываю...");
}

function toggleForms(showFormClass, hideFormClass) {
    var showForm = document.querySelector('.' + showFormClass);
    var hideForm = document.querySelector('.' + hideFormClass);
  
    if (showForm && hideForm) {
      showForm.style.display = 'block';
      hideForm.style.display = 'none';
    }
  }
  
  function reg() {
    toggleForms(' regauth', 'logauth');
  }
  
  function login() {
    toggleForms('logauth', ' regauth');
  }
  
  // Начальная установка формы (например, начать с формы входа)
  toggleForms('logauth', 'regauth');