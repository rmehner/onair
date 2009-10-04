function(doc)
{
  if(doc.air) {
    emit(doc.title, doc.rate);
  }
}
