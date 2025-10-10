#!/usr/bin/env bash
set -euo pipefail

# Local health check through Nginx to the app
curl -fsS http://127.0.0.1:3000/api/health >/dev/null
