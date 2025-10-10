#!/bin/bash
set -euxo pipefail
# Create dirs and sane permissions
install -d -m 0755 -o ec2-user -g ec2-user /opt/sunset-vista-co/current
