app.get('/search', (req, res) => {
  
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  
const results = db.search(re.test(req.query.product));
if (results.length === 0) {
  return res.send('<p>No results found for "' + req.query.product + '"</p>');
}

});
