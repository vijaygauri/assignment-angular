angular.module('demoapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/common/header.html',
    "<nav class=\"navbar navbar-inverse background-navbar navbar-fixed-top\" role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"container-fluid\">\r" +
    "\n" +
    "   <div class=\"navbar-header\">\r" +
    "\n" +
    "   </div> \r" +
    "\n" +
    "    <a class=\"navbar-brand pull-right\" href=\"#\">Logout</a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</nav>    \r" +
    "\n" +
    "\r" +
    "\n" +
    " <div class=\"nav-side-menu top_add\" ng-controller=\"MenuCtrl\">\r" +
    "\n" +
    "  <menu menus='menus' location='pull-left' class=\"menu-list\"></menu>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/common/navbar.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('src/demoapp/templates/accountSummary.html',
    " <div ng-include='\"src/common/header.html\"'></div>\r" +
    "\n" +
    "<div class=\"container-fluid top_container\">\r" +
    "\n" +
    "\t<div class=\"row row-offcanvas row-offcanvas-right\">\r" +
    "\n" +
    "\t\t<div class=\"col-xs-6 col-sm-3 col-sm-pull-1 sidebar-offcanvas\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"col-xs-12 col-sm-9 col-sm-push-3\">\r" +
    "\n" +
    "  <div class=\"panel panel-default\">\r" +
    "\n" +
    "  <div class=\"panel-body\">Account Summary</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/demoapp/templates/demoapp.html',
    "<form class=\"form-horizontal\" name=\"loginForm\" novalidate>\r" +
    "\n" +
    "    \r" +
    "\n" +
    "<div class=\"container top_container\">     \r" +
    "\n" +
    "    <div class=\"col-md-5 col-md-offset-3\">                    \r" +
    "\n" +
    "        <div class=\"panel panel-info\" >\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"panel-title\">Sign in</div>\r" +
    "\n" +
    "            </div>     \r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"panel-body login-form\" >\r" +
    "\n" +
    "             <div class=\"col-sm-offset-2  pull-left\">\r" +
    "\n" +
    "                 <div class=\"alert alert-danger\" ng-show=\"IsVisible\">\r" +
    "\n" +
    "                 {{errorLogin}}</div></div>    \r" +
    "\n" +
    "  <div class=\"\" ng-class=\"{'has-error': loginForm.email.$invalid && loginForm.email.$dirty, 'has-success': loginForm.email.$valid }\">\r" +
    "\n" +
    "    <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" ng-model=\"user.email\" required/>\r" +
    "\n" +
    "    <p class=\"help-block\" ng-if=\"loginForm.email.$invalid && loginForm.email.$dirty\">Please Enter a valid email address</p>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <br/>\r" +
    "\n" +
    "  <div class=\"\" ng-class=\"{'has-error': loginForm.password.$invalid && loginForm.password.$dirty, 'has-success': loginForm.password.$valid}\">\r" +
    "\n" +
    "    <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" ng-model=\"user.password\" ng-minLength=\"8\" required/>\r" +
    "\n" +
    "    <p class=\"help-block\" ng-if=\"loginForm.password.$invalid && loginForm.password.$dirty\">Please Enter at least 8 characters</p>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <br/>\r" +
    "\n" +
    "  <button class=\"btn btn-default pull-right\" ng-click=\"submitLogin()\" ng-disabled=\"loginForm.emails.$invalid || loginForm.password.$invalid\">Sign In</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('src/demoapp/templates/home.html',
    " <div ng-include='\"src/common/header.html\"'></div>\r" +
    "\n" +
    "<div class=\"container-fluid\">\r" +
    "\n" +
    "\t<div class=\"row row-offcanvas row-offcanvas-right\">\r" +
    "\n" +
    "\t\t<div class=\"col-xs-6 col-sm-3 col-sm-pull-1 sidebar-offcanvas\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <!-- Sidebar -->\r" +
    "\n" +
    "       \r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"col-xs-12 col-sm-9 col-sm-push-3\">\r" +
    "\n" +
    "  <p><strong></strong></p>\r" +
    "\n" +
    "      <div ui-grid=\"gridOptions1\" ui-grid-pagination class=\"grid\"></div>\r" +
    "\n" +
    "      <br /><br />\r" +
    "\n" +
    "     \r" +
    "\n" +
    "      <div ui-grid=\"gridOptions2\" ui-grid-pagination class=\"grid\"></div>\r" +
    "\n" +
    "      <p>Current page: {{ gridApi2.pagination.getPage() }} of {{ gridApi2.pagination.getTotalPages() }}</p>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-success\" ng-click=\"gridApi2.pagination.previousPage()\">\r" +
    "\n" +
    "        previous page\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-success\" ng-click=\"gridApi2.pagination.nextPage()\">\r" +
    "\n" +
    "        next page\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "      <button type=\"button\" class=\"btn btn-success\" ng-click=\"gridApi2.pagination.seek(3)\">\r" +
    "\n" +
    "        go to page 2\r" +
    "\n" +
    "      </button>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "  "
  );


  $templateCache.put('src/index.html',
    "<!DOCTYPE HTML>\r" +
    "\n" +
    "<html>\r" +
    "\n" +
    "    <head>\r" +
    "\n" +
    "    <title>Login Page</title>\r" +
    "\n" +
    "    <link rel=\"stylesheet\" text=\"text/css\" href=\"css/bower.css\"/>\r" +
    "\n" +
    "    <link rel=\"stylesheet\" text=\"text/css\" href=\"css/app.css\"/>\r" +
    "\n" +
    "<link rel=\"stylesheet\" href=\"http://ui-grid.info/release/ui-grid.css\" type=\"text/css\"/>\r" +
    "\n" +
    "    <script src=\"js/bower.js\"></script>\r" +
    "\n" +
    "    <script src=\"js/app.js\"></script>\r" +
    "\n" +
    "    <script src=\"js/templates.js\"></script>\r" +
    "\n" +
    "    </head>\r" +
    "\n" +
    "    <body>\r" +
    "\n" +
    "        <div id=\"LogIn\">\r" +
    "\n" +
    "       \r" +
    "\n" +
    "        <div ng-view></div>\r" +
    "\n" +
    "        </div>     \r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <script>\r" +
    "\n" +
    "            var container = document.getElementById(\"LogIn\");\r" +
    "\n" +
    "            angular.element(document).ready(function(){\r" +
    "\n" +
    "                angular.bootstrap(container,['demoapp']);\r" +
    "\n" +
    "            })\r" +
    "\n" +
    "        </script>    \r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </body>\r" +
    "\n" +
    "</html>    \r" +
    "\n"
  );

}]);
