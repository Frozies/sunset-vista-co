#!/bin/bash
set -euo pipefail

RUN_USER="ec2-user"
APP_NAME="sunset-vista-co"
BASE_DIR="/opt/sunset-vista-co/current"
APP_DIR="$BASE_DIR/standalone"
PORT="${PORT:-3000}"
HOST="${HOST:-0.0.0.0}"

export PATH="/usr/local/bin:/usr/bin:/bin"
export PM2_HOME="/home/${RUN_USER}/.pm2"

install -d -m 0755 -o "$RUN_USER" -g "$RUN_USER" "$APP_DIR"
chown -R "$RUN_USER:$RUN_USER" "$BASE_DIR"

if [ -f "$APP_DIR/package-lock.json" ]; then
  su -s /bin/bash -c "cd '$APP_DIR' && npm ci --omit=dev" "$RUN_USER"
else
  su -s /bin/bash -c "cd '$APP_DIR' && npm i --omit=dev" "$RUN_USER"
fi

if su -s /bin/bash -c "pm2 describe '$APP_NAME' >/dev/null 2>&1" "$RUN_USER"; then
  su -s /bin/bash -c "PORT='$PORT' HOST='$HOST' pm2 reload '$APP_NAME' --update-env" "$RUN_USER"
else
  su -s /bin/bash -c "PORT='$PORT' HOST='$HOST' pm2 start '$APP_DIR/server.js' --name '$APP_NAME' --cwd '$APP_DIR'" "$RUN_USER"
fi

su -s /bin/bash -c "pm2 save" "$RUN_USER"
systemctl enable --now "pm2-${RUN_USER}" || true
