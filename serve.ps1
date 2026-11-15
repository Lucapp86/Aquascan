# AquaMetrics Pro - Local Development Server
# Runs natively on Windows PowerShell without requiring Node.js or Python!

$port = 8080
$url = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    Write-Host "Port $port occupata, provo 8081..." -ForegroundColor Yellow
    $port = 8081
    $url = "http://localhost:$port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " 🏊 AquaMetrics Pro - Server Locale Avviato!" -ForegroundColor Green
Write-Host " Apri il browser all'indirizzo: $url" -ForegroundColor White
Write-Host " Premi CTRL+C nella console per arrestare il server." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan

# Apri automaticamente il browser
Start-Process $url

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".mp4"  = "video/mp4"
    ".webm" = "video/webm"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($localPath) -or $localPath -eq "/") {
            $localPath = "index.html"
        }

        $fullPath = Join-Path (Get-Location).Path $localPath

        if (Test-Path $fullPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Cache-Control", "no-cache")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 - File non trovato: $localPath")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }

        $response.Close()
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
