for file in *.webp; do
  if [ -f "$file" ]; then
    cwebp -q 60 "$file" -o "compressed_$file"
    echo "Compressed: $file -> compressed_$file"
  fi
done
