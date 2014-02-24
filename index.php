<?php
/* ==========================================================================
 * INDEX PAGE
 * ==========================================================================
 *
 * SUMMARY
 * This page is the main index page. Upon load, it'll determine if a user is
 * viewing the page and display the GUI, or if it's receiving a POST from the
 * webhook, in which case it'll log the notification and send a response
 * back.
 *
 */

require_once("DatabaseController.php");

// DETERMINE IF THERE'S POST DATA
if (isset($HTTP_RAW_POST_DATA)) {
    $db = new SendGrid\EventKit\DatabaseController();
    $response = $db->processPost($HTTP_RAW_POST_DATA);
    header($response);
    return;
} else {
    // IF THERE ISN'T ANY POST DATA, SHOW THE GUI
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>SendGrid Event Webhook Starter Kit</title>
    
    <!--META TAGS-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
    <!--STYLES-->
    <link rel="stylesheet" href="assets/vendor/css/vendor.css">
    <link rel="stylesheet" href="assets/application/css/application.css">
</head>
<body>

    <!--
    *
    * MAIN DASHBOARD PAGE
    *
    *****************************************************-->

    <script type="text/x-handlebars" charset="utf-8">
        <div class="nav">
            <div class="nav_container">
                <a href="#">
                    <div class="brand"></div>
                </a>
                <div class="search">
                    <div class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            {{input type="text" value=query action="search" class="form-control" placeholder="Search"}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="body_container">
            {{outlet}}
            </div>
        </div
    </script>
    
    <script type="text/x-handlebars" id="dashboard" data-template-name="dashboard">
        <h1 class="outer-text">Dashboard</h1>
        <p class="outer-text">Welcome to the SendGrid Event Webhook Starter Kit. Use the search box below to start searching your logs.</p>
        <div class="panel panel-default" style="margin-top: 25px">
            <div class="panel-body">
                <h1 style="margin-top: 0px">Search</h1>
                <p>Your query below will check every field in the database (to, from, etc.):</p>
                {{input type="text" value=query action="search" class="form-control"}}
            </div>
        </div>
        
        <table border="0" cellspacing="0" cellpadding="0" style="width: 100%; table-layout:fixed;">
            <tr>
                <td style="width: 415px; vertical-align: top;">
                    <div class="panel panel-info" style="margin-top: 25px;">
                        <div class="panel-heading">
                            Most Recent Events
                        </div>
                        <div class="list-group" style="overflow-y: auto; height: 275px;">
                            {{#if model.recent.length}}
                                {{#each model.recent}}
                                    {{#link-to 'event' this classNames="list-group-item"}}
                                        <h3 style="font-size: 18px; margin: 0px;">
                                            {{event-color event}}
                                        </h3>
                                        <p style="font-size: 10px; margin: 0px; color: #AAA;">{{format-date timestamp}}</p>
                                        <p class="truncate" style="font-size: 14px; margin-top: 5px; margin-bottom: 0px;">{{email}}</p>
                                    {{/link-to}}
                                {{/each}}
                            {{else}}
                                <span href="#" class="list-group-item">
                                    <h3 style="font-size: 18px; margin-top: 1em; margin-bottom: 1em;">
                                        No recent events.
                                    </h3>
                                </span>
                            {{/if}}
                        </div>
                    </div>
                </td>
                <td style="width: 40px"></td>
                <td style="width: 415px; vertical-align: top;">
                    <div class="panel panel-info" style="margin-top: 25px">
                        <div class="panel-heading">
                            Total Events Today
                        </div>
                        <div class="panel-body" style="overflow-y: auto; height: 275px;">
                            <span style="text-align: center">
                                <h1 style="font-size: 72px; margin-top: 50px; margin-bottom: 0px;">{{model.totals}}</h1>
                                <h3>{{plural-event model.totals}}</h3>
                            </span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <h1>&nbsp;</h1>
    </script>


    <!--
    *
    * SEARCH PAGE
    *
    *****************************************************-->
    <script type="text/x-handlebars" id="search" data-template-name="search">
        <div class="panel panel-default" style="margin-top: 25px">
            <div class="panel-body">
                <h1 style="margin:0px;">Search Results</h1>
                <p style="margin:0px; color: #888; font-size: 14px;">For "{{query}}"</p>
                <p>Go to the {{#link-to 'detailedSearch'}}Detailed Search{{/link-to}} to add filters to your search.</p>
                <p><a href="#" {{action "downloadCSV"}}>Download as CSV</a></p>
            </div>
            <div class="list-group">
                {{#if data.length}}
                    {{#each data}}
                        {{#link-to 'event' this classNames="list-group-item"}}
                            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; table-layout:fixed;">
                                <tr>
                                    <td style="width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;">
                                        <h3 style="font-size: 18px; margin: 0px;">
                                            {{event-color event}}
                                        </h3>
                                        {{#if timestamp}}
                                            <p style="font-size: 10px; margin: 0px; color: #AAA;">{{format-date timestamp}}</p>
                                        {{/if}}
                                        {{#if subject}}
                                            <i><p class="truncate" style="font-size: 14px; margin-top: 5px; margin-bottom: 0px; font-weight: bold;">{{subject}}</p></i>
                                        {{/if}}
                                        {{#if email}}
                                            <p class="truncate" style="font-size: 14px; margin: 0px;">{{email}}</p>
                                        {{/if}}
                                        {{#if url}}
                                            <p class="truncate" style="font-size: 14px; margin-top: 5px; margin-bottom: 0px;">{{url}}</p>
                                        {{/if}}
                                    </td>
                                    <td style="width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;">
                                        {{#if category}}
                                            <p style="margin: 0px; font-weight: bold">Categories:</p>
                                            <ul>
                                                {{#each category}}
                                                    <li>{{this}}</li>
                                                {{/each}}
                                            </ul>
                                        {{/if}}
                                        {{#if additional_arguments}}
                                            <p style="margin: 0px; font-weight: bold;">Additional Arguments</p>
                                            {{list-additional-arguments additional_arguments}}
                                        {{/if}}
                                    </td>
                                </tr>
                            </table>
                        {{/link-to}}
                    {{/each}}
                {{else}}
                    <div class="list-group-item">
                        <h3 style="font-size: 18px; margin: 0px;">
                            No results.
                        </h3>
                    </div>
                {{/if}}
            </div>
        </div>
        {{#if data.length}}
            <div style="text-align: center; margin: auto;">
                <ul class="pagination">
                    {{result-pagination pages}}
                </ul>
            </div>
        {{/if}}
        <h1>&nbsp;</h1>
    </script>

    <script type="text/x-handlebars" id="detailedSearch">
        <div class="panel panel-default" style="margin-top: 25px">
            <div class="panel-body">
                <h1 style="margin:0px;">Narrow Your Search</h1>
                <p style="margin-top: 0px;">Add filters below to narrow down your search:</p>
                <form id="detailedSearchParams" class="form-inline" role="form" style="margin-bottom: 15px" action="/results" method="GET">
                    {{#each this}}
                        <div class="form-group filter-row">
                            <label class="col-sm-2 control-label" style="width: 170px; text-align: right; margin-top: 8px;">{{name}}</label>
                            {{#if additional_arguments}}
                                {{input value=key class="form-control form-argument-field" placeholder="Argument Key" type="text" name=name_key}}
                                {{input value=val class="form-control form-argument-field" placeholder="Argument Value" type="text" name=name_val}}
                            {{else}}
                                {{#if dateStart}}
                                    {{input value=val class="form-control form-field init-date-picker" placeholder="Date Start" type="text" name=id}}
                                {{else}}
                                    {{#if dateEnd}}
                                        {{input value=val class="form-control form-field init-date-picker" placeholder="Date End" type="text" name=id}}
                                    {{else}}
                                        {{input value=val class="form-control form-field" placeholder=name type="text" name=id}}
                                    {{/if}}
                                {{/if}}
                            {{/if}}
                            <button type="button" class="btn btn-danger" {{action "removeFilter" this}}>Remove Filter</button>                        
                        </div>
                    {{/each}}
                </form>
                
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        Add Filter <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu" id="add_filter_menu">
                        {{#each allFilters}}
                            <li><a {{action "addFilter" this}}>{{name}}</a></li>
                        {{/each}}
                    </ul>
                </div>

                <button type="button" class="btn btn-success" {{action "submitSearch"}}>Search</button>
            </div>
        </div>
    </script>

    <script type="text/x-handlebars" id="detailedSearchResults" data-template-name="detailedSearchResults">
        <div class="panel panel-default" style="margin-top: 25px">
            <div class="panel-body">
                <h1 style="margin:0px;">Search Results</h1>
                <p>{{#link-to 'detailedSearch'}}Modify your search{{/link-to}}.</p>
                <p><a href="#" {{action "downloadCSV"}}>Download as CSV</a></p>
            </div>
            <div class="list-group">
                {{#if data.length}}
                    {{#each data}}
                        {{#link-to 'event' this classNames="list-group-item"}}
                            <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; table-layout:fixed;">
                                <tr>
                                    <td style="width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;">
                                        <h3 style="font-size: 18px; margin: 0px;">
                                            {{event-color event}}
                                        </h3>
                                        {{#if timestamp}}
                                            <p style="font-size: 10px; margin: 0px; color: #AAA;">{{format-date timestamp}}</p>
                                        {{/if}}
                                        {{#if subject}}
                                            <i><p class="truncate" style="font-size: 14px; margin-top: 5px; margin-bottom: 0px; font-weight: bold;">{{subject}}</p></i>
                                        {{/if}}
                                        {{#if email}}
                                            <p class="truncate" style="font-size: 14px; margin: 0px;">{{email}}</p>
                                        {{/if}}
                                        {{#if url}}
                                            <p class="truncate" style="font-size: 14px; margin-top: 5px; margin-bottom: 0px;">{{url}}</p>
                                        {{/if}}
                                    </td>
                                    <td style="width: 50%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: top;">
                                        {{#if category}}
                                            <p style="margin: 0px; font-weight: bold">Categories:</p>
                                            <ul>
                                                {{#each category}}
                                                    <li>{{this}}</li>
                                                {{/each}}
                                            </ul>
                                        {{/if}}
                                        {{#if additional_arguments}}
                                            <p style="margin: 0px; font-weight: bold;">Additional Arguments</p>
                                            {{list-additional-arguments additional_arguments}}
                                        {{/if}}
                                    </td>
                                </tr>
                            </table>
                        {{/link-to}}
                    {{/each}}
                {{else}}
                    <div class="list-group-item">
                        <h3 style="font-size: 18px; margin: 0px;">
                            No results.
                        </h3>
                    </div>
                {{/if}}
            </div>
        </div>
        {{#if data.length}}
            <div style="text-align: center; margin: auto;">
                <ul class="pagination">
                    {{result-pagination pages}}
                </ul>
            </div>
        {{/if}}
        <h1>&nbsp;</h1>
    </script>

    <!--
    *
    * EVENT INSPECTOR PAGE
    *
    *****************************************************-->
    <script type="text/x-handlebars" id="event">
        <span class="outer-text">
            <h1>Event Details</h1>
            {{#if event}}
                <h2 style="font-size: 22px; margin-bottom: 0px;">{{event-color event}}</h2>
            {{/if}}
            {{#if email}}
                {{#link-to 'email' email}}
                    <span style="font-size: 18px; margin: 0px; font-weight: bold;">{{email}}</span>
                {{/link-to}}
            {{/if}}
        </span>
        <table border="0" cellspacing="0" cellpadding="0" style="width: 100%; table-layout:fixed;">
            <tr>
                <td style="width: 415px; vertical-align: top;">
                    <div class="panel panel-info" style="margin-top: 25px;">
                        <div class="panel-heading">
                            Event Information
                        </div>
                        <div class="panel-body" id="event-info-body">
                            {{#if timestamp}}
                                <p><b>Time:</b></p>
                                <ul><li>{{format-date timestamp}}</li></ul>
                            {{/if}}

                            {{#if event_post_timestamp}}
                                <p><b>Event Posted At:</b></p>
                                <ul><li>{{format-date event_post_timestamp}}</li></ul>
                            {{/if}}

                            {{#if subject}}
                                <p><b>Subject:</b></p>
                                <ul><li>{{subject}}</li></ul>
                            {{/if}}

                            {{#if smtpid}}
                                <p><b>SMTP-ID:</b></p>
                                <ul><li><span id='current_smtpid'>{{smtpid}}</span></li></ul>
                            {{/if}}

                            {{#if sg_event_id}}
                                <p><b>SendGrid Event ID:</b></p>
                                <ul><li>{{sg_event_id}}</li></ul>
                            {{/if}}

                            {{#if category}}
                                <p><b>Categories:</b></p>
                                <ul>
                                    {{#each category}}
                                        <li>{{this}}</li>
                                    {{/each}}
                                </ul>
                            {{/if}}

                            {{#if newsletter}}
                                <p><b>Newsletter Info:</b></p>
                                <ul>
                                    <li>Newsletter ID: {{newsletter.newsletter_id}}</li>
                                    <li>User List ID: {{newsletter.newsletter_user_list_id}}</li>
                                    <li>Send ID: {{newsletter.newsletter_send_id}}</li>
                                </ul>
                            {{/if}}

                            {{#if reason}}
                                <p><b>Reason:</b></p>
                                <ul><li>{{reason}}</li></ul>
                            {{/if}}

                            {{#if response}}
                                <p><b>Response:</b></p>
                                <ul><li>{{response}}</li></ul>
                            {{/if}}

                            {{#if url}}
                                <p><b>URL:</b></p>
                                <ul><li>{{url}}</li></ul>
                            {{/if}}

                            {{#if ip}}
                                <p><b>IP:</b></p>
                                <ul><li>{{ip}}</li></ul>
                            {{/if}}

                            {{#if useragent}}
                                <p><b>User Agent:</b></p>
                                <ul><li>{{useragent}}</li></ul>
                            {{/if}}

                            {{#if attempt}}
                                <p><b>Attempt:</b> {{attempt}}</p>
                            {{/if}}

                            {{#if status}}
                                <p><b>Status:</b></p>
                                <ul><li>{{status}}</li></ul>
                            {{/if}}

                            {{#if type}}
                                <p><b>Type:</b></p>
                                <ul><li class="truncate">{{type}}</li></ul>
                            {{/if}}

                            {{#if sg_message_id}}
                                <p><b>SendGrid Message ID:</b></p>
                                <ul><li class="truncate">{{smtpid}}</li></ul>
                            {{/if}}

                            {{#if additional_arguments}}
                                <p><b>Additional Arguments</b></p>
                                {{list-additional-arguments additional_arguments}}
                            {{/if}}
                            <span id="drop-reason"></span>
                        </div>
                    </div>
                </td>
                <td style="width: 40px"></td>
                <td style="width: 415px; vertical-align: top;">
                    <div class="panel panel-info" style="margin-top: 25px;">
                        <div class="panel-heading">
                            Related Events
                        </div>
                        <div class="panel-body">
                            Related events are determined by the SMTP-ID of the message. Keep in mind that not all events have an SMTP-ID (such as opens and clicks), so you might not see all the related events listed below.
                        </div>
                        <div class="list-group" style="overflow-y: auto;" id="related-group">
                            <span href="#" class="list-group-item">
                                <h3 style="font-size: 18px; margin-top: 1em; margin-bottom: 1em;">
                                    No related events found.
                                </h3>
                            </span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </script>

    <!--
    *
    * EMAIL INSPECTOR PAGE
    *
    *****************************************************-->
    <script type="text/x-handlebars" id="email">
        <span class="outer-text">
            <h1>Email Details</h1>
            {{#if email}}
                <h2 style="font-size: 18px; margin-top: 0px; font-weight: bold;">{{email}}</h2>
            {{/if}}
        </span>
        <table border="0" style="width: 100%;">
            <tr>
                <td style="width:25%; padding: 5px;">
                    <div class="panel panel-info">
                        <div class="panel-heading" style="text-align: center;">
                            Processed Events
                        </div>
                        <div class="panel-body" style="overflow-y: auto; height: 150px;">
                            <span style="text-align: center">
                                <h1 style="font-size: 72px; margin-top: 15px; margin-bottom: 0px;">{{data.processed}}</h1>
                            </span>
                        </div>
                    </div>
                </td>
                <td style="width:25%; padding: 5px;">
                    <div class="panel panel-info">
                        <div class="panel-heading" style="text-align: center;">
                            Delivery Rate
                        </div>
                        <div class="panel-body" style="overflow-y: auto; height: 150px;">
                            <span style="text-align: center">
                                <h1 style="font-size: 72px; margin-top: 15px; margin-bottom: 0px;">{{data.delivery_rate}}<span style="font-size: 32px">%</span></h1>
                            </span>
                        </div>
                    </div>
                </td>
                <td style="width:25%; padding: 5px;">
                    <div class="panel panel-info">
                        <div class="panel-heading" style="text-align: center;">
                            Open Rate
                        </div>
                        <div class="panel-body" style="overflow-y: auto; height: 150px;">
                            <span style="text-align: center">
                                <h1 style="font-size: 72px; margin-top: 15px; margin-bottom: 0px;">{{data.open_rate}}<span style="font-size: 32px">%</span></h1>
                            </span>
                        </div>
                    </div>
                </td>
                <td style="width:25%; padding: 5px;">
                    <div class="panel panel-info">
                        <div class="panel-heading" style="text-align: center;">
                            Click Rate
                        </div>
                        <div class="panel-body" style="overflow-y: auto; height: 150px;">
                            <span style="text-align: center">
                                <h1 style="font-size: 72px; margin-top: 15px; margin-bottom: 0px;">{{data.click_rate}}<span style="font-size: 32px">%</span></h1>
                            </span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </script>

    <!--EMBER JS-->
    <script src="assets/vendor/js/vendor.js"></script>
    <script src="assets/application/js/application.js"></script>
</body>
</html>

<?php
}
?>