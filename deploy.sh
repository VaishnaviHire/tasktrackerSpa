#!/bin/bash



export PORT=5106
export MIX_ENV=prod
export GIT_PATH=/home/webuser1/tasktrackerSpa

PWD=`pwd`
if [ $PWD != $GIT_PATH ]; then
	echo "Error: Must check out git repo to $GIT_PATH"
	echo "  Current directory is $PWD"
	exit 1
fi

if [ $USER != "webuser1" ]; then
	echo "Error: must run as user 'webuser1'"
	echo "  Current user is $USER"
	exit 2
fi

mix deps.get
(cd assets && npm install)
(cd assets && ./node_modules/brunch/bin/brunch b -p)
mix phx.digest
mix release --env=prod

mkdir -p ~/www
mkdir -p ~/old

NOW=`date +%s`
if [ -d ~/www/tasktrackerSpa ]; then
	echo mv ~/www/tasktrackerSpa ~/old/$NOW
	mv ~/www/tasktrackerSpa ~/old/$NOW
fi

mkdir -p ~/www/tasktrackerSpa
REL_TAR=~/tasktrackerSpa/_build/prod/rel/tasktrackerSpa/releases/0.0.1/tasktrackerSpa.tar.gz
(cd ~/www/tasktrackerSpa && tar xzvf $REL_TAR)

crontab - <<CRONTAB
@reboot bash /home/webuser1/tasktrackerSpa/start.sh
CRONTAB

#. start.sh
