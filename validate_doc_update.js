function(new_doc, old_doc, user_context)
{
  var require = function(name) {
    if(!new_doc[name]) {
      throw({"forbidden": "Document must have a '" + name +"' field."});
    }
  }

  if(new_doc.air) {
    require("title");
    require("rate");
  }
}
