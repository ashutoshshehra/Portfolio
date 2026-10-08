Write-Host "Deploying Ashutosh Shehra Portfolio to GitHub..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Code successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Now go to: https://github.com/ashutoshshehra/portfolio/settings/pages" -ForegroundColor Cyan
    Write-Host "Under 'Branch', select 'main' and '/ (root)', then click Save." -ForegroundColor Cyan
    Write-Host "Your website will be live at: https://ashutoshshehra.github.io/portfolio/`n" -ForegroundColor Green
} else {
    Write-Host "`n⚠️ Push failed. Please make sure:" -ForegroundColor Yellow
    Write-Host "1. You created the empty repository at: https://github.com/new with name 'portfolio'" -ForegroundColor Yellow
    Write-Host "2. You are logged into Git/GitHub on your machine.`n" -ForegroundColor Yellow
}
