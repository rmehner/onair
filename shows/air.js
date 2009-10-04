function(doc, req)
{
  // !json templates.air
  // !code vendor/couchapp/template.js
  return template(templates.air, doc);
}