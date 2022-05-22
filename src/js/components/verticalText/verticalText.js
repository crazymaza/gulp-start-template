function verticalTitle(selector, rotate = 90) {
    let span = $(selector).find('span');
    let titleWidth = span.width();
    let titleHeight = span.height();

    $(selector).css({
      'width': titleHeight + 'px',
      'height': titleWidth + 'px'
    });
    span.css({
      'transform': `rotate(${rotate}deg)`
    });
  }