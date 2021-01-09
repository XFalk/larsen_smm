/* begin Scroll Down Button */


 /* const btnScrollDowns = document.querySelectorAll('#scroll_down');

  function scrollDown() {
    let windowCoords = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      console.log(windowCoords, pageHeight);
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

  btnScrollDowns.forEach(btnScrollDown => btnScrollDown.addEventListener('click', scrollDown));

/* end Scroll Down Button */
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 100;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});
//кнопка наверх (логотип)
const logoUp = document.querySelector('#logo_up');
logoUp.addEventListener(`click`, function(){
    console.log('е бой');
   window.scroll({
       top: 0,
 behavior:"smooth",
   }); 
});
window.addEventListener(`scroll`, function(){
    if (window.pageYOffset > 0){
      
           logoUp.classList.add(`vizible`);
        logoUp.classList.remove(`novizible`);
setTimeout(function(){
  logoUp.style.display=`block`;
},500);
    }else{
        logoUp.classList.remove(`vizible`);
        logoUp.classList.add(`novizible`);
 setTimeout(function(){
    logoUp.style.display=`none`;
},1000);
    }
})