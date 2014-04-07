Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<a>SETTINGS</a>");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<a>DETAILED SEARCH</a>");
  }

  data.buffer.push("<div class=\"nav\">\n    <div class=\"nav_container\">\n        <a href=\"#\">\n            <div class=\"brand\"></div>\n        </a>\n        <ul class=\"nav_links\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings", options) : helperMissing.call(depth0, "link-to", "settings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "detailedSearch", options) : helperMissing.call(depth0, "link-to", "detailedSearch", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </ul>\n        <div class=\"search\">\n            <div class=\"navbar-form navbar-left\" role=\"search\">\n                <div class=\"form-group\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("query"),
    'action': ("search"),
    'class': ("form-control"),
    'placeholder': ("Search")
  },hashTypes:{'type': "STRING",'value': "ID",'action': "STRING",'class': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'action': depth0,'class': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"body\">\n    <div class=\"body_container\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["dashboard"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Detailed Search");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers.each.call(depth0, "model.recent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "", options) : helperMissing.call(depth0, "link-to", "event", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                                <h3 style=\"font-size: 18px; margin: 0px;\">\n                                    ");
  data.buffer.push(escapeExpression((helper = helpers['event-color'] || (depth0 && depth0['event-color']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event", options) : helperMissing.call(depth0, "event-color", "event", options))));
  data.buffer.push("\n                                </h3>\n                                <p style=\"font-size: 10px; margin: 0px; color: #AAA;\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "timestamp", options) : helperMissing.call(depth0, "format-date", "timestamp", options))));
  data.buffer.push("</p>\n                                <p class=\"truncate\" style=\"font-size: 14px; margin-top: 5px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                            ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n                        <span href=\"#\" class=\"list-group-item\">\n                            <h3 style=\"font-size: 18px; margin-top: 1em; margin-bottom: 1em;\">\n                                No recent events.\n                            </h3>\n                        </span>\n                    ");
  }

  data.buffer.push("<h1 class=\"outer-text\">Dashboard</h1>\n<p class=\"outer-text\">Welcome to the SendGrid Event Webhook Starter Kit. Use the search box below to start searching your logs.</p>\n<div class=\"panel panel-default\" style=\"margin-top: 25px\">\n    <div class=\"panel-body\">\n        <h1 style=\"margin-top: 0px\">Search</h1>\n        <p>Your query below will check every field in the database (to, from, etc.). You can also specify specific fields by going to the ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "detailedSearch", options) : helperMissing.call(depth0, "link-to", "detailedSearch", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" page.</p>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("query"),
    'action': ("search"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'action': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'action': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n</div>\n\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; table-layout:fixed;\">\n    <tr>\n        <td style=\"width: 415px; vertical-align: top;\">\n            <div class=\"panel panel-info\" style=\"margin-top: 25px;\">\n                <div class=\"panel-heading\">\n                    Most Recent Events\n                </div>\n                <div class=\"list-group\" style=\"overflow-y: auto; height: 275px;\">\n                    ");
  stack1 = helpers['if'].call(depth0, "model.recent.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </td>\n        <td style=\"width: 40px\"></td>\n        <td style=\"width: 415px; vertical-align: top;\">\n            <div class=\"panel panel-info\" style=\"margin-top: 25px\">\n                <div class=\"panel-heading\">\n                    Total Events In Past 24 Hours\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: auto; height: 275px;\">\n                    <span style=\"text-align: center\">\n                        <h1 style=\"font-size: 72px; margin-top: 50px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "model.totals", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                        <h3>");
  data.buffer.push(escapeExpression((helper = helpers['plural-event'] || (depth0 && depth0['plural-event']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.totals", options) : helperMissing.call(depth0, "plural-event", "model.totals", options))));
  data.buffer.push("</h3>\n                    </span>\n                </div>\n            </div>\n        </td>\n    </tr>\n</table>\n<h1>&nbsp;</h1>");
  return buffer;
  
});

Ember.TEMPLATES["detailedSearch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"form-group filter-row\">\n                    <label class=\"col-sm-2 control-label\" style=\"width: 170px; text-align: right; margin-top: 8px;\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label>\n                    ");
  stack1 = helpers['if'].call(depth0, "additional_arguments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <button type=\"button\" class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFilter", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Remove Filter</button>                        \n                </div>\n            ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("key"),
    'class': ("form-control form-argument-field"),
    'placeholder': ("Argument Key"),
    'type': ("text"),
    'name': ("name_key")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING",'type': "STRING",'name': "ID"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0,'type': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("val"),
    'class': ("form-control form-argument-field"),
    'placeholder': ("Argument Value"),
    'type': ("text"),
    'name': ("name_val")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING",'type': "STRING",'name': "ID"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0,'type': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        ");
  stack1 = helpers['if'].call(depth0, "dateStart", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("val"),
    'class': ("form-control form-field init-date-picker"),
    'placeholder': ("Date Start"),
    'type': ("text"),
    'name': ("id")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING",'type': "STRING",'name': "ID"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0,'type': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            ");
  stack1 = helpers['if'].call(depth0, "dateEnd", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("val"),
    'class': ("form-control form-field init-date-picker"),
    'placeholder': ("Date End"),
    'type': ("text"),
    'name': ("id")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "STRING",'type': "STRING",'name': "ID"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0,'type': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("val"),
    'class': ("form-control form-field"),
    'placeholder': ("name"),
    'type': ("text"),
    'name': ("id")
  },hashTypes:{'value': "ID",'class': "STRING",'placeholder': "ID",'type': "STRING",'name': "ID"},hashContexts:{'value': depth0,'class': depth0,'placeholder': depth0,'type': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                    <li><a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addFilter", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n                ");
  return buffer;
  }

  data.buffer.push("<div class=\"panel panel-default\" style=\"margin-top: 25px\">\n    <div class=\"panel-body\">\n        <h1 style=\"margin:0px;\">Detailed Search</h1>\n        <p style=\"margin-top: 0px;\">Add filters below to narrow down your search:</p>\n        <form id=\"detailedSearchParams\" class=\"form-inline\" role=\"form\" style=\"margin-bottom: 15px\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSearch", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers.each.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </form>\n        \n        <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n                Add Filter <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\" id=\"add_filter_menu\">\n                ");
  stack1 = helpers.each.call(depth0, "allFilters", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n\n        <button type=\"button\" class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submitSearch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Search</button>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["detailedSearchResults"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"panel panel-default\" style=\"margin-top: 25px\">\n        <div class=\"panel-body\">\n            <h1 style=\"margin:0px;\">Search Results</h1>\n            <p>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "detailedSearch", options) : helperMissing.call(depth0, "link-to", "detailedSearch", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(".</p>\n            <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "downloadCSV", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Download as CSV</a></p>\n        </div>\n        <div class=\"list-group\">\n            ");
  stack1 = helpers['if'].call(depth0, "data.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    ");
  stack1 = helpers['if'].call(depth0, "data.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <h1>&nbsp;</h1>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Modify your search");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.each.call(depth0, "data", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "", options) : helperMissing.call(depth0, "link-to", "event", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; table-layout:fixed;\">\n                            <tr>\n                                <td style=\"width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;\">\n                                    <h3 style=\"font-size: 18px; margin: 0px;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers['event-color'] || (depth0 && depth0['event-color']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event", options) : helperMissing.call(depth0, "event-color", "event", options))));
  data.buffer.push("\n                                    </h3>\n                                    ");
  stack1 = helpers['if'].call(depth0, "timestamp", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                                <td style=\"width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;\">\n                                    ");
  stack1 = helpers['if'].call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "additional_arguments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                            </tr>\n                        </table>\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                        <p style=\"font-size: 10px; margin: 0px; color: #AAA;\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "timestamp", options) : helperMissing.call(depth0, "format-date", "timestamp", options))));
  data.buffer.push("</p>\n                                    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <p class=\"truncate\" style=\"font-size: 14px; margin: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                                    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <p class=\"truncate\" style=\"font-size: 14px; margin-top: 5px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <p style=\"margin: 0px; font-weight: bold\">Categories:</p>\n                                        <ul>\n                                            ");
  stack1 = helpers.each.call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        </ul>\n                                    ");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <li>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                                            ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                        <p style=\"margin: 0px; font-weight: bold;\">Additional Arguments</p>\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers['list-additional-arguments'] || (depth0 && depth0['list-additional-arguments']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "additional_arguments", options) : helperMissing.call(depth0, "list-additional-arguments", "additional_arguments", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program18(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"list-group-item\">\n                    <h3 style=\"font-size: 18px; margin: 0px;\">\n                        No results.\n                    </h3>\n                </div>\n            ");
  }

function program20(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style=\"text-align: center; margin: auto;\">\n            <ul class=\"pagination\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['result-pagination'] || (depth0 && depth0['result-pagination']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "pages", options) : helperMissing.call(depth0, "result-pagination", "pages", options))));
  data.buffer.push("\n            </ul>\n        </div>\n    ");
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["email"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <h2 style=\"font-size: 18px; margin-top: 0px; font-weight: bold;\">");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n    ");
  return buffer;
  }

  data.buffer.push("<span class=\"outer-text\">\n    <h1>Email Details</h1>\n    ");
  stack1 = helpers['if'].call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</span>\n<table border=\"0\" style=\"width: 100%;\">\n    <tr>\n        <td style=\"width:25%; padding: 5px;\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\" style=\"text-align: center;\">\n                    Processed Events\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: auto; height: 150px;\">\n                    <span style=\"text-align: center\">\n                        <h1 style=\"font-size: 72px; margin-top: 15px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "data.processed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n                    </span>\n                </div>\n            </div>\n        </td>\n        <td style=\"width:25%; padding: 5px;\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\" style=\"text-align: center;\">\n                    Delivery Rate\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: auto; height: 150px;\">\n                    <span style=\"text-align: center\">\n                        <h1 style=\"font-size: 72px; margin-top: 15px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "data.delivery_rate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span style=\"font-size: 32px\">%</span></h1>\n                    </span>\n                </div>\n            </div>\n        </td>\n        <td style=\"width:25%; padding: 5px;\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\" style=\"text-align: center;\">\n                    Open Rate\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: auto; height: 150px;\">\n                    <span style=\"text-align: center\">\n                        <h1 style=\"font-size: 72px; margin-top: 15px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "data.open_rate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span style=\"font-size: 32px\">%</span></h1>\n                    </span>\n                </div>\n            </div>\n        </td>\n        <td style=\"width:25%; padding: 5px;\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\" style=\"text-align: center;\">\n                    Click Rate\n                </div>\n                <div class=\"panel-body\" style=\"overflow-y: auto; height: 150px;\">\n                    <span style=\"text-align: center\">\n                        <h1 style=\"font-size: 72px; margin-top: 15px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "data.click_rate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("<span style=\"font-size: 32px\">%</span></h1>\n                    </span>\n                </div>\n            </div>\n        </td>\n    </tr>\n</table>");
  return buffer;
  
});

