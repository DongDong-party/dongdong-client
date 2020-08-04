class QueryManager {
  static getQueryStringObject() {
    var queryString = window.location.search.substr(1).split("&");
    if (queryString == "") return {};
    var queryObject = {};
    for (var i = 0; i < queryString.length; ++i) {
      var p = queryString[i].split("=", 2);
      if (p.length == 1) queryObject[p[0]] = "";
      else queryObject[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return queryObject;
  }

  static makeQueryString(obj) {
    return Object.entries(obj)
      .map((e) => e.join("="))
      .join("&");
  }
}

export default QueryManager;
