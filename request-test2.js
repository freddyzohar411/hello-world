app.get('/search', (req, res) => {
  
var re_new = String(req).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  
const results = db.search(re_new.query.product));
if (results.length === 0) {
  return res.send('<p>No results found for "' + re_new.query.product + '"</p>');
}

});
