$(document).ready(function(){

  addTask();
  completeItem();


});

var route = '/todo'


function addTask(){

	$( "#task" ).keypress(function(e) {
		if(e.which == 13){
			e.preventDefault();

			var targetData = $(this).serialize();

			$.post(route, targetData, {dataType: "html"})
			.done(function(data){
        $("#task").val('');
				$('.todo_list').after(data);
        console.log(targetData)
			}).fail(function(jqXHR, textStatus){
				alert(jqXHR + textStatus)
  		});
  	};
	});
};

// function saveCode(){
//   $('.myCheckbox').prop('checked', true);
//   $("#name_list > li.name > input:hidden.name_val").val();
//   $('form').find("input[type=textarea], input[type=password], textarea").each(function(ev)
//     $("#"+id).next("label").html();
//   {
//       if(!$(this).val()) { 
//      $(this).attr("placeholder", "Type your answer here");
//   }
//   });
//   $("#pic1").click(function () {
//  $("#items p").wrap("<strike>");
//  $("#pic1").fadeOut("slow");
// });
// };

function completeItem(){
  $('.check_box').on('click', function(e){

    var targetURL = $(this).next("label");
    var item_id = $(this).attr('id').replace(/_/, "=")
    var item_checked = item_id + "&active=true" + "&update=true"
console.log(targetURL);
    // var data_id = "id=" + $('.checkbox input').attr('id')
    $.post(route, item_checked)
    .done(function(data){
console.log(targetURL)
console.log("I am back")
     targetURL.wrap("<strike>");
     // targetURL.fadeOut("slow");


    })
    .fail(function(jqXHR, textStatus){
      alert(jqXHR + textStatus)
    });
  });
};


function addPostForm(){
	var $current_target = $('#new_post_link');
	$current_target.on('click', function(e){
		e.preventDefault();

		var targetURL = $current_target.attr('href');
		var getForm = $.get(targetURL, {dataType: "html"})
		getForm.done(function(data){
			$current_target.hide();
			$('#sidebar').append(data);
			
		});
		getForm.fail(function(jqXHR, textStatus){
			alert(jqXHR + textStatus);
		});
	});
};

function submitFormData(){

	var $current_target = $('#sidebar');
	$current_target.on('submit', function(e){
		e.preventDefault();

		var formData = $('form#post_form').serialize();
		var targetURL = $('form#post_form').attr('action');

		$.post(targetURL, formData, {dataType: "html"})
		.done(function(returnData){
			$('article').before(returnData);
			$('#post_form').hide();
			$('#new_post_link').show()
	
		}).fail(function(jqXHR, textStatus){
			alert(jqXHR + textStatus)
		});
	});
};



