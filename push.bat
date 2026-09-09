@echo off
set GIT_EXE=..\portable-git\cmd\git.exe
echo Initializing and pushing MovieTalk repository to GitHub...
"%GIT_EXE%" add .
"%GIT_EXE%" commit -m "Full Release: MovieTalk Recommendation System"
"%GIT_EXE%" branch -M main
"%GIT_EXE%" remote set-url origin https://github.com/shankarbalaji859-dot/MovieTalk.git
"%GIT_EXE%" push -u origin main
pause
