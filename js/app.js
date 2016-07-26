//Globals
Chart.defaults.global.defaultFontFamily = "'Roboto', Helvetica, Arial, sans-serif";
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.bar.scaleShowVerticalLines = false;


$(document).ready(function(){
	
	//Call the init function to init the buttons on click and load charts
	init();

	//Check if we need to load the default or saved settings
	if (sessionStorage.length === 0) {
		$("#weekly-btn").addClass("active");
		$("#dashboard").addClass("active");
	}

	else {
		$(sessionStorage.lineChart).addClass("active");
		$(sessionStorage.navMenu).addClass("active");
	}

	//In case that only one of them was saved we need to load the default of the other when refrshing the page
	if ($("#dashboard").hasClass("active")===false && $("#visits").hasClass("active")===false && $("#members").hasClass("active")===false  && $("#settings").hasClass("active")===false ) {
	    $("#dashboard").addClass("active");
	}

	if ($("#hourly-btn").hasClass("active")===false && $("#daily-btn").hasClass("active")===false && $("#weekly-btn").hasClass("active")===false  && $("#monthly-btn").hasClass("active")===false ) {
	    $("#weekly-btn").addClass("active");
	}


	//Update settings checkboxes
 	if (sessionStorage.emailSettings=="on")
 		$("#email-notification").prop("checked", true);
 	else
 		$("#email-notification").prop("checked", false);



 	if (sessionStorage.profileSettings=="on")
 		$("#public-profile").prop("checked", true);
 	else
 		$("#public-profile").prop("checked", false);

});


//Pie Chart
var ctx1 = document.getElementById("mobile-users-chart");
var mobileUsersChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop", "Laptop"],
        datasets: [{
            label: '# of users',
            data: [120, 44, 80, 150],
            backgroundColor: [
                'rgb(71, 112, 235)',
                'rgb(240, 240, 168)',
                'rgb(159, 236, 121)',
                'rgb(255, 102, 102)'
            ],
            borderColor: [
                'rgb(217, 217, 217)',
                'rgb(217, 217, 217)',
                'rgb(217, 217, 217)',
                'rgb(217, 217, 217)'
            ],
            borderWidth: 1
        }]
    },
      options: {
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontFamily: 'Roboto, sans-serif',
                boxWidth: 10
            }
        }
    }
});

//Data Sets for line chart
var amData = {
        	label: 'AM',
            data: [50, 100, 150, 100, 200, 50, 100],
            backgroundColor: [
                'rgb(165,210,255)',
                'rgb(165,210,255)',
                'rgb(165,210,255)',
                'rgb(165,210,255)',
                'rgb(165,210,255)',
                'rgb(165,210,255)',
                'rgb(165,210,255)'                          
            ]
    };

var pmData = {
        	label: 'PM',
            data: [120, 50, 200, 60, 130, 150, 90],
            backgroundColor: [
                'rgb(0, 46, 77)',
                'rgb(0, 46, 77)',
                'rgb(0, 46, 77)',
                'rgb(0, 46, 77)',
                'rgb(0, 46, 77)',
                'rgb(0, 46, 77)',
                'rgb(0, 46, 77)'                          
            ]
    };


//Bar Chart
var ctx2 = document.getElementById("traffic-bar-chart");
var myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
    	   labels: ["S", "M", "T","W", "T", "F", "S"],
    	   datasets:  [amData,pmData]
    },
      options: {
        responsive: true,
        legend: {
            display: false
        }
    }
});


