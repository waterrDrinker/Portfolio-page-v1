(function () {
  const header = document.querySelector('#header');
  window.onscroll = () => {
    if (window.pageYOffset > 59) {
      header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
  }
}());