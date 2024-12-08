for file in *.png *.jpg *.jpeg; do
  if [ -f "$file" ]; then
    cwebp -q 95 "$file" -o "${file%.*}.webp"
    echo "Converted: $file to ${file%.*}.webp"
  fi
done
