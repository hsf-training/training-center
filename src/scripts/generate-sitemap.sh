#!/usr/bin/env bash

INPUT_FILE="data/data.yaml"
OUTPUT_FILE="public/sitemap.txt"

# Extract lines with 'webpage:' and clean them up
grep 'webpage:' "$INPUT_FILE" \
  | sed -E 's/.*webpage: *//' \
  | tr -d '\r' \
  | sort > "$OUTPUT_FILE"

echo "✅ sitemap.txt created at $OUTPUT_FILE"
