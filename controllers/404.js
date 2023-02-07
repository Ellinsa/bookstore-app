exports.getErrorPage = (req, res, next) => {
  res.render('404', { docTitle: 'Not found', path: '/not-found' });
};
