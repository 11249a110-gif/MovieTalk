@echo off
echo ========================================================
echo Pushing MovieTalk to https://github.com/11249a110-gif/MovieTalk.git
echo ========================================================
git branch -M main
git remote set-url origin https://github.com/11249a110-gif/MovieTalk.git
git add .
git commit -m "Enhance movie detail page, fix trailer playback, add Watch It On streaming hub modal and search autocomplete"
echo.
echo Attempting to push to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ----------------------------------------------------
    echo If push failed due to permission/account conflict:
    echo Run: git push https://11249a110-gif@github.com/11249a110-gif/MovieTalk.git main
    echo or add your GitHub Personal Access Token.
    echo ----------------------------------------------------
)
echo.
pause
