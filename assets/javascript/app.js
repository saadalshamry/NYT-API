//API Key: e7f9620ade334806b2c913e061942370

//Submit button
$("#submit").on("click", function (event) {

  var searchTerm = $("#searchTerm").text(); //The search term input box
  var numRecords = $("#numRecords").text(); //The number of records input box
  var startYear = $("#startYear").text(); //The start year input box (optional)
  var endYear = $("#endYear").text(); //The end year input box (optional)
  var pageResults = 10;

  var queryString; //The query string that will be built

  if (searchTerm !== ""){
    queryString += "&?q=" + searchTerm
  }
  if (numRecords !== ""){
      var numPages = Math.floor(numRecords/pageResults)
      queryString += "&?page=" + numPages
  }
  if (startYear !== ""){
  
     queryString += "?begin_date=" + startYear
  }
  if (endYear !== ""){
  
    queryString += "?end_date=" + endYear
 }



});

//Clear button
$("#clear").on("click", function (event) {

});

////eflms;mfosrmg'kjwepjf p[ewkfgjoepwksfl'