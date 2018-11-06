//API Key: e7f9620ade334806b2c913e061942370

//Submit button
$("#submit").on("click", function (event) {

  var searchTerm = $("#searchTerm").text();
  var numRecords = $("#numRecords").text();
  var startYear = $("#startYear").text();
  var endYear = $("#endYear").text();
  var pageResults = 10;

  var queryString;

  if (searchTerm !== ""){
    queryString += "&?q=" + searchTerm
  }
  if (numRecords !== ""){
  
     var numPages = Math.floor(numRecords/pageResults)

    queryString += "&?page=" + numPages
  }



});

//Clear button
$("#clear").on("click", function (event) {

});

////eflms;mfosrmg'kjwepjf p[ewkfgjoepwksfl'