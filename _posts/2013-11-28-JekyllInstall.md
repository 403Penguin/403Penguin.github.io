---
title: How to install Jekyll
catagory: Web
layout: post
excerpt: Finally got some time to write this. This will teach you about how to install Jekyll locally, and on Github.
comments: true
tags: how to install jekyll, install jekyll on github, github and jekyll, jekyll and github, jekyll
---

#Installing Jekyll Locally
Warning this is not a blogging system. No layouts are included and you will have to make your own
Think of it as more of a web designer thing. Having experience with html and css is reccomonded.
Step 1: Make sure you have a Linux,Unix, or Mac OSX System.
Install Ruby and Ruby Gems.

Ruby:
sudo apt-get install ruby1.9.1
Ruby Gems:
Download and follow instructions here: http://rubygems.org/pages/download

##Step 2: Install Jekyll
gem install jekyll

##Step 3: Create a new resository on Github

Make your repository name using this format username.github.io
Otherwise you will need to create a branch for the repository.

jekyll new foldername to create a filestructure of the base jekyll website.
Now go to the folder you want to use. (cd to it)
Default folders should be there now.

## Commiting:
git init //creates git files
git add . //adds all files in current directory
git commit -m "first commit" // Adding commit message and commit
git remote add origin https://github.com/username/username.github.ios.git //Adds origin
git push origin

The files should be pushed to your repository and generated in less than 10 minutes by Github.

## Basic Overview
Now that you are done installing let me explain the basics of the Jekyll system. Some of these are not created but you can
make them if they are needed.

## _includes
This is a self explanatory folder where you could put included documents in.

## _layouts
Put your layouts here so Jekyll can use it to generate the pages you want.

## _plugins
Here is the folder to install Jekyll plugins. They are not really needed but can be used for
convenience.

## _site
This is the folder that Jekyll puts the generated website into. Github should directly use this folder for your
online website. The site folder will AUTOGENERATE when you build the website.

##_posts
The posts folder is where you will put all of your posts.

##_config.yml
This is the config file where you can edit jekyll settings.

##css
This is where you can put your css files

##_index.html
The index file is the page that people land on when they first come to your website :).

##Building
Jekyll also has a really nice feature where you can run its web server locally.
Just run the command:
jekyll serve --watch //watch so it will auto generate the files when they are saved
and then go to http://localhost:4000/
Voila, there's your first jekyll website.

 Next tutorial covers the layout system,some tricks, and some liquid templating. Dont worry
 Its coming soon :P.
 As always,
 Penguin








