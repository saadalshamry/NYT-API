//API Key: e7f9620ade334806b2c913e061942370

//Submit button
$("#submit").on("click", function (event) {

<<<<<<< HEAD
  var key = "?api-key=e7f9620ade334806b2c913e061942370";
=======

  var key = "$api-key=e7f9620ade334806b2c913e061942370";
>>>>>>> eb5d1a248516eed19d2e34830b5c1f159d0ec02b
  var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key"
  var searchTerm = $("#searchTerm").text(); //The search term input box
  var numRecords = $("#numRecords").text(); //The number of records input box
  var startYear = $("#startYear").text(); //The start year input box (optional)
  var endYear = $("#endYear").text(); //The end year input box (optional)

  var pageResults = 10;

<<<<<<< HEAD
  if (searchTerm !== "") {
    queryString += "&?q=" + searchTerm
  }
  if (numRecords !== "") {

    var numPages = Math.floor(numRecords / pageResults)

    queryString += "&?page=" + numPages
=======
  var queryString; //The query string that will be built
  
  //Creates the search term section of the query string.
  if (searchTerm !== ""){
  /*q  string
  Location: query ?q=xyz
  Search query term. Search is performed on the article body, headline and byline.*/

    queryString += "&?q=" + searchTerm 
  }

   //Creates the pages section of the query string.
  if (numRecords !== ""){
  /*page  integer
  Location: query ?page=123
  "The value of page corresponds to a set of 10 results 
  (it does not indicate the starting number of the result set). 
  For example, page=0 corresponds to records 0-9. To return records 10-19, 
  set page to 1, not 10."*/
      var numPages = Math.floor(numRecords/pageResults)
      queryString += "&?page=" + numPages
  }
  
//Creates the start year section of the query string.
  if (startYear !== ""){
  /*begin_date  string
  Location: query ?begin_date=xyz
  "Format: YYYYMMDD
  Restricts responses to results with publication dates of the date specified or later."*/
       queryString += "&?begin_date=" + startYear
>>>>>>> eb5d1a248516eed19d2e34830b5c1f159d0ec02b
  }
  var finalurl = apiurl + key + queryString;

  //Creates the end year section of the query string.
  if (endYear !== ""){
  /*end_date  string
  Location: query ?end_date=xyz
  "Format: YYYYMMDD
  Restricts responses to results with publication dates of the date specified or earlier."*/
    queryString += "&?end_date=" + endYear
 }



  $.ajax({
    url: finalurl
  }).then(function (response) {
    var res = response.response.docs;
    res.forEach(function (doc) {
      var div = $('<div class="doc">');
      var a = $('<a>')
      var h2 = $('<h2>')
      var p = $('<p>')
      h2.text(doc.headline.main);
      p.text(doc.snippet)
      a.attr('href', doc.web_url);
      a.text('Visit URL');
      div.append(h2);
      div.append(p);
      div.append(a);
      $('body').append(div);

    });
  });

});

//Clear button
$("#clear").on("click", function (event) {

});

