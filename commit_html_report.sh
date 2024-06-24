#!/bin/bash

# Fetch the latest changes from the remote repository
git fetch origin

# Checkout or create the test branch based on origin/test
git checkout -B test origin/test

# Copy the HTML report (assuming it's located in reports/junit.html)
cp reports/junit.html .

# Configure the user name and email for the Git commit
git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"

# Add the HTML report to the staging area
git add junit.html

# Commit the changes with a descriptive message
git commit -m "Update HTML report"

# Pull the latest changes from the test branch on the remote repository
git pull --rebase origin test

# Push the changes to the test branch on the remote repository
git push origin test
