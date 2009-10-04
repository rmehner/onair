function(doc) {
  if(doc.airtem) {
    var end = doc.end || 0;
    emit([doc.airtem, doc.end], doc.end);
  }
}