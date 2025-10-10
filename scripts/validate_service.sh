#!/bin/bash
set -euo pipefail
RUN_USER="ec2-user"
export PM2_HOME="/home/${RUN_USER}/.pm2"
su -s /bin/bash -c "pm2 describe 'sunset-vista-co' >/dev/null" "$RUN_USER"
# Optionally check HTTP health:
# curl -fsS --max-time 3 http://localhost:PORT/health
