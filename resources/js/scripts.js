
var activenav= '#work-navlink';
var activecontent = 'work';
var hidden_display = 'block';

function hideshow(navelem, contentid) {
	//mark menu item as not active
	$(activenav).removeClass('active');

	//save display setting of element being hidden
	var hidden_display_holder = document.getElementById(activecontent).style.display;

	//set display of element being hidden to "none"
	document.getElementById(activecontent).style.display = "none";

	//change activenav and activecontent to the activated page
	activenav = '#'+navelem;
	activecontent = contentid;

	$(activenav).addClass('active');
	document.getElementById(activecontent).style.display = hidden_display;

	//set hidden_display to the display of the newly hidden element
	hidden_display = hidden_display_holder
}

function compare (id1, id2) {
	if (id1 == id2) {
		return true;
	} else {
		return false;
	}
};

$(document).ready(function() {
    
    $('.navlink').click(function(e) {
    	//check if nav link is already active
    	if ($(!compare('#'+ $(this).attr('id'), activenav))) {
    		e.preventDefault();
    		//if navlink is not active, hide previous elements and activate new elements
    		hideshow($(this).attr('id'), $(this).attr('href'));
    	}
	});

});

//filter functions
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("project");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
  	//check to see if c is in element's classname; show element if true, hide if false
    if (x[i].className.indexOf(c) > -1) {
    	show(x[i]);
    } else {
    	hide(x[i]);
    }
  }
}

// Show filtered elements by removing "hide" if on there
function show(element) {
  var classname;
  classname = element.className
  if (classname.indexOf("hide") > -1) {
  	element.className = element.className.replace(" hide", "");
  }
}

// Hide elements that are not selected
function hide(element) {
  var classname;
  classname = element.className
  if (classname.indexOf("hide") == -1) {
  	element.className += " hide";
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filtercontainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}