Ember.TEMPLATES["event"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <span class=\"outer-text\">\n        <h1>Event Details</h1>\n        ");
  stack1 = helpers['if'].call(depth0, "event", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; table-layout:fixed;\">\n        <tr>\n            <td style=\"width: 415px; vertical-align: top;\">\n                <div class=\"panel panel-info\" style=\"margin-top: 25px;\">\n                    <div class=\"panel-heading\">\n                        Event Information\n                    </div>\n                    <div class=\"panel-body\" id=\"event-info-body\" style=\"overflow:hidden\">\n                        ");
  stack1 = helpers['if'].call(depth0, "timestamp", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "event_post_timestamp", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "subject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "smtpid", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "sg_event_id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "newsletter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "reason", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "response", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "ip", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "useragent", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(30, program30, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "attempt", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(32, program32, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(34, program34, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(36, program36, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "sg_message_id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(38, program38, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n                        ");
  stack1 = helpers['if'].call(depth0, "additional_arguments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(40, program40, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <span id=\"drop-reason\"></span>\n                    </div>\n                </div>\n            </td>\n            <td style=\"width: 40px\"></td>\n            <td style=\"width: 415px; vertical-align: top;\">\n                <div class=\"panel panel-info\" style=\"margin-top: 25px;\">\n                    <div class=\"panel-heading\">\n                        Related Events\n                    </div>\n                    <div class=\"panel-body\">\n                        Related events are determined by the SMTP-ID of the message. Keep in mind that not all events have an SMTP-ID (such as opens and clicks), so you might not see all the related events listed below.\n                    </div>\n                    <div class=\"list-group\" style=\"overflow-y: auto;\" id=\"related-group\">\n                        <span href=\"#\" class=\"list-group-item\">\n                            <h3 style=\"font-size: 18px; margin-top: 1em; margin-bottom: 1em;\">\n                                No related events found.\n                            </h3>\n                        </span>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </table>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <h2 style=\"font-size: 22px; margin-bottom: 0px;\">");
  data.buffer.push(escapeExpression((helper = helpers['event-color'] || (depth0 && depth0['event-color']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event", options) : helperMissing.call(depth0, "event-color", "event", options))));
  data.buffer.push("</h2>\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "email", "email", options) : helperMissing.call(depth0, "link-to", "email", "email", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <span style=\"font-size: 18px; margin: 0px; font-weight: bold;\">");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                            <p><b>Time:</b></p>\n                            <ul><li>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "timestamp", options) : helperMissing.call(depth0, "format-date", "timestamp", options))));
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                            <p><b>Event Posted At:</b></p>\n                            <ul><li>");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event_post_timestamp", options) : helperMissing.call(depth0, "format-date", "event_post_timestamp", options))));
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Subject:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "subject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>SMTP-ID:</b></p>\n                            <ul><li><span id='current_smtpid'>");
  stack1 = helpers._triageMustache.call(depth0, "smtpid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span></li></ul>\n                        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>SendGrid Event ID:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "sg_event_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Categories:</b></p>\n                            <ul>\n                                ");
  stack1 = helpers.each.call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </ul>\n                        ");
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    <li>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                                ");
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Newsletter Info:</b></p>\n                            <ul>\n                                <li>Newsletter ID: ");
  stack1 = helpers._triageMustache.call(depth0, "newsletter.newsletter_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                                <li>User List ID: ");
  stack1 = helpers._triageMustache.call(depth0, "newsletter.newsletter_user_list_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                                <li>Send ID: ");
  stack1 = helpers._triageMustache.call(depth0, "newsletter.newsletter_send_id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                            </ul>\n                        ");
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Reason:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "reason", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Response:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "response", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>URL:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>IP:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "ip", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>User Agent:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "useragent", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Attempt:</b> ");
  stack1 = helpers._triageMustache.call(depth0, "attempt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                        ");
  return buffer;
  }

