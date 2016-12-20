angular.module('mainModule', ['ngRoute','ui.sortable','uiGmapgoogle-maps','xeditable','ngCookies'])
	.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});