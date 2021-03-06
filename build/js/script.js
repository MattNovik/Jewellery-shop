
'use strict';
(function () {
  var questionsListElements = document.querySelectorAll('.questions__list-element');
  var filterFormElements = document.querySelectorAll('.filter-form__element');
  var wrapperFilterForm = document.querySelector('.filter-form');
  var filterForm = document.querySelector('.filter-form__form');
  var popup = document.querySelector('.form-login');
  var loginForm = document.querySelector('.form-login__form');
  var openLoginForm = document.querySelectorAll('.wrapper-login-busket__login');
  var page = document.querySelector('.page');
  var pageHover = document.querySelector('.page-main__module-hover');
  var popupClose = document.querySelector('.form-login__close');
  var loginFormNameInput = document.querySelector('.form-login__email');
  var closeFilterForm = document.querySelector('.filter-form__close');
  var openFilterForm = document.querySelector('.filter-open-tablet');
  var inputSearchTabletMenu = document.querySelector('.wrapper-search-tablet__search');
  var openMenuTablet = document.querySelector('.menu--tablet');
  var menuTablet = document.querySelector('.menu--nav-tablet');
  var pageHeader = document.querySelector('.page-header');
  var menuBusketTablet = document.querySelector('.wrapper-login-busket--tablet');
  var logo = document.querySelector('.logo');
  var formLoginLastElem = document.querySelector('.form-login__registration');
  var checkingEventListener = 0;

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('#slider')) {
      var slider = new CreateChiefSlider('#slider');
    }
    if (document.querySelector('#slider-mob')) {
      var sliderMob = new CreateChiefSlider('#slider-mob');
    }
  });
  if (menuTablet) {
    menuTablet.classList.remove('menu--nav-tablet-nojs');
  }
  if (openMenuTablet) {
    openMenuTablet.classList.remove('menu--tablet-open');
  }
  if (pageHeader) {
    pageHeader.classList.remove('page-header--open-menu');
  }
  if (menuTablet) {
    menuTablet.classList.remove('menu--nav-tablet-open');
  }
  if (menuBusketTablet) {
    menuBusketTablet.classList.remove('wrapper-login-busket--tablet-open');
  }
  if (logo) {
    logo.classList.remove('logo--open');
  }

  for (var i = 0; i < questionsListElements.length; i++) {
    questionsListElements[i].classList.remove('questions__list-element--open');
    questionsListElements[i].addEventListener('click', function (evt) {
      var newELem = evt.currentTarget;
      newELem.classList.toggle('questions__list-element--open');
    });
  }

  if (menuTablet) {
    menuTablet.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('menu__login--menu')) {
        evt.preventDefault();
        openMenuTablet.classList.toggle('menu--tablet-open');
        menuTablet.classList.toggle('menu--nav-tablet-open');
        pageHeader.classList.toggle('page-header--open-menu');
        menuBusketTablet.classList.toggle('wrapper-login-busket--tablet-open');
        if (checkingEventListener === 0) {
          document.addEventListener('keydown', onMenuEscKeydown);
          checkingEventListener++;
        } else {
          document.removeEventListener('keydown', onMenuEscKeydown);
          checkingEventListener--;
        }
        logo.classList.toggle('logo--open');
        popup.classList.remove('form-login--close');
        pageHover.classList.remove('page-main__module-hover--closed');
        loginFormNameInput.focus();
        document.addEventListener('keydown', onPopupEscKeydown);
      } else if (evt.target.tagName === 'A') {
        openMenuTablet.classList.toggle('menu--tablet-open');
        page.classList.toggle('page--hidden');
        menuTablet.classList.toggle('menu--nav-tablet-open');
        pageHeader.classList.toggle('page-header--open-menu');
        menuBusketTablet.classList.toggle('wrapper-login-busket--tablet-open');
        if (checkingEventListener === 0) {
          document.addEventListener('keydown', onMenuEscKeydown);
          checkingEventListener++;
        } else {
          document.removeEventListener('keydown', onMenuEscKeydown);
          checkingEventListener--;
        }
        logo.classList.toggle('logo--open');
      }
    });
  }

  if (openMenuTablet) {
    openMenuTablet.addEventListener('click', function () {
      openMenuTablet.classList.toggle('menu--tablet-open');
      page.classList.toggle('page--hidden');
      menuTablet.classList.toggle('menu--nav-tablet-open');
      pageHeader.classList.toggle('page-header--open-menu');
      menuBusketTablet.classList.toggle('wrapper-login-busket--tablet-open');
      if (checkingEventListener === 0) {
        document.addEventListener('keydown', onMenuEscKeydown);
        checkingEventListener++;
      } else {
        document.removeEventListener('keydown', onMenuEscKeydown);
        checkingEventListener--;
      }
      logo.classList.toggle('logo--open');
    });
  }

  var onMenuEscKeydown = function (evt) {
    if (isEscEvent(evt)) {
      checkingEventListener--;
      evt.preventDefault();
      openMenuTablet.classList.remove('menu--tablet-open');
      page.classList.remove('page--hidden');
      menuTablet.classList.remove('menu--nav-tablet-open');
      pageHeader.classList.remove('page-header--open-menu');
      menuBusketTablet.classList.remove('wrapper-login-busket--tablet-open');
      logo.classList.remove('logo--open');
    }
  };

  if (inputSearchTabletMenu) {
    inputSearchTabletMenu.addEventListener('change', function () {
      if (inputSearchTabletMenu.value !== 0) {
        inputSearchTabletMenu.classList.add('wrapper-search-tablet__search--no-label');
      } else {
        inputSearchTabletMenu.classList.remove('wrapper-search-tablet__search--no-label');
      }
    });
  }

  if (openFilterForm) {
    openFilterForm.addEventListener('click', function () {
      wrapperFilterForm.classList.remove('filter-form--close');
      pageHover.classList.remove('page-main__module-hover--closed');
      document.addEventListener('keydown', onFilterEscKeydown);
      page.classList.add('page--hidden');
    });
  }

  if (closeFilterForm) {
    closeFilterForm.addEventListener('click', function () {
      wrapperFilterForm.classList.add('filter-form--close');
      pageHover.classList.add('page-main__module-hover--closed');
      page.classList.remove('page--hidden');
      document.removeEventListener('keydown', onFilterEscKeydown);
    });
  }

  for (var k = 0; k < openLoginForm.length; k++) {
    openLoginForm[k].addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('form-login--close');
      pageHover.classList.remove('page-main__module-hover--closed');
      loginFormNameInput.focus();
      document.addEventListener('keydown', onPopupEscKeydown);
      page.classList.add('page--hidden');
    });
  }

  var isEscEvent = function (evt) {
    return evt.key === 'Escape' || evt.key === 'Esc';
  };

  var onPopupEscKeydown = function (evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      popup.classList.add('form-login--close');
      pageHover.classList.add('page-main__module-hover--closed');
      page.classList.remove('page--hidden');
    }
  };

  var onFilterEscKeydown = function (evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      wrapperFilterForm.classList.add('filter-form--close');
      pageHover.classList.add('page-main__module-hover--closed');
      page.classList.remove('page--hidden');
    }
  };

  pageHover.addEventListener('click', function () {
    popup.classList.add('form-login--close');
    if (wrapperFilterForm) {
      wrapperFilterForm.classList.add('filter-form--close');
    }
    pageHover.classList.add('page-main__module-hover--closed');
    page.classList.remove('page--hidden');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });

  popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('form-login--close');
    pageHover.classList.add('page-main__module-hover--closed');
    page.classList.remove('page--hidden');
    document.removeEventListener('keydown', onPopupEscKeydown);
  });

  if (filterForm) {
    filterForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      localStorage.setItem('email', loginFormNameInput.value);
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  }

  for (var j = 0; j < filterFormElements.length; j++) {
    filterFormElements[j].addEventListener('click', function (evt) {
      var currentElem = evt.currentTarget;
      if (evt.target.tagName === 'H2' || evt.target.tagName === 'svg' || evt.target.tagName === 'use') {
        currentElem.classList.toggle('filter-form__element--open');
      }
    });
  }

  formLoginLastElem.addEventListener('blur', function () {
    popupClose.focus();
  });

  var WRAPPER_SELECTOR = '.slider__wrapper';
  var ITEMS_SELECTOR = '.slider__items';
  var ITEM_SELECTOR = '.slider__item';
  var CONTROL_CLASS = 'slider__control';

  var SELECTOR_PREV = '.slider__control[data-slide="prev"]';
  var SELECTOR_NEXT = '.slider__control[data-slide="next"]';
  var SELECTOR_INDICATOR = '.slider__indicators-element';
  var SLIDER_TRANSITION_OFF = 'slider_disable-transition';
  var CLASS_CONTROL_HIDE = 'slider__control_hide';
  var CLASS_ITEM_ACTIVE = 'slider__item--active';
  var CLASS_INDICATOR_ACTIVE = 'active';

  function CreateChiefSlider(selector, config) {
    var $root = typeof selector === 'string' ?
      document.querySelector(selector) : selector;
    this._$root = $root;
    this._$wrapper = $root.querySelector(WRAPPER_SELECTOR);
    this._$items = $root.querySelector(ITEMS_SELECTOR);
    this._$itemList = $root.querySelectorAll(ITEM_SELECTOR);
    this._$controlPrev = $root.querySelector(SELECTOR_PREV);
    this._$controlNext = $root.querySelector(SELECTOR_NEXT);
    this._$indicatorList = $root.querySelectorAll(SELECTOR_INDICATOR);
    this._minOrder = 0;
    this._maxOrder = 0;
    this._$itemWithMinOrder = null;
    this._$itemWithMaxOrder = null;
    this._minTranslate = 0;
    this._maxTranslate = 0;
    this._direction = 'next';
    this._balancingItemsFlag = false;
    this._activeItems = [];
    this._transform = 0;
    this._hasSwipeState = false;
    this.__swipeStartPos = 0;
    this._transform = 0;
    this._intervalId = null;
    this._config = {
      loop: true,
      autoplay: false,
      interval: 5000,
      refresh: true,
      swipe: true,
    };
    for (var key in config) {
      if (this._config.hasOwnProperty(key)) {
        this._config[key] = config[key];
      }
    }
    var $itemList = this._$itemList;
    var widthItem = $itemList[0].offsetWidth;
    var widthWrapper = this._$wrapper.offsetWidth;
    var itemsInVisibleArea = Math.round(widthWrapper / widthItem);
    this._widthItem = widthItem;
    this._widthWrapper = widthWrapper;
    this._itemsInVisibleArea = itemsInVisibleArea;
    this._transformStep = 100 / itemsInVisibleArea;
    for (var p = 0, length = $itemList.length; p < length; p++) {
      $itemList[p].dataset.index = p;
      $itemList[p].dataset.order = p;
      $itemList[p].dataset.translate = 0;
      if (p < itemsInVisibleArea) {
        this._activeItems.push(p);
      }
    }
    if (this._config.loop) {
      var count = $itemList.length - 1;
      var translate = -$itemList.length * 100;
      $itemList[count].dataset.order = -1;
      $itemList[count].dataset.translate = -$itemList.length * 100;
      $itemList[count].style.transform = 'translateX(' + translate + '%)';
      this.__refreshExtremeValues();
    } else {
      if (this._$controlPrev) {
        this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
      }
    }
    this._setActiveClass();
    this._addEventListener();
    this._updateIndicators();
    this._autoplay();
  }

  CreateChiefSlider.prototype.__refreshExtremeValues = function () {
    var $itemList = this._$itemList;
    this._minOrder = +$itemList[0].dataset.order;
    this._maxOrder = this._minOrder;
    this._$itemByMinOrder = $itemList[0];
    this._$itemByMaxOrder = $itemList[0];
    this._minTranslate = +$itemList[0].dataset.translate;
    this._maxTranslate = this._minTranslate;
    for (var y = 0, length = $itemList.length; y < length; y++) {
      var $item = $itemList[y];
      var order = +$item.dataset.order;
      if (order < this._minOrder) {
        this._minOrder = order;
        this._$itemByMinOrder = $item;
        this._minTranslate = +$item.dataset.translate;
      } else if (order > this._maxOrder) {
        this._maxOrder = order;
        this._$itemByMaxOrder = $item;
        this._minTranslate = +$item.dataset.translate;
      }
    }
  };

  CreateChiefSlider.prototype._balancingItems = function () {
    if (!this._balancingItemsFlag) {
      return;
    }
    var $wrapper = this._$wrapper;
    var $wrapperClientRect = $wrapper.getBoundingClientRect();
    var widthHalfItem = $wrapperClientRect.width / this._itemsInVisibleArea / 2;
    var count = this._$itemList.length;
    var translate;
    var clientRect;
    if (this._direction === 'next') {
      var wrapperLeft = $wrapperClientRect.left;
      var $min = this._$itemByMinOrder;
      translate = this._minTranslate;
      clientRect = $min.getBoundingClientRect();
      if (clientRect.right < wrapperLeft - widthHalfItem) {
        $min.dataset.order = this._minOrder + count;
        translate += count * 100;
        $min.dataset.translate = translate;
        $min.style.transform = 'translateX('.concat(translate, '%)');
        this.__refreshExtremeValues();
      }
    } else {
      var wrapperRight = $wrapperClientRect.right;
      var $max = this._$itemByMaxOrder;
      translate = this._maxTranslate;
      clientRect = $max.getBoundingClientRect();
      if (clientRect.left > wrapperRight + widthHalfItem) {
        $max.dataset.order = this._maxOrder - count;
        translate -= count * 100;
        $max.dataset.translate = translate;
        $max.style.transform = 'translateX('.concat(translate, '%)');
        this.__refreshExtremeValues();
      }
    }
    requestAnimationFrame(this._balancingItems.bind(this));
  };

  CreateChiefSlider.prototype._setActiveClass = function () {
    var activeItems = this._activeItems;
    var $itemList = this._$itemList;
    for (var h = 0, length = $itemList.length; h < length; h++) {
      var $item = $itemList[h];
      var index = +$item.dataset.index;
      if (activeItems.indexOf(index) > -1) {
        $item.classList.add(CLASS_ITEM_ACTIVE);
      } else {
        $item.classList.remove(CLASS_ITEM_ACTIVE);
      }
    }
  };

  CreateChiefSlider.prototype._updateIndicators = function () {
    var $indicatorList = this._$indicatorList;
    var $itemList = this._$itemList;
    if (!$indicatorList.length) {
      return;
    }
    for (var index = 0, length = $itemList.length; index < length; index++) {
      var $item = $itemList[index];
      if ($item.classList.contains(CLASS_ITEM_ACTIVE)) {
        $indicatorList[index].classList.add(CLASS_INDICATOR_ACTIVE);
        document.querySelector('.active-page').innerHTML = index + 1;
      } else {
        $indicatorList[index].classList.remove(CLASS_INDICATOR_ACTIVE);
      }
    }
  };

  CreateChiefSlider.prototype._move = function () {
    var step = this._direction ===
      'next' ? -this._transformStep : this._transformStep;
    var transform = this._transform + step;
    if (!this._config.loop) {
      var endTransformValue =
        this._transformStep * (this._$itemList.length - this._itemsInVisibleArea);
      transform = Math.round(transform * 10) / 10;
      if (transform < -endTransformValue || transform > 0) {
        return;
      }
      this._$controlPrev.classList.remove(CLASS_CONTROL_HIDE);
      this._$controlNext.classList.remove(CLASS_CONTROL_HIDE);
      if (transform === -endTransformValue) {
        this._$controlNext.classList.add(CLASS_CONTROL_HIDE);
      } else if (transform === 0) {
        this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
      }
    }
    var activeIndex = [];
    var n = 0;
    var length;
    var index;
    var newIndex;
    if (this._direction === 'next') {
      for (n = 0, length = this._activeItems.length; n < length; n++) {
        index = this._activeItems[n];
        newIndex = ++index;
        if (newIndex > this._$itemList.length - 1) {
          newIndex -= this._$itemList.length;
        }
        activeIndex.push(newIndex);
      }
    } else {
      for (n = 0, length = this._activeItems.length; n < length; n++) {
        index = this._activeItems[n];
        newIndex = --index;
        if (newIndex < 0) {
          newIndex += this._$itemList.length;
        }
        activeIndex.push(newIndex);
      }
    }
    this._activeItems = activeIndex;
    this._setActiveClass();
    this._updateIndicators();
    this._transform = transform;
    this._$items.style.transform = 'translateX(' + transform + '%)';
    this._$items.dispatchEvent(new CustomEvent('transition-start', {bubbles: true}));
  };

  CreateChiefSlider.prototype._moveToNext = function () {
    this._direction = 'next';
    this._move();
  };

  CreateChiefSlider.prototype._moveToPrev = function () {
    this._direction = 'prev';
    this._move();
  };

  CreateChiefSlider.prototype._moveTo = function (index) {
    var $indicatorList = this._$indicatorList;
    var nearestIndex = null;
    var diff = null;
    var d;
    var length;
    for (d = 0, length = $indicatorList.length; d < length; d++) {
      var $indicator = $indicatorList[d];
      if ($indicator.classList.contains(CLASS_INDICATOR_ACTIVE)) {
        var slideTo = +$indicator.dataset.slideTo;
        if (diff === null) {
          nearestIndex = slideTo;
          diff = Math.abs(index - nearestIndex);
        } else {
          if (Math.abs(index - slideTo) < diff) {
            nearestIndex = slideTo;
            diff = Math.abs(index - nearestIndex);
          }
        }
      }
    }
    diff = index - nearestIndex;
    if (diff === 0) {
      return;
    }
    this._direction = diff > 0 ? 'next' : 'prev';
    for (d = 1; d <= Math.abs(diff); d++) {
      this._move();
    }
  };

  CreateChiefSlider.prototype._autoplay = function (action) {
    if (!this._config.autoplay) {
      return;
    }
    if (action === 'stop') {
      clearInterval(this._intervalId);
      this._intervalId = null;
      return;
    }
    if (this._intervalId === null) {
      this._intervalId = setInterval(
          function () {
            this._direction = 'next';
            this._move();
          }.bind(this),
          this._config.interval
      );
    }
  };

  CreateChiefSlider.prototype._refresh = function () {
    var $itemList = this._$itemList;
    var widthItem = $itemList[0].offsetWidth;
    var widthWrapper = this._$wrapper.offsetWidth;
    var itemsInVisibleArea = Math.round(widthWrapper / widthItem);

    if (itemsInVisibleArea === this._itemsInVisibleArea) {
      return;
    }

    this._autoplay('stop');

    this._$items.classList.add(SLIDER_TRANSITION_OFF);
    this._$items.style.transform = 'translateX(0)';

    this._widthItem = widthItem;
    this._widthWrapper = widthWrapper;
    this._itemsInVisibleArea = itemsInVisibleArea;
    this._transform = 0;
    this._transformStep = 100 / itemsInVisibleArea;
    this._balancingItemsFlag = false;
    this._activeItems = [];

    for (var w = 0, length = $itemList.length; w < length; w++) {
      var $item = $itemList[w];
      var position = w;
      $item.dataset.index = position;
      $item.dataset.order = position;
      $item.dataset.translate = 0;
      $item.style.transform = 'translateX(0)';
      if (position < itemsInVisibleArea) {
        this._activeItems.push(position);
      }
    }

    this._setActiveClass();
    this._updateIndicators();
    window.requestAnimationFrame(
        function () {
          this._$items.classList.remove(SLIDER_TRANSITION_OFF);
        }.bind(this)
    );

    if (!this._config.loop) {
      if (this._$controlPrev) {
        this._$controlPrev.classList.add(CLASS_CONTROL_HIDE);
      }
      return;
    }

    var count = $itemList.length - 1;
    var translate = -$itemList.length * 100;
    $itemList[count].dataset.order = -1;
    $itemList[count].dataset.translate = -$itemList.length * 100;
    $itemList[count].style.transform = 'translateX('.concat(translate, '%)');
    this.__refreshExtremeValues();
    this._autoplay();
  };

  CreateChiefSlider.prototype.next = function () {
    this._moveToNext();
  };
  CreateChiefSlider.prototype.prev = function () {
    this._moveToPrev();
  };
  CreateChiefSlider.prototype.moveTo = function (index) {
    this._moveTo(index);
  };
  CreateChiefSlider.prototype.refresh = function () {
    this._refresh();
  };
  CreateChiefSlider.prototype._addEventListener = function () {
    var $root = this._$root;
    var $items = this._$items;
    var config = this._config;
    function OnClick(e) {
      var $target = e.target;
      this._autoplay('stop');
      if ($target.classList.contains(CONTROL_CLASS)) {
        e.preventDefault();
        this._direction = $target.dataset.slide;
        this._move();
      } else if ($target.dataset.slideTo) {
        var index = parseInt($target.dataset.slideTo, 10);
        this._moveTo(index);
      }
      if (this._config.loop) {
        this._autoplay();
      }
    }
    function OnMouseEnter() {
      this._autoplay('stop');
    }
    function OnMouseLeave() {
      this._autoplay();
    }
    function OnTransitionStart() {
      if (this._balancingItemsFlag) {
        return;
      }
      this._balancingItemsFlag = true;
      window.requestAnimationFrame(this._balancingItems.bind(this));
    }
    function OnTransitionEnd() {
      this._balancingItemsFlag = false;
    }
    function OnResize() {
      window.requestAnimationFrame(this._refresh.bind(this));
    }
    function OnSwipeStart(e) {
      this._autoplay('stop');
      var event = e.type.search('touch') === 0 ? e.touches[0] : e;
      this._swipeStartPos = event.clientX;
      this._hasSwipeState = true;
    }
    function OnSwipeEnd(e) {
      if (!this._hasSwipeState) {
        return;
      }
      var event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
      var diffPos = this._swipeStartPos - event.clientX;
      if (diffPos > 50) {
        this._direction = 'next';
        this._move();
      } else if (diffPos < -50) {
        this._direction = 'prev';
        this._move();
      }
      this._hasSwipeState = false;
      if (this._config.loop) {
        this._autoplay();
      }
    }
    function OnDragStart(e) {
      e.preventDefault();
    }
    function OnVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        this._autoplay('stop');
      } else if (document.visibilityState === 'visible') {
        if (this._config.loop) {
          this._autoplay();
        }
      }
    }

    $root.addEventListener('click', OnClick.bind(this));
    $root.addEventListener('mouseenter', OnMouseEnter.bind(this));
    $root.addEventListener('mouseleave', OnMouseLeave.bind(this));
    if (config.refresh) {
      window.addEventListener('resize', OnResize.bind(this));
    }
    if (config.loop) {
      $items.addEventListener('transition-start', OnTransitionStart.bind(this));
      $items.addEventListener('transitionend', OnTransitionEnd.bind(this));
    }
    if (config.swipe) {
      $root.addEventListener('touchstart', OnSwipeStart.bind(this));
      $root.addEventListener('mousedown', OnSwipeStart.bind(this));
      document.addEventListener('touchend', OnSwipeEnd.bind(this));
      document.addEventListener('mouseup', OnSwipeEnd.bind(this));
    }
    $root.addEventListener('dragstart', OnDragStart.bind(this));
    document.addEventListener('visibilitychange', OnVisibilityChange.bind(this));
  };
})();
