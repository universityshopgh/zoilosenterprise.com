$base = "c:\Users\King\Zoylos Website"

function Replace-InFile($relPath, $newImg) {
  $path = Join-Path $base $relPath
  if (-not (Test-Path $path)) { Write-Host "NOT FOUND: $relPath"; return }
  $content = Get-Content $path -Raw
  $pattern = 'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+'
  $updated = [regex]::Replace($content, $pattern, $newImg)
  Set-Content $path $updated -NoNewline
  Write-Host "OK: $relPath"
}

Replace-InFile "app\realty\property-listings\page.tsx"       "/ghana_property1.jpg"
Replace-InFile "app\realty\property-management\page.tsx"     "/ghana_property2.jpg"
Replace-InFile "app\realty\commercial-real-estate\page.tsx"  "/ghana_property3.jpg"
Replace-InFile "app\realty\valuation-services\page.tsx"      "/ghana_property4.jpg"
Replace-InFile "app\global\import-services\page.tsx"         "/ghana_trade1.jpg"
Replace-InFile "app\global\export-solutions\page.tsx"        "/ghana_trade2.jpg"
Replace-InFile "app\global\logistics-and-freight\page.tsx"   "/ghana_market1.jpg"
Replace-InFile "app\global\trade-consulting\page.tsx"        "/ghana_business.jpg"
Replace-InFile "app\foundation\our-programs\page.tsx"        "/ghana_school.jpg"
Replace-InFile "app\foundation\support-a-child\page.tsx"     "/ghana_children1.jpg"
Replace-InFile "app\foundation\volunteer\page.tsx"           "/ghana_community.jpg"
Replace-InFile "app\foundation\donation-portal\page.tsx"     "/ghana_children2.jpg"

Write-Host "`nAll sub-pages updated."
