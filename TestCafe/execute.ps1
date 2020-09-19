Write-Output "starting tests"
for($i = 0; $i -lt 10; $i++)
{
    Write-Output "Staring test"  $i
    cmd.exe /c RunFirefoxHeadLess.bat
}
