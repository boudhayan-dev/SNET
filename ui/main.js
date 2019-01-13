
function call_api(params,endpoint) { 

	$.ajax({
			    	url: endpoint,
			        method: "GET",
			        success:function(response) {
			        	console.log(endpoint);
			            var data= response.results;
			            console.log(data.length);
			            var html_text="<thead>";
			            
			            for(param=0;param<params.length;param++){
			            	html_text+='<th>'+params[param]+'</th>';
			            	
			            }
			            html_text+='</thead>';
			            for(i=0;i<data.length;i++){
			            	html_text+='<tr>';
			            	for(j=0;j<params.length;j++){
			            		html_text+='<td>'+data[i][params[j]]+'</td>'
			            	}
			            	html_text+='</tr>';             
			            }
			            
			   //         var tableHTML = $('#excelDataTable');
			   //         tableHTML.html('');
						// html_text.appendTo(tableHTML);
			            
			            // $("#excelDataTable").HTML("");
			            $("#excelDataTable").empty().append(html_text);
			            console.log(html_text);
			            
			        },
			        error: function (error) {
			            console.log("error");
			        }
			    });
	console.log("Clicked")
};




function get_all_employees() {
	var endpoint = "/backendService/GET/GET_ALL_EMPLOYEES.xsjs";
	var params=['ID','MANAGER_ID','EMAIL','NAME','BIRTHDATE','PHONE'];
	call_api(params,endpoint);
}

function get_all_jobs() {
	var endpoint = "/backendService/GET/GET_ALL_JOBS.xsjs";
	var params=['ID','MANAGER_ID','START_DATE','END_DATE','DESCRIPTION','VACANCY'];
	call_api(params,endpoint);
}
function get_all_managers() {
	var endpoint = "/backendService/GET/GET_ALL_MANAGERS.xsjs";
	var params=['MID','LOB','EMAIL','TEAM_NAME','NAME','PHONE'];
	call_api(params,endpoint);
}
function get_all_scholars() {
	var endpoint = "/backendService/GET/GET_ALL_SCHOLARS.xsjs";
	var params=['ID','MANAGER_ID','NAME','BIRTHDATE','EMAIL','PHONE'];
	call_api(params,endpoint);
}


function get_all_skills() {
	var endpoint = "/backendService/GET/GET_ALL_SKILLS.xsjs";
	var params=['ID','NAME'];
	call_api(params,endpoint);
}


// Queries that need input SET-1

function get_employee(){
	if($("#employeeID").val()===""){
		alert('Please enter employee ID');
	}
	else{
		var endpoint = "/backendService/GET/GET_EMPLOYEE.xsjs?ID="+$("#employeeID").val();
		var params=['ID','MANAGER_ID','EMAIL','NAME','BIRTHDATE','PHONE'];
		call_api(params,endpoint);
		$("#employeeID").val("");
	}
}

function get_manager(){
	if($("#managerID").val()===""){
		alert('Please enter manager ID');
	}
	else{
		var endpoint = "/backendService/GET/GET_MANAGER.xsjs?MID="+$("#managerID").val();
		var params=['MID','LOB','EMAIL','TEAM_NAME','NAME','PHONE'];
		call_api(params,endpoint);
		$("#managerID").val("");
	}
}


function get_scholar(){
	if($("#scholarID").val()===""){
		alert('Please enter scholar ID');
	}
	else{
		var endpoint = "/backendService/GET/GET_SCHOLAR.xsjs?SID="+$("#scholarID").val();
		var params=['ID','MANAGER_ID','NAME','BIRTHDATE','EMAIL','PHONE'];
		call_api(params,endpoint);
		$("#scholarID").val("");
	}
}

function get_skill(){
	if($("#skillID").val()===""){
		alert('Please enter skill ID');
	}
	else{
		var endpoint = "/backendService/GET/GET_SKILL.xsjs?SID="+$("#skillID").val();
		var params=['ID','NAME'];
		call_api(params,endpoint);
		$("#skillID").val("");
	}
}

function get_job(){
	if($("#jobID").val()===""){
		alert('Please enter job ID');
	}
	else{
		var endpoint = "/backendService/GET/GET_JOB.xsjs?JID="+$("#jobID").val();
		var params=['ID','MANAGER_ID','START_DATE','END_DATE','DESCRIPTION','VACANCY'];
		call_api(params,endpoint);
		$("#jobID").val("");
	}
}



// Queries that need input SET-2
function get_job_based_on_skills() {
	console.log('funch triggered');
	if($("#scholar_id").val()===""){
		alert('Please enter scholar ID');
	}
	else{
		var endpoint = "/backendService/GET/GET_JOB_BASED_ON_SKILLS.xsjs?SCHOLAR_ID="+$("#scholar_id").val();
		var params=['ID','MANAGER_ID','START_DATE','END_DATE','DESCRIPTION','VACANCY'];
		console.log(endpoint);
		call_api(params,endpoint);
		$("#scholar_id").val("");
		
	}
	
}


function get_scholar_help_skill() {
	
	if($("#skill_name").val()===""){
		alert('Please enter skill');
	}
	else{
		var endpoint = "/backendService/GET/GET_SCHOLAR_HELP_SKILL.xsjs?SKILL_NAME="+$("#skill_name").val();
		var params=['NAME'];
		console.log(endpoint);
		call_api(params,endpoint);
		$("#skill_name").val("");
		
	}
}


 // Analytical queries - WIHOUT input

function get_scholar_experience() {
	var endpoint = "/backendService/GET/GET_SCHOLAR_EXPERIENCE_PER_SKILL.xsjs";
	var params=['SCHOLAR','SKILL','EXPERIENCE'];
	call_api(params,endpoint);
}

function get_skill_popularity_distribution() {
	var endpoint = "/backendService/GET/GET_SKILL_POPULARITY_DISTRIBUTION.xsjs";
	var params=['SKILL','NUM_OF_SCHOLARS'];
	call_api(params,endpoint);
}

function get_job_application_distribution() {
	var endpoint = "/backendService/GET/GET_JOB_APPLICATION_DISTRIBUTION.xsjs";
	var params=['JOB_ID','NUM_OF_SCHOLARS'];
	call_api(params,endpoint);
}

// Analytical queries with input
function get_team_skill_distribution() {
	if($("#team_skill_distribution").val()===""){
		alert('Please enter skill');
	}
	else{
		var endpoint = "/backendService/GET/GET_TEAM_SKILL_DISTRIBUTION.xsjs?SKILL_NAME="+$("#team_skill_distribution").val();
		var params=['TEAM_NAME','STRENGTH'];
		console.log(endpoint);
		call_api(params,endpoint);
		$("#team_skill_distribution").val("");
		
	}
}


function get_scholar_compatibility() {
	if($("#scholar_compatibility_1").val()==="" || $("#scholar_compatibility_2").val()===""){
			alert('Please enter scholar IDs');
		}
	else{
		var endpoint = "/backendService/GET/GET_SCHOLAR_COMPATIBILITY.xsjs?SID1="+$("#scholar_compatibility_1").val()+'&SID2='+$("#scholar_compatibility_2").val();
		var params=['SKILLS','COMPATIBILITY'];
		console.log(endpoint);
		call_api(params,endpoint);
		$("#scholar_compatibility_1").val("");
		$("#scholar_compatibility_2").val("");
		
	}
}




