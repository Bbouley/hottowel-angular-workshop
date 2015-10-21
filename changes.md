###changes made in the project

add features and components folders into client/app section


move admin and dashboard folders into features folder


change routes in admin.route.spec and admin.route to reflect where our files have changed path as we have moved folders around, same with dashboard.route.spec and with dashboard.route, then restart gulp serve-dev to allow wiredep to refind links, wiredep will do this automatically.


remove modules from app/app.modules


copy and paste app.module into features folder and change name to features.module.js (check project to see how its done) change name in admin and features to app.features.admin and app.features.dashboard. this needs to be changed in all files except html file. re-serve gulp.


add in module 'app.features' into app.module. (main one)


features.module should be .module('app.features', [etc...])


go into dashboard.html and we can start taking out bootstrap items and simply leave scaffolding on the page and add in components to be dropped onto the page. We're going to ceate a people grid and refactor out the people widget (row 29 - 54)

create new folder in components. called peoplegrid.

copy features module into components folder and add in module app.components, with app.components.peopleGrid as the first dependency injection.

then copy components module into people grid folder.


into peoplegrid add html file and directive file.

write out directive file and give it a named function. (see how it's done in project, look at file); templateUrl needs to have a path from app folder. the static path already points at client, so that's where it starts.








