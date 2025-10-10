#!/usr/bin/env bash
set -euo pipefail

APP_NAME=sunset-vista-co
APP_DIR=/var/www/${APP_NAME}/standalone

export NODE_ENV=production
export PORT=80

# Make sure node still has the port binding capability
if ! getcap "$(readlink -f "$(which node)")" | grep -q cap_net_bind_service; then
  sudo setcap 'cap_net_bind_service=+ep' "$(readlink -f "$(which node)")" || true
fi

if command -v pm2 >/dev/null 2>&1; then
  if pm2 pid "${APP_NAME}" >/dev/null 2>&1; then
    pm2 reload "${APP_NAME}" --update-env || pm2 restart "${APP_NAME}" --update-env
  else
    pm2 start "${APP_DIR}/server.js" --name "${APP_NAME}" --time
  fi

  pm2 save
  sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ec2-user --hp /home/ec2-user >/dev/null 2>&1 || true
else
  echo "pm2 is not installed or not on PATH" >&2
  exit 1
fi
