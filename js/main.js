$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $('.home-img path'); // each SVG floor 
  var counterUp = $('.counter-up'); //arrow up
  var counterDown = $('.counter-down'); //arrow down
  var modal = $('.modal');
  var closeModal = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');

  // function on mouseover the floor
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); //remove the active class from floors
    currentFloor = $(this).attr('data-floor'); //get the current value of the floor
    $('.counter').text(currentFloor); // add the value of the floor to the counter
  });

  floorPath.on('click', toggleModal);

  closeModal.on('click', function () {
    modal.removeClass('is-open');
  })

  viewFlatsButton.on('click', toggleModal);

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      modal.removeClass('is-open');
    }
  });

//   $(document).click(function (event) {
//   if (!$(event.target).closest(".modal").length) {
//     $("body").find(".modal").removeClass("is-open
//     ");
//   }
// });

  counterUp.on('click', function () { //check the click on aroow up
    if (currentFloor < 18) { //check the value of the floor (should be not more than 18)
      currentFloor++; //add 1 floor
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }); //formatting the floor (01 instead of 1)
      $('.counter').text(usCurrentFloor); // add the value of the floor to the counter
      floorPath.removeClass('current-floor'); //remove the active class from the floor
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //highlight current floor
    }
  })

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  })

  function toggleModal() {
    modal.toggleClass('is-open');
  }

});