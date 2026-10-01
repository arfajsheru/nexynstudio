#!/bin/bash
echo "Optimizing core brand icons and graphics..."

# Favicon and App Icons (resample to standard dimensions and compress)
npx -y sharp-cli -i ./app/apple-icon.png -o ./app/apple-icon.png --resize 180 180 -q 80 --force
npx -y sharp-cli -i ./app/icon.png -o ./app/icon.png --resize 192 192 -q 80 --force
npx -y sharp-cli -i ./public/favicon.png -o ./public/favicon.png --resize 192 192 -q 80 --force
npx -y sharp-cli -i ./public/logo-black.png -o ./public/logo-black.png --resize 512 512 -q 80 --force

# Convert logo-black to WebP as well
npx -y sharp-cli -i ./public/logo-black.png -o ./public/logo-black.webp -q 85

# Compress OG Image
npx -y sharp-cli -i ./public/og-image.png -o ./public/og-image.png -q 80 --force

# Optimize Blog Images
for img in public/blog/*.png; do
  if [ -f "$img" ]; then
    echo "Processing $img..."
    webp_name="${img%.png}.webp"
    npx -y sharp-cli -i "$img" -o "$webp_name" -q 75
  fi
done

# Optimize Services Images
for img in public/images/services/*.png; do
  if [ -f "$img" ]; then
    echo "Processing $img..."
    webp_name="${img%.png}.webp"
    npx -y sharp-cli -i "$img" -o "$webp_name" -q 75
  fi
done

# Optimize Projects Images
find public/projects -type f \( -name "*.png" -o -name "*.jpg" \) | while read img; do
  echo "Processing $img..."
  dirname=$(dirname "$img")
  filename=$(basename "$img")
  ext="${filename##*.}"
  filename_noext="${filename%.*}"
  npx -y sharp-cli -i "$img" -o "$dirname/$filename_noext.webp" -q 75
done

echo "Optimization script completed."
