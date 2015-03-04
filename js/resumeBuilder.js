//var formattedName = HTMLheaderName.replace("%data%", "Brian Harlin");
//var formattedRole = HTMLheaderRole.replace("%data%", "Overall Bad Ass");
//$("#header").prepend(formattedRole).prepend(formattedName);


var welcome = "Thanks for checking me out!";
var skillset = ["Puppy Dog Eyes", " Chillaxing ", " Barking at passersby", " Scratching door to be let in", " Scratching door to be let out"];

var bio = {
	"name" : "Banner Harlin",
	"role" : "Bad Ass Mo-Fo",
	"contact" : "bamf@wambam.com",
	"imageURL" : "images/banner.jpg",
	"welcomeMessage" : welcome,
	"skills" : skillset,
	"contacts" : {
			"mobile" : "775-555-5555",
			"email" : "theBoxer@southpaw.com",
			"github" : "BoxerBreath29",
			"twitter" : "@theDogPark",
			"location" : "1655 Commonwealth circle, Reno, NV"
	},
	display : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#topContacts").append(HTMLemail.replace("%data%", bio["contacts"]["email"]));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio["contacts"]["mobile"]));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio["contacts"]["github"]));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio["contacts"]["email"]));
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio["contacts"]["mobile"]));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio["contacts"]["github"]));
		$("#footerContacts").append(HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]));
		//console.log(bio.contacts.email);
		$("#header").prepend(formattedRole).prepend(formattedName);
		$("#header").append(HTMLbioPic.replace("%data%", bio.imageURL)).append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		var skill;
		for(skill in bio["skills"]) {
			$("#header").append(HTMLskills.replace("%data%", bio["skills"][skill]));
		}
	}
}

var work = {
	"job" : [
	{
		"employer" : "SALT Communications",
		"title" : "Disc Jockey / Music Director",
		"location" : "961 Matley Lane #120, Reno, NV",
		"dates" : "1995-6/30/1999",
		"description" : "Afternoon drive DJ and Music Director for KRZQ radio Alternative Rock Station."
	},
	{
		"employer" : "Nevada Bell Telephone",
		"title" : "Cable Maintenance Technician",
		"location" : "1375 Capital blvd, Reno, NV",
		"dates" : "7/1/1999-6/15/2007",
		"description" : "Maintain copper plant and air pressure system."
	},
	{
		"employer" : "AT&T",
		"title" : "Planner / Design Engineer",
		"location" : "645 E Plumb Ln, Reno, NV",
		"dates" : "6/16/2007-10/30/2010",
		"description" : "Design fiber optic network drawings for SONET and fiber Ethernet customer orders. Issue work prints to Outside Plant Construction for build"
	},
	{
		"employer" : "AT&T",
		"title" : "Equipment Engineer",
		"location" : "745 W Moana Ln, Reno, NV",
		"dates" : "11/1/15-Current",
		"description" : "Equipment ordering and design for Fiber Optic SONET and Ethernet MUX and switch placement both for internal and external customers."
	}
	],
	display : function (){
		var jobs;
		for(jobs in work.job) {
			$("#workExperience").append(HTMLworkStart);
			var employer = HTMLworkEmployer.replace("%data%", work["job"][jobs].employer);
			var jobTitle = HTMLworkTitle.replace("%data%", work["job"][jobs].title);
			var jobLocation = HTMLworkLocation.replace("%data%", work["job"][jobs].location);
			var dates = HTMLworkDates.replace("%data%", work["job"][jobs].dates);
			var description = HTMLworkDescription.replace("%data%", work["job"][jobs].description);
			$(".work-entry:last").append(employer + jobTitle);
			$(".work-entry:last").append(jobLocation);
			$(".work-entry:last").append(dates);
			$(".work-entry:last").append(description);
		//console.log(dates);
		//console.log(jobLocation);
		//console.log(dates);
		}
	}
}


var projects = {
	"projectsDone" : [
		{
		"title" : "Udacity Mockup",
		"dates" : "1/25/15-1/29/15",
		"description" : "Website created to match mockup.",
		"images" : "images/mockup.png"
		},
		{
		"title" : "Online Resume",
		"dates" : "2/9/15-current",
	    "description" : "Website created to highlight my skillzZz.",
		"images" : "images/resume.png"
		}
	],
	display : function () {
		//console.log("in projects.display")
		var title;
		var dates;
		var description;
		var pics;
		var projectNum;
		for(projectNum in projects["projectsDone"]) {
			$("#projects").append(HTMLprojectStart);
			title = HTMLprojectTitle.replace("%data%", projects["projectsDone"][projectNum].title);
			dates = HTMLprojectDates.replace("%data%", projects["projectsDone"][projectNum].dates);
			description = HTMLprojectDescription.replace("%data%", projects["projectsDone"][projectNum].description);
			pics = HTMLprojectImage.replace("%data%", projects["projectsDone"][projectNum].images);
			$(".project-entry:last").append(title);
			$(".project-entry:last").append(dates);
			$(".project-entry:last").append(description);
			$(".project-entry:last").append(pics);
			//console.log(pics);
		}
	}
}

