/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Aditya Sharat
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * Use this directive to convert drop downs into chosen drop downs.
 * http://harvesthq.github.io/chosen/
 * http://adityasharat.github.io/angular-chosen/
 */
!function(e){function o(e){var o,t,n,s;return o=[{onChange:"change"},{onReady:"chosen:ready"},{onMaxSelected:"chosen:maxselected"},{onShowDropdown:"chosen:showing_dropdown"},{onHideDropdown:"chosen:hiding_dropdown"},{onNoResult:"chosen:no_results"}],t={options:"=",ngModel:"=",ngDisabled:"="},s=[],Object.keys(t).forEach(function(e){s.push(e)}),o.forEach(function(e){var o=Object.keys(e)[0];t[o]="="}),n=function(t,n,a){var i=parseInt(a.maxSelection,10),l=parseInt(a.searchThreshold,10);(isNaN(i)||i===1/0)&&(i=void 0),(isNaN(l)||l===1/0)&&(l=void 0);var d=void 0!==n.attr("allow-single-deselect")?!0:!1,c=void 0!==n.attr("no-results-text")?a.noResultsText:"No results found.",r=void 0!==n.attr("disable-search")?JSON.parse(a.disableSearch):!1,p=void 0!==n.attr("placeholder-text-single")?a.placeholderTextSingle:"Select an Option",h=void 0!==n.attr("placeholder-text-multiple")?a.placeholderTextMultiple:"Select Some Options",u=void 0!==n.attr("display-disabled-options")?JSON.parse(a.displayDisabledOptions):!0,_=void 0!==n.attr("display-selected-options")?JSON.parse(a.displaySelectedOptions):!0;n.chosen({width:"100%",max_selected_options:i,disable_search_threshold:l,search_contains:!0,allow_single_deselect:d,no_results_text:c,disable_search:r,placeholder_text_single:p,placeholder_text_multiple:h,display_disabled_options:u,display_selected_options:_}),n.on("change",function(){n.trigger("chosen:updated")}),t.$watchGroup(s,function(){e(function(){n.trigger("chosen:updated")},100)}),o.forEach(function(e){var o=Object.keys(e)[0];"function"==typeof t[o]&&n.on(e[o],function(e){t.$apply(function(){t[o](e)})})})},{name:"chosen",scope:t,restrict:"A",link:n}}var t=e.module("angular.chosen",[]);t.directive("chosen",["$timeout",o])}(angular);
