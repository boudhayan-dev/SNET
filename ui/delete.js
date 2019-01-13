function delete_data(endpoint,Data){
	$.ajax({
			    	url: endpoint,
			        type: "POST",
			        data: Data,
			        contentType: 'application/json',
			        success:function(response) {
			            alert("Delete successful");           
			        },
			        error: function (error) {
			            alert("error");
			        }
			    });
}
//Scholar
function delete_scholar(){
	var ID = $("#ID_scholar").val();

    if(ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_SCHOLAR.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#ID_scholar").val("");
	  }
} 

//Manager
function delete_manager(){
	var ID = $("#ID_manager").val();

    if(ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_MANAGER.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#ID_manager").val("");
	  }
} 

//employee
function delete_employee(){
	var ID = $("#ID_employee").val();

    if(ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_EMPLOYEE.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#ID_employee").val("");
	  }
} 



//Jobs
function delete_jobs(){
	var ID = $("#ID_jobs").val();

    if(ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"ID":ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_JOBS.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#ID_jobs").val("");
	  }
} 



//SCHOLAR SKILLS
function delete_scholar_skills(){
	var SKILL_ID = $("#SKILL_ID_ss").val();
	var SCHOLAR_ID = $("#SCHOLAR_ID_ss").val();

    if(SKILL_ID==="" || SCHOLAR_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"SKILL_ID":SKILL_ID,
	  		"SCHOLAR_ID":SCHOLAR_ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_SCHOLAR_SKILLS.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#SKILL_ID_ss").val("");
		$("#SCHOLAR_ID_ss").val("");
	  }
}


//employee SKILLS
function delete_employee_skills(){
	var SKILL_ID = $("#SKILL_ID_es").val();
	var EMPLOYEE_ID = $("#EMPLOYEE_ID_es").val();

    if(SKILL_ID==="" || EMPLOYEE_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"SKILL_ID":SKILL_ID,
	  		"EMPLOYEE_ID":EMPLOYEE_ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_EMPLOYEE_SKILLS.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#SKILL_ID_es").val("");
		$("#EMPLOYEE_ID_es").val("");
	  }
}




//JOB SKILLS RQUIREMENT
function delete_jsr(){
	var JOB_ID = $("#JOB_ID_jsr").val();
	var SKILL_ID = $("#SKILL_ID_jsr").val();

    if(JOB_ID==="" || SKILL_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"JOB_ID":JOB_ID,
	  		"SKILL_ID":SKILL_ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_JOB_SKILLS_REQUIREMENT.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#JOB_ID_jsr").val("");
		$("#SKILL_ID_jsr").val("");
	  }
}


//JOB APPLICATION
function delete_ja(){
	var JOB_ID = $("#JOB_ID_ja").val();
	var SCHOLAR_ID = $("#SCHOLAR_ID_ja").val();

    if(JOB_ID==="" || SCHOLAR_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"JOB_ID":JOB_ID,
	  		"SCHOLAR_ID":SCHOLAR_ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_JOB_APPLICATION.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#JOB_ID_ja").val("");
		$("#SCHOLAR_ID_ja").val("");
	  }
}



//PAST RECORDS
function delete_pr(){
	var SCHOLAR_ID = $("#SCHOLAR_ID_pr").val();
	var MANAGER_ID = $("#MANAGER_ID_pr").val();
	var JOBS_ID = $("#JOBS_ID_pr").val();

    if(SCHOLAR_ID==="" || MANAGER_ID==="" || JOBS_ID==="")
     {
	    alert("Please complete the form");
	  }
	  else{
	  	var data = {
	  		"SCHOLAR_ID":SCHOLAR_ID,
	  		"MANAGER_ID":MANAGER_ID,
	  		"JOBS_ID":JOBS_ID
	  	}

	  	var url = "/backendService/DELETE/DELETE_PAST_RECORDS.xsjs";
	  	console.log(JSON.stringify(data));
	  	delete_data(url,JSON.stringify(data));
		$("#SCHOLAR_ID_pr").val("");
		$("#MANAGER_ID_pr").val("");
		$("#JOBS_ID_pr").val("");
	  }
}