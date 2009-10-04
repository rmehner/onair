function(head, req)
{
  // !json templates.index
  // !code vendor/couchapp/template.js

  provides("html", function() {
    var row;
    while(row = getRow()) {
      send(template(templates.index.row, {
        title: row.key,
        rate: row.value,
        id: row.id
      }));
    }
  });
}
