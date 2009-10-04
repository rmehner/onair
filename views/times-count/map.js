function(doc) {
  if(doc.airtem) {
    emit(doc.airtem, 1);
  }
}