function insert_data(endpoint,Data){
	$.ajax({
			    	url: endpoint,
			        type: "POST",
			        data: Data,
			        contentType: 'application/json',
			        success:function(response) {
			            alert(response);           
			        },
			        error: function (error) {
			            alert("error");
			        }
			    });
}


// POST 
// Schoalar

function add_scholar(){
	var ID = $("#ID").val();
    var MANAGER_ID = $("#managerID").val();
    var NAME = $("#name").val();
    var BIRTHDATE = $("#date").val();
    var EMAIL = $("#email").val();
    var PHONE = $("#phone").val();
    // alert("Triggered");
	
    if(ID==="" || MANAGER_ID==="" || EMAIL==="" || NAME==="" || BIRTHDATE==="" || PHONE==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID,
	  		"MANAGER_ID":MANAGER_ID,
	  		"NAME":NAME,
	  		"BIRTHDATE":BIRTHDATE,
	  		"EMAIL":EMAIL,
	  		"PHONE":PHONE
	  	}

	  	var url = "/backendService/POST/ADD_SCHOLAR.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#ID").val("");
	    $("#managerID").val("");
	    $("#name").val("");
	    $("#date").val("");
	    $("#email").val("");
	    $("#phone").val("");
	  	
	  }
} 

// Manager

function add_manager(){
	var ID = $("#MID_manager").val();
    var LOB = $("#LOB_manager").val();
    var EMAIL = $("#EMAIL_manager").val();
    var TEAM_NAME = $("#TEAM_NAME_manager").val();
    var NAME = $("#NAME_manager").val();
    var PHONE = $("#PHONE_manager").val();
    // alert("Triggered");
	
    if(ID==="" || LOB==="" || EMAIL==="" || NAME==="" || TEAM_NAME==="" || PHONE==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID,
	  		"LOB":LOB,
	  		"EMAIL":EMAIL,
	  		"TEAM_NAME":TEAM_NAME,
	  		"NAME":NAME,
	  		"PHONE":PHONE
	  	}

	  	var url = "/backendService/POST/ADD_MANAGER.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#MID_manager").val("");
    	$("#LOB_manager").val("");
    	$("#EMAIL_manager").val("");
    	$("#TEAM_NAME_manager").val("");
    	$("#NAME_manager").val("");
    	$("#PHONE_manager").val("");
	  	
	  }
} 

// Employee
function add_employee(){
	var ID = $("#ID_employee").val();
    var MANAGER_ID = $("#MANAGER_ID_employee").val();
    var EMAIL = $("#EMAIL_employee").val();
    var NAME = $("#NAME_employee").val();
    var DATE = $("#DATE_employee").val();
    var PHONE = $("#PHONE_employee").val();
    // alert("Triggered");
	
    if(ID==="" || MANAGER_ID==="" || EMAIL==="" || NAME==="" || DATE==="" || PHONE==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID,
	  		"MANAGER_ID":MANAGER_ID,
	  		"EMAIL":EMAIL,
	  		"NAME":NAME,
	  		"DATE":DATE,
	  		"PHONE":PHONE
	  	}

	  	var url = "/backendService/POST/ADD_EMPLOYEE.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#ID_employee").val("");
    	$("#MANAGER_ID_employee").val("");
    	$("#EMAIL_employee").val("");
    	$("#NAME_employee").val("");
    	$("#DATE_employee").val("");
    	$("#PHONE_employee").val("");
	  	
	  }
} 

// Skills
function add_skills(){
	var ID = $("#ID_skills").val();
    var NAME = $("#NAME_skills").val();

    // alert("Triggered");
	
    if(ID==="" || NAME ==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID,
	  		"NAME":NAME
	  	}

	  	var url = "/backendService/POST/ADD_SKILLS.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#ID_skills").val("");
    	$("#NAME_skills").val("");
	  	
	  }
} 


