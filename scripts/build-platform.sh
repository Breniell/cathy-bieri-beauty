#!/usr/bin/env bash
set -euo pipefail

if [[ "${VERCEL:-}" == "1" ]]; then
  echo "Vercel detected: running the native Next.js build."
  exec npm run build:vercel
fi

echo "Sites environment detected: running the Vinext build."
exec npm run build:sites
