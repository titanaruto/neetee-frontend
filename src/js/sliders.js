let multiItemSlider = (function () {

    function _isElementVisible(element) {
        let rect = element.getBoundingClientRect(),
            vWidth = window.innerWidth || doc.documentElement.clientWidth,
            vHeight = window.innerHeight || doc.documentElement.clientHeight,
            elemFromPoint = function (x, y) {
                return document.elementFromPoint(x, y)
            };
        if (rect.right < 0 || rect.bottom < 0
            || rect.left > vWidth || rect.top > vHeight)
            return false;
        return (
          true
        );
    }

    return function (selector, config) {
        let
            _mainElement = document.querySelector(selector);
        if (_mainElement != null) {

            let
                _sliderWrapper = _mainElement.querySelector('.slider__wrapper'),
                _sliderItems = _mainElement.querySelectorAll('.slider__item'),
                _sliderControls = _mainElement.querySelectorAll('.slider__control'),
                _sliderControlLeft = _mainElement.querySelector('.slider__control_left'),
                _sliderControlRight = _mainElement.querySelector('.slider__control_right'),
                _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
                _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
                _html = _mainElement.innerHTML,
                _indexIndicator = 0,
                _maxIndexIndicator = _sliderItems.length - 1,
                _indicatorItems,
                _positionLeftItem = 0,
                _transform = 0,
                _step = _itemWidth / _wrapperWidth * 100,
                _items = [],
                _interval = 0,
                _states = [
                    {active: false, minWidth: 0, count: 1},
                ],
                _config = {
                    isCycling: false,
                    direction: 'right',
                    interval: 5000,
                    pause: true
                };

            for (let key in config) {
                if (key in _config) {
                    _config[key] = config[key];
                }
            }

            _sliderItems.forEach(function (item, index) {
                _items.push({item: item, position: index, transform: 0});
            });

            let _setActive = function () {
                let _index = 0;
                let width = parseFloat(document.body.clientWidth);
                _states.forEach(function (item, index, arr) {
                    _states[index].active = false;
                    if (width >= _states[index].minWidth)
                        _index = index;
                });
                _states[_index].active = true;
            };

            let _getActive = function () {
                let _index;
                _states.forEach(function (item, index, arr) {
                    if (_states[index].active) {
                        _index = index;
                    }
                });
                return _index;
            };

            let position = {
                getItemMin: function () {
                    let indexItem = 0;
                    _items.forEach(function (item, index) {
                        if (item.position < _items[indexItem].position) {
                            indexItem = index;
                        }
                    });
                    return indexItem;
                },
                getItemMax: function () {
                    let indexItem = 0;
                    _items.forEach(function (item, index) {
                        if (item.position > _items[indexItem].position) {
                            indexItem = index;
                        }
                    });
                    return indexItem;
                },
                getMin: function () {
                    return _items[position.getItemMin()].position;
                },
                getMax: function () {
                    return _items[position.getItemMax()].position;
                }
            };

            let _transformItem = function (direction) {
                let nextItem, currentIndicator = _indexIndicator;
                if (!_isElementVisible(_mainElement)) {
                    return;
                }
                if (direction === 'right') {
                    _positionLeftItem++;
                    if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
                        nextItem = position.getItemMin();
                        _items[nextItem].position = position.getMax() + 1;
                        _items[nextItem].transform += _items.length * 100;
                        _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                    }
                    _transform -= _step;
                    _indexIndicator = _indexIndicator + 1;
                    if (_indexIndicator > _maxIndexIndicator) {
                        _indexIndicator = 0;
                    }
                }
                if (direction === 'left') {
                    _positionLeftItem--;
                    if (_positionLeftItem < position.getMin()) {
                        nextItem = position.getItemMax();
                        _items[nextItem].position = position.getMin() - 1;
                        _items[nextItem].transform -= _items.length * 100;
                        _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
                    }
                    _transform += _step;
                    _indexIndicator = _indexIndicator - 1;
                    if (_indexIndicator < 0) {
                        _indexIndicator = _maxIndexIndicator;
                    }
                }
                _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
                _indicatorItems[currentIndicator].classList.remove('active');
                _indicatorItems[_indexIndicator].classList.add('active');
                let _lastIndicator = _mainElement.querySelector('.slider__indicators-item--last');
                _lastIndicator.textContent = (_indexIndicator + 1) + "/" + (_indicatorItems.length - 1);
            };

            let _slideTo = function (to) {
                let i = 0, direction = (to > _indexIndicator) ? 'right' : 'left';
                while (to !== _indexIndicator && i <= _maxIndexIndicator) {
                    _transformItem(direction);
                    i++;
                }
            };

            let _cycle = function (direction) {
                if (!_config.isCycling) {
                    return;
                }
                _interval = setInterval(function () {
                    _transformItem(direction);
                }, _config.interval);
            };

            let _controlClick = function (e) {
                if (e.target.classList.contains('slider__control')) {
                    e.preventDefault();
                    let direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                    _transformItem(direction);
                    clearInterval(_interval);
                    _cycle(_config.direction);
                }
                if (e.target.getAttribute('data-slide-to')) {
                    e.preventDefault();
                    _slideTo(parseInt(e.target.getAttribute('data-slide-to')));
                    clearInterval(_interval);
                    _cycle(_config.direction);
                }
            };

            let _handleVisibilityChange = function () {
                if (document.visibilityState === "hidden") {
                    clearInterval(_interval);
                } else {
                    clearInterval(_interval);
                    _cycle(_config.direction);
                }
            };

            let _refresh = function () {
                clearInterval(_interval);
                _mainElement.innerHTML = _html;
                _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
                _sliderItems = _mainElement.querySelectorAll('.slider__item');
                _sliderControls = _mainElement.querySelectorAll('.slider__control');
                _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
                _sliderControlRight = _mainElement.querySelector('.slider__control_right');
                _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
                _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
                _positionLeftItem = 0;
                _transform = 0;
                _indexIndicator = 0;
                _maxIndexIndicator = _sliderItems.length - 1;
                _step = _itemWidth / _wrapperWidth * 100;
                _items = [];
                _sliderItems.forEach(function (item, index) {
                    _items.push({item: item, position: index, transform: 0});
                });
                _addIndicators();
            };

            let _setUpListeners = function () {
                _mainElement.addEventListener('click', _controlClick);
                if (_config.pause && _config.isCycling) {
                    _mainElement.addEventListener('mouseenter', function () {
                        clearInterval(_interval);
                    });
                    _mainElement.addEventListener('mouseleave', function () {
                        clearInterval(_interval);
                        _cycle(_config.direction);
                    });
                }

                document.addEventListener('visibilitychange', _handleVisibilityChange, false);
                window.addEventListener('resize', function () {
                    let
                        _index = 0,
                        width = parseFloat(document.body.clientWidth);
                    _states.forEach(function (item, index, arr) {
                        if (width >= _states[index].minWidth)
                            _index = index;
                    });
                    if (_index !== _getActive()) {
                        _setActive();
                        _refresh();
                    }
                });
            };

            let _addIndicators = function () {
                let sliderIndicators = document.createElement('ol');
                sliderIndicators.classList.add('slider__indicators');
                for (let i = 0; i < _sliderItems.length; i++) {
                    let sliderIndicatorsItem = document.createElement('li');
                    if (i === 0) {
                        sliderIndicatorsItem.classList.add('active');
                    }
                    sliderIndicatorsItem.classList.add("slider__indicators-item");
                    sliderIndicatorsItem.setAttribute("data-slide-to", i);
                    sliderIndicators.appendChild(sliderIndicatorsItem);
                }
                let sliderIndicatorsItemLast = document.createElement('li');
                sliderIndicatorsItemLast.classList.add("slider__indicators-item--last");
                sliderIndicatorsItemLast.textContent = "1/" + _sliderItems.length;
                sliderIndicators.appendChild(sliderIndicatorsItemLast);
                _mainElement.appendChild(sliderIndicators);
                _indicatorItems = _mainElement.querySelectorAll('.slider__indicators > li')
            };

            // добавляем индикаторы
            _addIndicators();
            // инициализация
            _setUpListeners();

            if (document.visibilityState === "visible") {
                _cycle(_config.direction);
            }
            _setActive();

            return {
                right: function () {
                    _transformItem('right');
                },
                left: function () {
                    _transformItem('left');
                },
                stop: function () {
                    _config.isCycling = false;
                    clearInterval(_interval);
                },
                cycle: function () {
                    _config.isCycling = true;
                    clearInterval(_interval);
                    _cycle();
                }
            }
        }
    }
}());

let slider = multiItemSlider('.slider', {
    // isCycling: true
});