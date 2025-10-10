#!/bin/bash
set -euo pipefail
APP_NAME="sunset-vista-co"
RUN_USER="ec2-user"
export PM2_HOME="/home/${RUN_USER}/.pm2"
command -v pm2 >/dev/null 2>&1 || exit 0
su -s /bin/bash -c "pm2 describe '$APP_NAME' >/dev/null 2>&1 && pm2 stop '$APP_NAME' || true" "$RUN_USER"