function program34(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Status:</b></p>\n                            <ul><li>");
  stack1 = helpers._triageMustache.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program36(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>Type:</b></p>\n                            <ul><li class=\"truncate\">");
  stack1 = helpers._triageMustache.call(depth0, "type", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program38(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <p><b>SendGrid Message ID:</b></p>\n                            <ul><li class=\"truncate\">");
  stack1 = helpers._triageMustache.call(depth0, "smtpid", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li></ul>\n                        ");
  return buffer;
  }

function program40(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                            <p><b>Additional Arguments</b></p>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['list-additional-arguments'] || (depth0 && depth0['list-additional-arguments']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "additional_arguments", options) : helperMissing.call(depth0, "list-additional-arguments", "additional_arguments", options))));
  data.buffer.push("\n                        ");
  return buffer;
  }

function program42(depth0,data) {
  
  
  data.buffer.push("\n    <h1>Event Not Found</h1>\n");
  }

  stack1 = helpers['if'].call(depth0, "event", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(42, program42, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div class=\"panel panel-default\" style=\"margin-top: 25px\">\n        <div class=\"panel-body\">\n            <h1 style=\"margin:0px;\">Search Results</h1>\n            <p style=\"margin:0px; color: #888; font-size: 14px;\">For \"");
  stack1 = helpers._triageMustache.call(depth0, "query", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"</p>\n            <p>Go to the ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "detailedSearch", options) : helperMissing.call(depth0, "link-to", "detailedSearch", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to add filters to your search.</p>\n            <p><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "downloadCSV", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Download as CSV</a></p>\n        </div>\n        <div class=\"list-group\">\n            ");
  stack1 = helpers['if'].call(depth0, "data.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(20, program20, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n    ");
  stack1 = helpers['if'].call(depth0, "data.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <h1>&nbsp;</h1>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Detailed Search");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers.each.call(depth0, "data", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("list-group-item")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "event", "", options) : helperMissing.call(depth0, "link-to", "event", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width: 100%; table-layout:fixed;\">\n                            <tr>\n                                <td style=\"width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;\">\n                                    <h3 style=\"font-size: 18px; margin: 0px;\">\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers['event-color'] || (depth0 && depth0['event-color']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "event", options) : helperMissing.call(depth0, "event-color", "event", options))));
  data.buffer.push("\n                                    </h3>\n                                    ");
  stack1 = helpers['if'].call(depth0, "timestamp", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "subject", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                                <td style=\"width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;\">\n                                    ");
  stack1 = helpers['if'].call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "additional_arguments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                </td>\n                            </tr>\n                        </table>\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                        <p style=\"font-size: 10px; margin: 0px; color: #AAA;\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "timestamp", options) : helperMissing.call(depth0, "format-date", "timestamp", options))));
  data.buffer.push("</p>\n                                    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <i><p class=\"truncate\" style=\"font-size: 14px; margin-top: 5px; margin-bottom: 0px; font-weight: bold;\">");
  stack1 = helpers._triageMustache.call(depth0, "subject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p></i>\n                                    ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <p class=\"truncate\" style=\"font-size: 14px; margin: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                                    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <p class=\"truncate\" style=\"font-size: 14px; margin-top: 5px; margin-bottom: 0px;\">");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                                    ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                        <p style=\"margin: 0px; font-weight: bold\">Categories:</p>\n                                        <ul>\n                                            ");
  stack1 = helpers.each.call(depth0, "category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                        </ul>\n                                    ");
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                                <li>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                                            ");
  return buffer;
  }

