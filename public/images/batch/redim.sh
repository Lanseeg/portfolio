for file in *.png *.jpg *.jpeg *.webp; do
  if [ -f "$file" ]; then
    # Redimensionner l'image à une largeur ou hauteur maximale de 1000px
    magick convert "$file" -resize 1000x1000\> "resized_$file"
    echo "Resized: $file -> resized_$file"
  fi
done
