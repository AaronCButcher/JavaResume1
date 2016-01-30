var name = "Aaron Butcher";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);

var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName + formattedRole);


var bio = {
	"name" : "Aaron Butcher",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "Aaroncbutcher@gmail.com",
		"github" : "https://github.com/AaronCButcher",
		"location" : "Austin, Tx"
	},
	"welcome" : "Welcome to my Resume man",
	"skills" : [ 
	"HTML5", " CSS3",  " JavaScript", "Jquery"
	],
	"bioPic" : "images/fry.jpg"
};

var work = {
	"jobs" : [
{
	"name" : "ACCENTURE",
	"role" : "Software Engineer Associate",
	"employ" : "Sept 2015 - Present",
	"location" : "Austin, TX",
	"description" : "Main job task include editing and updating of Web app Websites and injecting SQL queries. Taking assignment given by senior developers and completing within the deadline."
},
	{
	"name" : "U.S. Air Force",
	"role" : "Aircraft Mechanic",
	"employ" : "2004 - 2010",
	"location" : "North Carolina",
	"description" : "All around maintence to Aircraft."
}
	]
};

var projects = {
	"projects" : [
		{
			"name" : "Weather App",
			"year" : "2015",
			"description" : "Shows the weather based on your ip address",
			"url" : "images/WeatherApp.png"
		},
		{
			"name" : "Calculator",
			"year" : "2015",
			"description" : "Is a Calculator",
			"url" : "images/Calculator.png"
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "Francis Tuttle",
			"city" : "Oklahoma City, OK, US",
			"majors" : "Web Developement",
			"dates" : 2014,
		}
	]
};

function displayBio() {

		var formattedTitle = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedDates = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedDescription = HTMLlocation.replace("%data%", bio.contacts.location);


 var formattedContact = formattedTitle + formattedDates + formattedDescription;
	$("#topContacts").append(formattedContact);

		var biopic = HTMLbioPic.replace("%data%", bio.bioPic);
			$("#topContacts").prepend(biopic);

		var welcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
			$(".biopic").append(welcome);

		// var skills = HTMLskills.replace("%data%", bio.skills);
		// 	$("#skills").append(skills);
};

displayBio();



//Displays skills

function displaySkills() {
	$("#header").append(HTMLskillsStart);
for (skill in bio.skills){

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills:last").append(formattedSkills);
}
};

displaySkills();

// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
// 	$("#skills").append(formattedSkill);
// };

//Displays Work History

function displayWork() {
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].name);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].employ);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDesrciption = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	var formattedEmployeeTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDesrciption;

	$(".work-entry:last").append(formattedEmployeeTitle);
	//$("#work-location").append(formattedLocation);
};
};

displayWork();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].year);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		
		var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].url);
		$(".project-entry:last").append(formattedimage);
		
	}
}
projects.display();




