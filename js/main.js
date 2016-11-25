let btnHTMLConntent="<a href='#' id='BaP_BtnBookAnAppointment' class='btn_Style'>Book An Appointment<a>";
  let formListDoctor='<div class="BaP_Doctors">'+
			'<a href="#" id="BaP_Doctors_BtnClose">X</a>'+
			'<div class="BaP_Doctor_Item">'+
				'<img src="http://0.soompi.io/wp-content/uploads/2016/05/27215011/YG-.jpg">'+
				'<p class="BaP_Doctor_Item_Name">Dr. Ramesh</p>'+
				'<a href="#"  class="BaP_Doctor_Item_BtnBook btn_Style">Book An Appointment</a>'+
			'</div>'+
			'<div class="BaP_Doctor_Item">'+
				'<img src="http://0.soompi.io/wp-content/uploads/2016/05/27215011/YG-.jpg">'+
				'<p class="BaP_Doctor_Item_Name">Dr. Suresh</p>'+
				'<a href="#"  class="BaP_Doctor_Item_BtnBook btn_Style">Book An Appointment</a>'+
			'</div>'+
			'<div class="BaP_Doctor_Item">'+
				'<img src="http://0.soompi.io/wp-content/uploads/2016/05/27215011/YG-.jpg">'+
				'<p class="BaP_Doctor_Item_Name">Dr. Vinayak</p>'+
				'<a href="#" class="BaP_Doctor_Item_BtnBook btn_Style">Book An Appointment</a>'+
			'</div>'+
		'</div>';
	let formAppointment='<div class="BaP_Form_Book_Appointment">'+
		'<a href="#" id="BaP_Form_Book_Appointment_BtnClose">X</a>'+
		'<div class="BaP_Form_Book_Appointment_Left">'+
			'<div class="BaP_Form_Book_Appointment_Left_Row">'+
			'<p>Name:</p>'+
			'<input id="BaP_Form_Book_Appointment_Left_Name" type="text" placeholder="Enter the name"/>'+
			'</div>'+
			'<div class="BaP_Form_Book_Appointment_Left_Row">'+
			'<p>Age:</p>'+
			'<input id="BaP_Form_Book_Appointment_Left_Age" type="text" placeholder="Enter the age"/>'+
			'</div>'+
			'<div class="BaP_Form_Book_Appointment_Left_Row">'+
			'<p>Mobile:</p>'+
			'<input id="BaP_Form_Book_Appointment_Left_Mobile" type="text" placeholder="Enter the number"/>'+
			'</div>'+
			'<div class="BaP_Form_Book_Appointment_Left_Row">'+
			'<p>Email:</p>'+
			'<input id="BaP_Form_Book_Appointment_Left_Email" type="text" placeholder="abc@gmail.com"/>'+
			'</div>'+
		'</div>'+
		'<div class="BaP_Form_Book_Appointment_Right">'+
			'<p id="BaP_Form_Book_Appointment_Right_DrName">'+
			'{{drName}}'+
			'</p>'+
			'<p id="BaP_Form_Book_Appointment_Right_Role">B.D.S'+
			'</p>'+
		'</div>'+
		'<div class="BaP_Form_Book_Appointment_Bottom">'+
			'<p style="float:left;">Appointment Date & Time</p>'+
			'<input id="BaP_Form_Book_Appointment_Bottom_DateTime" type="text"/>			'+
		'</div>'+
		'<button onclick="validateAppointment();" id="BaP_Form_Book_Appointment_BtnBook" class="btn_Style">Book</button>'+
	'</div>';

function validateAppointment(){
  //focus input name
  var name = $('#BaP_Form_Book_Appointment_Left_Name').val();
  var age = $('#BaP_Form_Book_Appointment_Left_Age').val();
  var mobile = $('#BaP_Form_Book_Appointment_Left_Mobile').val();
  var email = $('#BaP_Form_Book_Appointment_Left_Email').val();

  if (name == "" || name == null) {
      alert("Name must be filled out!");
      return false;
  }
  else if(isNaN(age) || age < 1 || age > 100){
      alert("Age must be number!");
      $("#BaP_Form_Book_Appointment_Left_Age").val('');
      return false;
  }
  else if(!(/^(\+91-|\+91|0)?\d{10}$/.test(mobile)))
  {
    alert("Please enter correct phone number!");
    $('#BaP_Form_Book_Appointment_Left_Mobile').val('');
    return false;
  }
  else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)){
    alert("Please enter correct email!");
    $('#BaP_Form_Book_Appointment_Left_Email').val('');
    return false;
  }
}

function BookAnAppointment(){}
BookAnAppointment.prototype.init = function(){
  var BaP_PnlBookAnAppointment= document.createElement('div');
  BaP_PnlBookAnAppointment.innerHTML= btnHTMLConntent;
  BaP_PnlBookAnAppointment.setAttribute("id", "BaP_PnlBookAnAppointment");
  document.body.appendChild(BaP_PnlBookAnAppointment);
  $(document).on("click","#BaP_BtnBookAnAppointment",function()
  {
	   $("#BaP_PnlBookAnAppointment").html(formListDoctor);
  });

  // add event for button BaP_Doctors_BtnClose
  $(document).on("click","#BaP_Doctors_BtnClose",function()
  {
     //window.parent.document.body.style.zoom = 1.5;
	   $("#BaP_PnlBookAnAppointment").html(btnHTMLConntent);
  });

  // add event for button BaP_Doctor_Item_BtnBook
  $(document).on("click",".BaP_Doctor_Item_BtnBook",function()
  {
  	let drName = $(this).prev()[0].innerHTML;
  	let formAppointmentChange = formAppointment;
  	formAppointmentChange = formAppointmentChange.replace('{{drName}}',drName);
  	$("#BaP_PnlBookAnAppointment").html(formAppointmentChange);
  });
 // add event for button BaP_Form_Book_Appointment_BtnClose
  $(document).on("click","#BaP_Form_Book_Appointment_BtnClose", function()
  {
	   $("#BaP_PnlBookAnAppointment").html(formListDoctor);
  });

  $(document).ready(function(){
    $("#BaP_Form_Book_Appointment_Bottom_DateTime").datepicker();
  });

}

var BaP = new BookAnAppointment();
