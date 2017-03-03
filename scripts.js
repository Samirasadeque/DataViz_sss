/**

 * @author Syeda Sadeque

 */

/* Burma's refugee crisis is ongoing which is why it's difficult to get a definite number of refugees or displaced population in the country. But in order for this webpage to be valid, we need to have at least an estimate of displaced people in Burma. So, we decided to put together all the data we have on all the different kinds of refugees to have some estimate on the number of people who are fleeing persecution in the country. */

var total_displaced_population_across_all_ethncities_in_Burma = 700000;

/* What makes the Rohingya population different from other refugee communities is how it's been termed a certain way by international media. It's important to have that definition in this description. */

var international_media_definition_of_Rohingyas = "most persecuted minority";

/* A lot of countries have only one kind of refugee communities. But Burma's case is different - it has many types of religious and ethnic communities fleeing persection. */

var More_than_one_type_refugee = true;

/* And therefore, it's important to classify the different refugee communities in Burma. There are religious, ethnic, as well as climate refugees.' */

var refg_types = ["Rohingya", "Chin Christians", "Karen", "Climate Refugees", "Buddhist Refugees"];

/* The biggest refugee population in Burma is the Rohingya population, so it's important to have enough information about them such as where they go, their population and what kinds of abuses they face. */

var Rohingya_characteristics = {

	"religion" : "Muslim",

	"region" : "Rakhine",

	"population" : "One million",

	"refugees_in_countries" : ["Bangladesh", "Malaysia", "Thailand", "Indonesia"],

	"Rohingya_refugee_population_in_Bangladesh" : {

		"refugee_concerns_in_Bangladesh" : "terrorism",

		"refugee_numbers_est" : 500000,

		"refugee_religion_majority" : "Muslim",

		"abuse_type" : "rape"

	},

};

/* Here I am going to classify the different links I've used to put together my webpage. There are four of them. */

var ListofSourcesForMyWebsite = [{

	"NameOfThisSection" : "The world's 'most persecuted': The Rohingyas",

	"TypeOfPublication" : "Research",

	"LocationOfPublication" : "http://www.cfr.org/burmamyanmar/rohingya-migrant-crisis/p36651",

	"DateUploaded" : "January 12 2017",

},

/* This is about the Karen population and will list the properties of the source of information about this population */

{

	"NameOfThisSection" : "Karen: An ethnic minority in Burma",

	"TypeOfPublication" : "Article",

	"LocationOfPublication" : "https://www.theguardian.com/world/2016/apr/17/can-myanmars-lady-realise-countrys-dreams",

	"DateUploaded" : "April 16 2016",

},

/* This is about the Chin refugees and will list the properties of the source of information about this population */

{

	"NameOfThisSection" : "Plight of the Chin Christians fleeing Burma",

	"TypeOfPublication" : "Article",

	"LocationOfPublication" : "http://news.bbc.co.uk/2/hi/asia-pacific/8626008.stm",

	"DateUploaded" : "April 19 2010",

},

/* This section is about the climate refugees and will list the properties of the source of information about this population */

{

	"NameOfThisSection" : "Climate refugees of Burma",

	"TypeOfPublication" : "Research",

	"LocationOfPublication" : "https://static1.squarespace.com/static/506c8ea1e4b01d9450dd53f5/t/5845f2e2f7e0ab230f4631cb/1480979178783/2016126+Myanmar.pdf",

	"DateUploaded" : "December 2010",

}];

/* Goal: Go through each item and print a message to the console everytime i want to check the type of publication */

function checkTypeOfPublication(PublicationList) {

	for (var counter = 0; counter < PublicationList.length; counter++) {

		/* Check if the type of publication is "Article"

		 * If it is, then print the object.

		 * If not, print "not article"	*/

		var currentSource = PublicationList[counter];

		if (currentSource.TypeOfPublication == "Article") {

			console.log(currentSource);

		} else {

			console.log("not article");

		}

	}

	console.log("This is the end of the loop!");

}

/*	Explicitly call the function that checks type of publication */

checkTypeOfPublication(ListofSourcesForMyWebsite);
