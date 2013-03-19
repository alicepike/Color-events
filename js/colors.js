var selectedColor = null;
// when user clicks add colors
$(function(){
	$("add").click(addColorBox);
	$("#colors").on("hover", ".color", changeBackground);
	$("#colors").on("click", ".color", toggleBackgroundColor);
	$("#left").click(moveLeft);
	$("#right").click(moveRight);
});

//select form and listen for submit

	//select input check value

	//if box is empty, nothing

	//if box contains valid color

		//add new box with color as background

		//create a div, set background color
function addColorBox(){
	var colors = $("#colors_string").val();
	colors = colors.split(", ");
	for(var i = 0; i < colors.length; i++);
	{
		var color = ("<div>");
		color.addClass("color");
		color.css("background-color", color[i]);
		$("#colors").append(color);
	}
}

	//else tell them that it's invalid


function changeBackground()
{
	var color = $(this).css("background-color");
	$("#colors_string").css("background-color", color);
}

function toggleBackgroundColor()
{
	if(color !== this)
	{
		$(selectedColor).removeClass("selected");
		selectedColor = this;
		$(selectedColor).addClass("selected");
	}

	else
	{
		$(selectedColor).removeClass("selected");
		selectedColor = null;
	}
}

//when user clicks on arrows

	//move box left or right
function moveLeft()
{
	if(selectedColor !== null)
	{
		var previous = (selectedColor).prev();
		previous.before(selectedColor);
	}
}

function moveRight()
{
	if(selectedColor !== null)
	{
		var next = (selectedColor).next();
		next.after(selectedColor);
	}
}

//when user clicks on box

	//outline with black border

// when user double clicks on box

	// remove box
