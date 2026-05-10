$headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
$dest = 'c:\Users\King\Zoylos Website\public'

function Download-Image($url, $name) {
  $path = Join-Path $dest $name
  try {
    Invoke-WebRequest -Uri $url -OutFile $path -Headers $headers -TimeoutSec 40
    $size = [math]::Round((Get-Item $path).Length / 1KB)
    if ($size -lt 10) { Write-Host "SMALL/BAD $name ($size KB) - might be wrong image"; return }
    Write-Host "OK $name ($size KB)"
  } catch {
    Write-Host "FAIL $name : $_"
  }
}

# === CONTACT PAGE ===
# Black African woman on professional phone call
Download-Image 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_contact_hero.jpg'

# === ABOUT PAGE - Heritage (Black business team in modern office) ===
Download-Image 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_heritage.jpg'

# === LEADERSHIP VISIONARIES ===
# Leader 1: Black African professional man (CEO type)
Download-Image 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1' 'ghana_leader1.jpg'
# Leader 2: Black African professional woman
Download-Image 'https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=1' 'ghana_leader2.jpg'

# === REALTY IMAGES (Ghana-style properties/buildings) ===
Download-Image 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_property1.jpg'
Download-Image 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_property2.jpg'
Download-Image 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_property3.jpg'
Download-Image 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_property4.jpg'

# === GLOBAL/TRADE IMAGES ===
# Tema port / shipping containers
Download-Image 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_trade1.jpg'
# African market / trading scene (Black vendors)
Download-Image 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_market1.jpg'
# Cargo / freight logistics
Download-Image 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_trade2.jpg'
# Black African business professionals handshake/deal
Download-Image 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_business.jpg'

# === FOUNDATION IMAGES (Black African children & community) ===
# Ghanaian children smiling - school setting
Download-Image 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_children1.jpg'
# African children happy - community
Download-Image 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_children2.jpg'
# African school / classroom
Download-Image 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_school.jpg'
# African community outreach / volunteers
Download-Image 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=1' 'ghana_community.jpg'

# === HERO / BACKGROUND IMAGES ===
# Accra / Ghana cityscape for backgrounds
Download-Image 'https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1' 'ghana_accra.jpg'
# Ghana realty background (modern architecture)  
Download-Image 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1' 'ghana_realty_bg.jpg'

Write-Host "`nAll downloads complete."
