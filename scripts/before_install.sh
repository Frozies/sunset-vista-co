#!/usr/bin/env bash
set -euo pipefail

APP_ROOT=/var/www/sunset-vista-co

# Create target dir and stop the app if it is running to avoid file contention
sudo mkdir -p "$APP_ROOT"
if command -v pm2 >/dev/null 2>&1; then
  if pm2 pid sunset-vista-co >/dev/null 2>&1; then
    pm2 stop sunset-vista-co || true
  fi
fi
