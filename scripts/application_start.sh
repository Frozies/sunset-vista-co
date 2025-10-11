#!/usr/bin/env bash
set -euo pipefail

APP_NAME=sunset-vista-co
APP_DIR=/var/www/${APP_NAME}/standalone
ENV_PATH=/etc/sysconfig/${APP_NAME}
PARAM_PATH=/sunsetvista/prod/runtime

if ! command -v jq >/dev/null 2>&1; then
  sudo dnf -y install jq >/dev/null
fi

TMP_ENV=$(mktemp)
aws ssm get-parameters-by-path \
  --with-decryption \
  --path "${PARAM_PATH}" \
  --recursive \
  --query 'Parameters[].{Name:Name,Value:Value}' \
  --output json \
| jq -r '.[] | "\(.Name | split("/") | last)=\(.Value)"' > "${TMP_ENV}"

{
  echo "NODE_ENV=production"
  echo "PORT=3000"
} >> "${TMP_ENV}"

sudo install -m 600 -o ec2-user -g ec2-user "${TMP_ENV}" "${ENV_PATH}"
rm -f "${TMP_ENV}"

set -a
. "${ENV_PATH}"
set +a

if pm2 pid "${APP_NAME}" >/dev/null 2>&1; then
  pm2 reload "${APP_NAME}" || pm2 restart "${APP_NAME}"
else
  pm2 start "${APP_DIR}/server.js" --name "${APP_NAME}" --time
fi

pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ec2-user --hp /home/ec2-user >/dev/null 2>&1 || true
