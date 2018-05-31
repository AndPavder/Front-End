var fadeInFrom = 0,
    button = document.getElementById('allfilms'),
    aboutMe = document.getElementById('aboutMe'),
    myHobby = document.getElementById('myHobby'),
    favouriteFilms = document.getElementById('favFilms'),
    form = document.getElementById('form');

function getById(id) {
  return document.getElementById(id);
}

function getByClass(className) {
  return document.getElementsByClassName(className);
}

function getByTag(TagName) {
  return document.getElementsByTagName(TagName);
}

//Выцветание фильмов
function fadeIn(element) {
  getById('allfilmscont').style.display = "none";
  var target = getById(element),
      newSetting = fadeInFrom / 10;
  target.style.display = "block";
  target.style.opacity = newSetting;
  fadeInFrom += 1;
  
  if (fadeInFrom == 10) {
    target.style.opacity = 1;
    clearTimeout(loopTimer);
    fadeInFrom = 0;
    return false;
  }
    
  var loopTimer = setTimeout('fadeIn(\''+element+'\')',15);
}

//Фокус на инпут
function focusIn(element) {
  getById(element).style.border = "2px solid #15a98c";
}


//Снятие фокуса с инпута
function focusOut(element) {
  var target = getById(element);
  
  if (target.value == "")   {
    target.style.border = "2px solid #f12323";
  } else {
    target.style.border = "2px solid #c9c9c9";
        }
}

//Действия при фокусе
function focus(element1, element2 ) {
  getById(element1).addEventListener("focusin", function(){focusIn(element2)});
  getById(element1).addEventListener("focusout", function(){focusOut(element2)});
}

//Проверка на пустые поля
function send() {
  var valid = true,
      elems = document.forms[0].elements;
    
  for(var i=0; i<document.forms[0].length; i++){
    if(elems[i].getAttribute('type') == 'text' || elems[i].getAttribute('type') ==  'email'){
      if(elems[i].value == ''){
        elems[i].style.border = "2px solid #f12323";
        valid = false;
      }
    }
  }
    
  if(valid) {
    return true;
  } else {
    focus("Name", "userName");
    focus("Email","userEmail");
    return false;
  }
}

/*/smooth scroll
function autoScrollTo(element) {
  var currentY = window.pageYOffset,
      targetY = getById(element).offsetTop,
      bodyHeight = document.body.offsetHeight,
      yPos = currentY + window.innerHeight,
      animator = setTimeout('autoScrollTo(\''+element+'\')',10);
  
  if(yPos > bodyHeight) {
    clearTimeout(animator);
  } else {
    if(currentY < targetY-distance) {
      scrollY = currentY+distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }
}*/

button.onclick = function(){fadeIn('otherfilms')};
aboutMe.onmousedown = function(){autoScrollTo('about_me')};
myHobby.onmousedown = function(){autoScrollTo('my_hobby')};
favouriteFilms.onmousedown = function(){autoScrollTo('favorite_films')};
form.onsubmit = function(){return send()};



