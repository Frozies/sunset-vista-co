#!/usr/bin/env bash
set -euo pipefail

cd /var/www/sunset-vista-co/standalone

# Ensure static folder exists for Next.js assets
mkdir -p .next/static

# If you keep any runtime only deps, install them here
# Example
# npm ci --omit=dev