// Scholar Skills
function add_scholar_skills(){
    var LEVEL_OF_EXPERIENCE = $("#LOE_scholar_skills").val();
    var SCHOLAR_ID = $("#SCHOLAR_ID_scholar_skills").val();
    var SKILL_ID = $("#SKILL_ID_scholar_skills").val();

    // alert("Triggered");
	
    if(LEVEL_OF_EXPERIENCE==="" || SCHOLAR_ID ==="" || SKILL_ID ==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"LEVEL_OF_EXPERIENCE":LEVEL_OF_EXPERIENCE,
	  		"SCHOLAR_ID":SCHOLAR_ID,
	  		"SKILL_ID":SKILL_ID
	  	}

	  	var url = "/backendService/POST/ADD_SCHOLAR_SKILLS.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#LOE_scholar_skills").val("");
    	$("#SCHOLAR_ID_scholar_skills").val("");
    	$("#SKILL_ID_scholar_skills").val("");
	  	
	  }
} 



// Employee Skills
function add_employee_skills(){
    var LEVEL_OF_EXPERIENCE = $("#LOE_scholar_skills").val();
    var EMPLOYEE_ID = $("#EMPLOYEE_ID_scholar_skills").val();
    var SKILL_ID = $("#SKILL_ID_scholar_skills").val();

    // alert("Triggered");
	
    if(LEVEL_OF_EXPERIENCE==="" || EMPLOYEE_ID ==="" || SKILL_ID ==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"LEVEL_OF_EXPERIENCE":LEVEL_OF_EXPERIENCE,
	  		"EMPLOYEE_ID":EMPLOYEE_ID,
	  		"SKILL_ID":SKILL_ID
	  	}

	  	var url = "/backendService/POST/ADD_EMPLOYEE_SKILLS.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#LOE_scholar_skills").val("");
    	$("#EMPLOYEE_ID_scholar_skills").val("");
    	$("#SKILL_ID_scholar_skills").val("");
	  	
	  }
} 


//Job skill requirement
function add_jsr(){
    var JOB_ID = $("#JOB_ID_jsr").val();
    var SKILL_ID = $("#SKILL_ID_jsr").val();

    // alert("Triggered");
	
    if(JOB_ID==="" || SKILL_ID ==="" )
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"JOB_ID":JOB_ID,
	  		"SKILL_ID":SKILL_ID
	  	}

	  	var url = "/backendService/POST/ADD_JOB_SKILL_REQUIREMENT.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#JOB_ID_jsr").val("");
    	$("#SKILL_ID_jsr").val("");
	  	
	  }
} 

//Job application
function add_ja(){
    var APPLICATION_DATE = $("#APPLICATION_DATE_ja").val();
    var SCHOLAR_ID = $("#SCHOLAR_ID_ja").val();
    var JOBS_ID = $("#JOBS_ID_ja").val();

    // alert("Triggered");
	
    if(APPLICATION_DATE==="" || JOBS_ID ==="" || SCHOLAR_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"APPLICATION_DATE":APPLICATION_DATE,
	  		"SCHOLAR_ID":SCHOLAR_ID,
	  		"JOBS_ID":JOBS_ID
	  	}

	  	var url = "/backendService/POST/ADD_JOB_APPLICATION.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#APPLICATION_DATE_ja").val("");
    	$("#SCHOLAR_ID_ja").val("");
    	$("#JOBS_ID_ja").val("");
	  	
	  }
} 


//Past records
function add_pr(){
    var START_DATE = $("#START_DATE_pr").val();
    var END_DATE = $("#END_DATE_pr").val();
    var SCHOLAR_ID = $("#SCHOLAR_ID_pr").val();
    var MANAGER_ID = $("#MANAGER_ID_pr").val();
    var JOBS_ID = $("#JOBS_ID_pr").val();

    // alert("Triggered");
	
    if(START_DATE==="" || END_DATE ==="" || SCHOLAR_ID==="" || MANAGER_ID==="" || JOBS_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"START_DATE":START_DATE,
	  		"END_DATE":END_DATE,
	  		"SCHOLAR_ID":SCHOLAR_ID,
	  		"MANAGER_ID":MANAGER_ID,
	  		"JOBS_ID":JOBS_ID
	  	}

	  	var url = "/backendService/POST/ADD_PAST_RECORDS.xsjs";
	  	console.log(JSON.stringify(data));
	  	insert_data(url,JSON.stringify(data));
		$("#APPLICATION_DATE_ja").val("");
    	$("#SCHOLAR_ID_ja").val("");
    	$("#JOBS_ID_ja").val("");
	  	
	  }
} 

