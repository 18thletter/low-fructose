Template.NotFound.rendered = function() {
  document.title = "404 - Page Not Found";
  $('<meta>',
    {
      name: 'description',
      content: 'The page you requested has not been found.'
    }
   ).appendTo('head');
}
