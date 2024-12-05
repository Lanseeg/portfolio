for file in *.png *.jpg *.jpeg; do
  if [ -f "$file" ]; then
    # Générer une image WebP avec un poids maximum de 30 Ko
    cwebp -q 80 -size 30000 "$file" -o "${file%.*}.webp"
    echo "Converted and resized: $file to ${file%.*}.webp"
  fi
done
