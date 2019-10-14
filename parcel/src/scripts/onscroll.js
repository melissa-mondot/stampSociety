$(document).ready(function() {
  const s = $('.mainNavbar');
  const pos = s.position();
  $(window).scroll(function() {
    const windowpos = $(window).scrollTop();
    (windowpos >= pos.top) & (windowpos <= 150)
      ? s.addClass('.scroll-shrink')
      : s.removeClass('.scroll-shrink');
  });
});