var education = {
	"schools" : [
		{
			"name" : "University of Nevada Reno",
			"city" : "1664 N Virginia St, Reno, NV",
			"degree" : "none",
			"major" : "music",
			"dates" : "9/1992-6/1995",
			"url" : "http://www.unr.edu/"
		},
		{
			"name" : "TMCC",
			"city" : "7000 Dandini Blvd, Reno, NV",
			"degree" : "none",
			"major" : "Java",
			"dates" : "9/2004-6/2005",
			"url" : "http://www.tmcc.edu/"
		},
		{
			"name" : "Udacity",
			"city" : "2465 Latham Street, Mountain View, CA",
			"degree" : "Nanodegree",
			"major" : "Front End Web Developer",
			"dates" : "current",
			"url" : "https://www.udacity.com/nanodegree"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"name" : "Udacity",
			"dates" : "1/2015-2/2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "JavaScript Basics",
			"name" : "Udacity",
			"dates" : "2/2015-current",
			"url" : "https://www.udacity.com/course/ud804"
		}
	],
	display : function () {
		var school;
		for(school in education["schools"]) {
			console.log("school = " + school);
			$("#education").append(HTMLschoolStart);
			var institution = HTMLschoolName.replace("%data%", education["schools"][school].name);
			var major = HTMLschoolMajor.replace("%data%", education["schools"][school].major);
			var dates = HTMLschoolDates.replace("%data%", education["schools"][school].dates);
			var degree = HTMLschoolDegree.replace("%data%", education["schools"][school].degree);
			var url = HTMLschoolURL.replace("%data%", education["schools"][school].url);
			var city = HTMLschoolLocation.replace("%data%", education["schools"][school].city);
			$(".education-entry:last").append(institution);
			$(".education-entry:last").append(city);
			$(".education-entry:last").append(dates);
			$(".education-entry:last").append(major);
			$(".education-entry:last").append(degree);
			$(".education-entry:last").append(url);
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		school = 0;
		for(school in education["onlineCourses"]) {
			var institution = HTMLonlineSchool.replace("%data%", education["onlineCourses"][school].name);
			var title = HTMLonlineTitle.replace("%data%", education["onlineCourses"][school].title);
			var dates = HTMLonlineDates.replace("%data%", education["onlineCourses"][school].dates);
			var url = HTMLonlineURL.replace("%data%", education["onlineCourses"][school].url);
			//var city = HTMLschoolLocation.replace("%data%", education["schools"][school].city);
			$(".education-entry:last").append(institution);
			$(".education-entry:last").append(title);
			$(".education-entry:last").append(dates);
			$(".education-entry:last").append(url);
		}
	}
}

//call display functions
bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

//function inName(name) {
	//name = name.trim().split(" ");
	//console.log(name);
	//name[1] = name[1].toUpperCase();
	//name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	//console.log(name);
	//return name[0] + " " + name[1];
//};

//inName(bio.name);
//$(document).click(function(loc) {
	//var x = loc.pageX;
	//var y = loc.pageY;
	//onsole.log(loc.pageX);
	//logClicks(x,y);

//});

//function logClicks(x,y) {
	//var xPixel = "x=" + x;
	//var yPixel = "y=" + y;

	//var clickLog [];
	//clickLog = clickLog
	//console.log(xPixel + "; " + yPixel);

//};
//if (bio["skills"].length > 0 ) {

	//$("#header").append(HTMLskillsStart);
	//$("#skills").append(HTMLskills.replace("%data%", bio["skills"]));
	//console.log(bio.skills.length);
//}

//function locationizer() {
    //var workLoc;
    //var locArray = [];
    //for(workLoc in work.jobs) {
        //locArray.push(work.jobs[workLoc].location);
    //}
    //return locArray;
//};



//$("#header").append(HTMLcontactGeneric.replace("%contact%", "Hail me").replace("%data%", bio.contact));
//$("#header").append(HTMLskills.replace("%data%", bio.skills));
//$("#main").append(HTMLworkTitle.replace("%data%", work.employer));

//$("#main").append(HTMLschoolName.replace("%data%", education["lastSchool"]));
//$("#main").append(education["lastSchool"]);
//$("#white-text").prepend(HTMLcontactGeneric.replace("%data", bio.contact));

//console.log(work.employer);
//console.log(bio.contact);
//console.log(skillset);
