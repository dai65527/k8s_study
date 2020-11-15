#!/bin/bash

# pulls newest content from Github

# exit if no URL defined as environment variable
if [-z $CONTENTS_SOURCE_URL]; then
    exit 1
fi

# clone repository at first time
git clone $CONTENTS_SOURCE_URL /data

# pull diff from repository for second time and later
# interval = 60sec
cd /data
while true
do
    date
    sleep 60
    git pull
done
