#!/bin/bash

# Copy the HTML report
cp extracted-html-report/junit.html 1-test/

# Change directory to 1-test
cd 1-test

# Configure git
git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

# Add the HTML report to the staging area
git add junit.html

# Commit the changes with a message
git commit -m "Update HTML report"

# Push the changes to the origin repository
git push origin 1-test
