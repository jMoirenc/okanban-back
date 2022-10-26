const formController =  {
  index (req, res){
    res.render('form', { csrfToken: req.csrfToken() });
  }
}

module.exports = formController;