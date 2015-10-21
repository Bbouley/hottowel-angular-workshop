##gulp template-cache :
 - this caches templates and minifies the javascript so  that when calls are made for a new age the browser already has them cached and ready to go.

##downsides to hottowel :
 - he uses views and controllers in admin, this is against his own best practices. There are no reusable components in this admin file.

##wiredep:
 - it looks for 'main' tag in bower/angular/package.json. this is what it uses to fire up the site. This is what it tells the file to load and where to get them from. If you include a component that does not have a main.js then you need to change the package.json to reflect this.


##Folder Structure:
  - App folder is for app specific javascript code. Images, styles and test helpers are not part of the app. Exclusively for app specific JS code. Images and styles would normally go in a resources folder.
