Add-Type -AssemblyName System.Drawing

$assetsDir = Join-Path $PSScriptRoot "..\src\assets"
New-Item -ItemType Directory -Force -Path $assetsDir | Out-Null

function New-Avatar($path, [int]$base) {
    $size = 128
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

    $bg = [System.Drawing.Color]::FromArgb(255, $base, $base, $base)
    $g.Clear([System.Drawing.Color]::FromArgb(255, 10, 10, 10))

    # Head silhouette
    $brush = New-Object System.Drawing.SolidBrush($bg)
    $g.FillEllipse($brush, 34, 22, 60, 60)   # head
    $g.FillEllipse($brush, 14, 86, 100, 70)  # shoulders

    # Subtle ring accent
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 255, 255, 255), 2)
    $g.DrawEllipse($pen, 4, 4, 120, 120)

    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}

function New-PlatformIcon($path, [string]$letter) {
    $size = 400
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.Color]::Transparent)

    # Outer ring
    $penRing = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 230, 230, 230), 6)
    $g.DrawEllipse($penRing, 60, 60, 280, 280)

    # Inner ring
    $penInner = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(140, 255, 255, 255), 2)
    $g.DrawEllipse($penInner, 84, 84, 232, 232)

    # Letter
    $font = New-Object System.Drawing.Font("Segoe UI", 120, [System.Drawing.FontStyle]::Bold)
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = [System.Drawing.StringAlignment]::Center
    $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
    $rect = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
    $g.DrawString($letter, $font, $brush, $rect, $sf)

    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}

New-Avatar (Join-Path $assetsDir "avatar-1.png") 200
New-Avatar (Join-Path $assetsDir "avatar-2.png") 150
New-Avatar (Join-Path $assetsDir "avatar-3.png") 110

New-PlatformIcon (Join-Path $assetsDir "icon-chatgpt.png") "C"
New-PlatformIcon (Join-Path $assetsDir "icon-perplexity.png") "P"
New-PlatformIcon (Join-Path $assetsDir "icon-google.png") "G"

Get-ChildItem $assetsDir | Select-Object Name, Length
