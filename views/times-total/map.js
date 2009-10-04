function(doc) {
  // !code vendor/couchapp/date.js

  if(doc.airtem && doc.start && doc.end) {
    var start = (new Date()).setRFC3339(doc.start);
    var end = (new Date()).setRFC3339(doc.end);
    var total = Math.round((end - start) / 1000); // seconds please
    log(doc.start);
    log(doc.end);
    log(total);

    emit(doc.airtem, total);
  }
}