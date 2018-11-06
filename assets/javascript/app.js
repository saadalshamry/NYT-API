//API Key: e7f9620ade334806b2c913e061942370

//Submit button
$("#submit").on("click", function (event) {

  var key = "$api-key=e7f9620ade334806b2c913e061942370";
  var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key"
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



  $.ajax({
    url: url
  }).then(function (response) {
    var res = response.response.docs;
    res.forEach(function (doc) {
      var div = $('<div class="doc">');
      var a = $('<a>')
      a.attr('href', doc.web_url);
      a.text('Visit URL')
    });
  });

});

//Clear button
$("#clear").on("click", function (event) {

});

////eflms;mfosrmg'kjwepjf p[ewkfgjoepwksfl'