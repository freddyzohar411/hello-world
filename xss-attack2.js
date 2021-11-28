var xssFilters = require('xss-filters');

app.get('/search', (req, res) => {
  
var productParam = req.query.product;  
const results = db.search(req.query.product);

if (results.length === 0) {
res.send('<p>No result found for "' + xssFilters.inHTMLData(productParam) + '"</p>');
}  
  
});
