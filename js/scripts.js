/*!
	* Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
	* Copyright 2013-2020 Start Bootstrap
	* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
	*/
(function ($) {
	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - 71)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Scroll to top button appear
	$(document).scroll(function () {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 80
	});

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	// Floating label headings for the contact form
	$(function () {
		$("body").on("input propertychange", ".floating-label-form-group", function (e) {
			$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
		}).on("focus", ".floating-label-form-group", function () {
			$(this).addClass("floating-label-form-group-with-focus");
		}).on("blur", ".floating-label-form-group", function () {
			$(this).removeClass("floating-label-form-group-with-focus");
		});
	});

})(jQuery); // End of use strict

const setTeamForm = (total) => {
	var completeFieldsHTML = ''
	var count = 1;
	while (count <= total) {
		completeFieldsHTML += `
  <div class="control-group">
    <div class="form-group floating-label-form-group controls mb-0 pb-2">
        <label>Name of Team Member ${count}</label>
        <input class="form-control" id="name-${count}" name="name_${count}" type=" text" placeholder="Name of Team Member ${count}"
            required="required" data-validation-required-message="Please enter your name." />
        <p class="help-block text-danger"></p>
    </div>
  </div>


  <div class="control-group">
    <div class="form-group floating-label-form-group controls mb-0 pb-2">
      <label>Email Address of Team Member ${count}</label>
      <input class="form-control" id="email-${count}" name="email_${count}" type="email"
          placeholder="Email Address of Team Member ${count}" required="required"
          data-validation-required-message="Please enter your email address." />
      <p class="help-block text-danger"></p>
    </div>
  </div>
  
  <!-- <div class="form-group"> -->
  <div class="form-group controls mb-0 pb-2 my-5">
    <p style="font-size: 1.5rem; color: #495057;">Occupation of Team Member ${count}</p>
    <div class="form-check">
      <input value="STUDENT" id='STUDENT-${count}' name='occupation_${count}' class="form-check-input"
          type="radio">
      <label class="form-check-label" for="STUDENT-${count}">Student</label>
    </div>
    <div class="form-check">
      <input id='PROFESSIONAL-${count}' value='PROFESSIONAL' name="occupation_${count}"
          class="form-check-input" type="radio">
      <label class="form-check-label" for="PROFESSIONAL-${count}">Working Professional</label>
    </div>
    <div class="form-check">
      <input id='OTHER-${count}' value='OTHER' name="occupation_${count}" class="form-check-input"
          type="radio" required>
      <label class="form-check-label" for="OTHER-${count}">Other</label>
    </div>
  </div>
  <div class="control-group">
    <div class="form-group floating-label-form-group controls mb-0 pb-2">
      <label>Roll Number of Team Member ${count}</label>
      <input class="form-control" id="roll-number-${count}" name="roll_number_${count}" type=" text"
          placeholder="Roll Number of Team Member ${count}">
    </div>
  </div>
<div class="control-group">
  <div class="form-group floating-label-form-group controls mb-0 pb-2">
      <label>Phone Number of Team Member ${count}</label>
      <input class="form-control" name="phone_${count}" id="phone-${count}" type="tel"
          placeholder="Phone Number of Team Member ${count}" required="required"
          data-validation-required-message="Please enter your phone number." />
      <p class="help-block text-danger"></p>
  </div>
</div>
<div class="form-group controls mb-0 pb-2 my-5">
  <p style="font-size: 1.5rem; color: #495057;">Year of Study of Team Member ${count}</p>
  <div class="form-check">
      <input value="1" id='year-1-${count}' name='year_of_study_${count}' class="form-check-input"
          type="radio">
      <label class="form-check-label" for="year-1">1</label>
  </div>
  <div class="form-check">
      <input id='year-2-${count}' value='2' name="year_of_study_${count}" class="form-check-input"
          type="radio">
      <label class="form-check-label" for="year-2">2</label>
  </div>
  <div class="form-check">
      <input value="3" id='year-3-${count}' name='year_of_study_${count}' class="form-check-input"
          type="radio">
      <label class="form-check-label" for="year-3">3</label>
  </div>
  <div class="form-check">
      <input id='year-4-${count}' value='4-1' name="year_of_study_${count}" class="form-check-input"
          type="radio">
      <label class="form-check-label" for="year-4">4</label>
  </div>
</div>
<div class="control-group">
  <div class="form-group floating-label-form-group controls mb-0 pb-2">
      <label>Department of Team Member ${count}</label>
      <input class="form-control" id="department-${count}" name="department_${count}" type="text"
          placeholder="Department of Team Member ${count}" />
  </div>
</div>`;
		count++;
	}
	var elem = document.getElementById("container-guy");
	elem.innerHTML = completeFieldsHTML;
}
var elem = document.createElement('div');
var elem2 = document.getElementById("append-guy");
elem.id = "container-guy";
elem2.parentNode.insertBefore(elem, elem2.nextSibling);
setTeamForm(1);

const teamSizeOnChangeHandler = (event) => {
	var value = parseInt(event.target.value);
	setTeamForm(value);
}


const handleTeamFormSubmit = (event) => {
	event.preventDefault();

	const submit_btn = document.querySelector("#sendMessageButton")

	submit_btn.textContent = "Submitting..."
	submit_btn.disabled = true
	submit_btn.classList.add("disabled")

	swal({
		title: "Are you sure ?",
		text: "Please confirm submission",
		buttons: true,
	}).then(val => {
		if (val) {

			let post_fd = new FormData(event.target)

			fetch("https://script.google.com/macros/s/AKfycbxJV6AfMf3jP12NUhu5ncrNBnvKQjdYcjU_VDDdbSlTD05VbGBCrB5ZyQ/exec", {
				method: "POST",
				body: post_fd,
				// headers: {
				// 	'Access-Control-Allow-Origin': '*'
				// },
				// mode:"no-cors"
			}).then(resp => {
				return resp.json()
			}).then(json_resp => {
				if (json_resp.result == 'success') {
					swal({
						title: "Your Response has been recorded !",
						text: "Your details have been received. Thanks and have a nice day.!",
						icon: "success",
						button: "Go",
					}).then(() => { window.location.reload() })
				}
				else {
					swal("Oops...",
						"Something went wrong!",
						"error")
				}
			})

			console.log("Ok Clicked")

			return
		}
		console.log("submission declined")
	})
}