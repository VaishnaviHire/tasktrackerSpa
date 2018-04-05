#!/bin/bash

export PORT=5106

cd ~/www/tasktrackerSpa
./bin/tasktrackerSpa stop || true
./bin/tasktrackerSpa start

