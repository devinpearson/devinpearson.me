#!/usr/bin/env bash
# Start the image, wait for its health check, and fetch a few pages.
#   bash scripts/docker-smoke-test.sh ghcr.io/devinpearson/devinpearson-me:sha-abc1234
set -euo pipefail

image="${1:?usage: docker-smoke-test.sh <image>}"
name="devinpearson-me-smoke-$$"
port="${SMOKE_PORT:-18093}"

cleanup() { docker rm -f "$name" >/dev/null 2>&1 || true; }
trap cleanup EXIT

docker run -d --name "$name" --read-only --tmpfs /tmp \
  --tmpfs /app/.next/cache:uid=1000,gid=1000 \
  -p "127.0.0.1:${port}:3000" "$image" >/dev/null

for _ in $(seq 1 30); do
  status=$(docker inspect -f '{{.State.Health.Status}}' "$name")
  [[ "$status" == healthy ]] && break
  if [[ "$status" == unhealthy ]] || [[ "$(docker inspect -f '{{.State.Running}}' "$name")" != true ]]; then
    break
  fi
  sleep 2
done

if [[ "$(docker inspect -f '{{.State.Health.Status}}' "$name")" != healthy ]]; then
  echo "Container did not become healthy." >&2
  docker logs --tail 80 "$name" >&2
  exit 1
fi

fail=0
for path in /api/health / /about /articles /speaking /feed.xml; do
  code=$(curl -sL -o /dev/null -w '%{http_code}' "http://127.0.0.1:${port}${path}")
  echo "${code} ${path}"
  [[ "$code" == 200 ]] || fail=1
done

if [[ "$fail" != 0 ]]; then
  docker logs --tail 80 "$name" >&2
  exit 1
fi
echo "Smoke test passed."
