#!/bin/bash
set -euo pipefail
APP_NAME="sunset-vista-co"
APP_DIR="/opt/sunset-vista-co/current"
RUN_USER="ec2-user"
export PATH="/usr/local/bin:/usr/bin:/bin"
export PM2_HOME="/home/${RUN_USER}/.pm2"

# Ensure PM2 home ownership
mkdir -p "$PM2_HOME"
chown -R "${RUN_USER}:${RUN_USER}" "$PM2_HOME"

# Install deps as app user
cd "$APP_DIR"
if [ -f package-lock.json ]; then
  su -s /bin/bash -c "cd '$APP_DIR' && npm ci --omit=dev" "$RUN_USER"
else
  su -s /bin/bash -c "cd '$APP_DIR' && npm i --omit=dev" "$RUN_USER"
fi

# Start or reload by name (prefer ecosystem if present)
if su -s /bin/bash -c "pm2 describe '$APP_NAME' >/dev/null 2>&1" "$RUN_USER"; then
  su -s /bin/bash -c "pm2 reload '$APP_NAME' --update-env" "$RUN_USER"
elif [ -f ecosystem.config.js ] || [ -f ecosystem.config.cjs ]; then
  su -s /bin/bash -c "pm2 start ecosystem.config.js --only '$APP_NAME'" "$RUN_USER" \
  || su -s /bin/bash -c "pm2 start ecosystem.config.cjs --only '$APP_NAME'" "$RUN_USER"
else
  su -s /bin/bash -c "pm2 start app.js --name '$APP_NAME'" "$RUN_USER"
fi

# Persist and ensure boot unit
su -s /bin/bash -c "pm2 save" "$RUN_USER"
systemctl enable --now "pm2-${RUN_USER}" || true