function program18(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                        <p style=\"margin: 0px; font-weight: bold;\">Additional Arguments</p>\n                                        ");
  data.buffer.push(escapeExpression((helper = helpers['list-additional-arguments'] || (depth0 && depth0['list-additional-arguments']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "additional_arguments", options) : helperMissing.call(depth0, "list-additional-arguments", "additional_arguments", options))));
  data.buffer.push("\n                                    ");
  return buffer;
  }

function program20(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"list-group-item\">\n                    <h3 style=\"font-size: 18px; margin: 0px;\">\n                        No results.\n                    </h3>\n                </div>\n            ");
  }

function program22(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div style=\"text-align: center; margin: auto;\">\n            <ul class=\"pagination\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['result-pagination'] || (depth0 && depth0['result-pagination']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "pages", options) : helperMissing.call(depth0, "result-pagination", "pages", options))));
  data.buffer.push("\n            </ul>\n        </div>\n    ");
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["settings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"panel panel-default\" style=\"margin-top: 25px\">\n    <div class=\"panel-body\">\n        <h1 style=\"margin-top:0px;\">Settings</h1>\n\n        <p>Auto delete events that are older than \n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("model.autoDeleteValues"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.title"),
    'value': ("model.selectedAutoDeleteValue")
  },hashTypes:{'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            old.\n        </p>\n        <p style=\"text-align:right;\"><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Save</button></p>\n    </div>\n</div>\n");
  return buffer;
  
});