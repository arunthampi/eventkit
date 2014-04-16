# SendGrid Event Webhook Starter Kit

The SendGrid Event Webhook Starter Kit (or "Event Kit") is an open source project for quickly setting up your web server with an endpoint for SendGrid's Event Webhook and provides an interface to view and search your stored events.

# System Requirements

- PHP 5.3 or higher
- SQLite 3 or higher

# Developing on Nitrous.IO

Start hacking on Eventkit with
[Nitrous.IO](https://www.nitrous.io/?utm_source=github.com&utm_campaign=eventkit&utm_medium=hackonnitrous) in a matter of seconds:

[![Hack sendgrid/eventkit on Nitrous.IO](https://d3o0mnbgv6k92a.cloudfront.net/assets/hack-l-v1-3cc067e71372f6045e1949af9d96095b.png)](https://www.nitrous.io/hack_button?source=embed&runtime=php&repo=sendgrid%2Feventkit&file_to_open=README.nitrous.md)

# Quick Installation

If you just wish to install the project on your web server, you can do so by following the steps [here](http://sendgrid.github.io/eventkit/setup.html).

# Developing

This project uses [EmberJS](http://emberjs.com) for the frontend and [Grunt](http://gruntjs.com) to handle asset concatenation and minification.  If you don't have Grunt installed on your system, first go [here](http://gruntjs.com/getting-started).  Once Grunt is installed, you'll want to make sure you have all the Grunt Modules for the project installed by running the following in your command line:

    cd /path/to/eventkit/folder
    npm install

Once the modules are installed, you should be all set.  When you make changes to the javascript and css files, make sure you run `grunt` from your project directory to concatenate all the files.  You can also run `grunt prod` to concatenate everything and minify it and place it into the "production" folder for a clean working copy. You can also run `php -S localhost:8000` from the project directory to get a local PHP server running the app.