//Data Sets for line chart
var hourlyData = {
        labels: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'],
        datasets: [{
        	label: 'Traffic',
            data: [4500, 5000, 5500, 6000, 6500, 7000, 8000, 7500, 6500, 6000, 5500],
            backgroundColor: 'rgba(255, 235, 153, 0.3)',
            lineTension: 0,
            pointBorderColor: 'rgba(255, 235, 153, 0.8)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }]
  };

var dailyData = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
        	label: 'Traffic',
            data: [5000, 6000, 5500, 6500, 7000, 7500, 8000],
            backgroundColor: 'rgba(74, 217, 217, 0.3)',
            lineTension: 0,
            pointBorderColor: 'rgba(74, 217, 217, 0.8)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }]
  };

var weeklyData = {
        labels: ["16-22", "23-29", "30-5","6-12", "13-19", "20-26", "27-3", "4-10", "11-17","18-24", "25-31"],
        datasets: [{
        	label: 'Traffic',
            data: [6000, 8000, 9000, 8500, 7000, 9500, 9000, 8000, 7000, 6500, 5500],
            backgroundColor: 'rgba(179, 230, 255, 0.3)',
            lineTension: 0,
            pointBorderColor: 'rgba(179, 230, 255, 0.8)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }]
  };

var monthlyData = {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
        datasets: [{
        	label: 'Traffic',
            data: [6000, 8000, 9000, 8500, 7000, 9500, 9000, 8000, 7000, 6500, 5500, 4500],
            backgroundColor: 'rgba(173, 235, 173, 0.3)',
            lineTension: 0,
            pointBorderColor: 'rgba(173, 235, 173, 0.8)',
            pointRadius: 6,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }]
  };


//Line Chart
var ctx3 = document.getElementById("traffic-line-chart").getContext('2d');
var myLineChart = new Chart(ctx3, {
    type: 'line',
    data: weeklyData,
      options: {
        responsive: true,
        legend: {
            display: false,
            scales: {
            yAxes: [{
                type: 'linear',
                ticks: {
                    max: 10000,
                    min: 4000,
                    stepSize: 2000
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#dfdfdf'
                }
            }]
        }
        }
    }
});


//Initialize the page
function init() {

	//Set Hourly button
    $("#hourly-btn").click(function(event){
        
        //Remove class active from all the buttons
        $("#daily-btn").removeClass("active");
        $("#weekly-btn").removeClass("active");
        $("#monthly-btn").removeClass("active");


        //Add class active to current button
        $("#hourly-btn").addClass("active");


        //call line chart function with hourly data  
         event.preventDefault(event);
         myLineChart.config.data = hourlyData;
         myLineChart.update();

         //updae local storage
         sessionStorage.lineChart="#hourly-btn";
    });

    //Set Daily button
    $("#daily-btn").click(function(event){
        
        //Remove class active from all the buttons
        $("#hourly-btn").removeClass("active");
        $("#weekly-btn").removeClass("active");
        $("#monthly-btn").removeClass("active");


        //Add class active to current button
        $("#daily-btn").addClass("active");

        //call line chart function with hourly data  
         event.preventDefault(event);
         myLineChart.config.data = dailyData;
         myLineChart.update();

         //updae local storage
         sessionStorage.lineChart="#daily-btn";
    });

     //Set Weekly button
     $("#weekly-btn").click(function(event){
        
        //Remove class active from all the buttons
        $("#hourly-btn").removeClass("active");
        $("#monthly-btn").removeClass("active");
        $("#daily-btn").removeClass("active");


        //Add class active to current button
        $("#weekly-btn").addClass("active");

        //call line chart function with hourly data  
         event.preventDefault(event);
         myLineChart.config.data = weeklyData;
         myLineChart.update();

          //updae local storage
         sessionStorage.lineChart="#weekly-btn";

    });

     //Set Monthly button
     $("#monthly-btn").click(function(event){
        
        //Remove class active from all the buttons
        $("#hourly-btn").removeClass("active");
        $("#weekly-btn").removeClass("active");
        $("#daily-btn").removeClass("active");


        //Add class active to current button
        $("#monthly-btn").addClass("active");

        //call line chart function with hourly data  
         event.preventDefault(event);
         myLineChart.config.data = monthlyData;
         myLineChart.update();


         //updae local storage
         sessionStorage.lineChart="#monthly-btn";
    });


     //Close alert message
     $("#close-message").click(function(){

     	//remove the alert message
     	$("#message").delay(500).fadeOut("slow");
     	$("#green-badge").delay(500).fadeOut("slow");
    });


     //Form validation
     $("#btn-message-send").click(function(){

     	var alert = $("#message-form-alert");
     	var search = $("#search-user");
     	var message = $("#message-for-user"); 

     	//Check if search-user id is empty || message-for-user is empty
     	if (search.val()==='' || message.val()===''){
     			
     		//Change css of alert div
     		alert.css("display", "block");
     		alert.css("color", "black");
				//Add relevant text
				alert.text("Username and message are required!");

     	}
     	else {

     		//else
     			//Change css of alert div
     			alert.css("display", "block");
     			alert.css("background-color", "#006699");
     			alert.css("color", "white");
     				//Add relevant text
     				alert.text("Message Sent!").delay(500).fadeOut("slow");
     	}

     	return false;

    });


    //Navigation menu init
     $("#dashboard").click(function(){

     	//remove active class from all other menu items
     	$("#visits").removeClass("active");
     	$("#members").removeClass("active");
     	$("#settings").removeClass("active");

     	//add active to current menu item
     	$("#dashboard").addClass("active");

     	 //updae local storage
         sessionStorage.navMenu="#dashboard";

    });


     $("#visits").click(function(){

     	//remove active class from all other menu items
     	$("#dashboard").removeClass("active");
     	$("#members").removeClass("active");
     	$("#settings").removeClass("active");

     	//add active to current menu item
     	$("#visits").addClass("active");

     	  //updae local storage
         sessionStorage.navMenu="#visits";

    });



     $("#members").click(function(){

     	//remove active class from all other menu items
     	$("#visits").removeClass("active");
     	$("#dashboard").removeClass("active");
     	$("#settings").removeClass("active");

     	//add active to current menu item
     	$("#members").addClass("active");

     	  //updae local storage
         sessionStorage.navMenu="#members";

    });


     $("#settings").click(function(){

     	//remove active class from all other menu items
     	$("#visits").removeClass("active");
     	$("#members").removeClass("active");
     	$("#dashboard").removeClass("active");

     	//add active to current menu item
     	$("#settings").addClass("active");

     	  //updae local storage
         sessionStorage.navMenu="#settings";

    });


     $("#email-notification").click(function(){

		if($("#email-notification").is(':checked'))

	     	 //updae local storage
	         sessionStorage.emailSettings="on";
	     else
	         //updae local storage
	         sessionStorage.emailSettings="off";

    });


     $("#public-profile").click(function(){

		if($("#public-profile").is(':checked'))

	     	 //updae local storage
	         sessionStorage.profileSettings="on";
	     else
	         //updae local storage
	         sessionStorage.profileSettings="off";

    });

   $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});


$( function() {
    var users = [
      "Chen Rim",
      "Guy Rotem",
      "Ashlee Willson",
      "Yugin Freko",
      "Varric Tethras",
      "Cullen Rutherford",
      "Cassandra Pentaghast",
    ];
    $( "#search-user" ).autocomplete({
      source: users
    });
  } );

}



  