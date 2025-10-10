#!/usr/bin/env bash
set -euo pipefail

APP_NAME=sunset-vista-co
APP_DIR=/var/www/${APP_NAME}/standalone

# Start or gracefully reload with PM2
if command -v pm2 >/dev/null 2>&1; then
  if pm2 pid "${APP_NAME}" >/dev/null 2>&1; then
    pm2 reload "${APP_NAME}" || pm2 restart "${APP_NAME}"
  else
    pm2 start "${APP_DIR}/server.js" --name "${APP_NAME}" --time
  fi

  # Persist PM2 across reboots
  pm2 save
  sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ec2-user --hp /home/ec2-user >/dev/null 2>&1 || true
else
  echo "pm2 is not installed or not on PATH" >&2
  exit 1
fi
