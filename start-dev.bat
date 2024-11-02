@echo off
setlocal EnableDelayedExpansion

:: 設置顏色代碼
set "GREEN=[32m"
set "BLUE=[34m"
set "RED=[31m"
set "NC=[0m"

echo %BLUE%Setting up development environment...%NC%

:: 設置完整路徑
set "VENV_PATH=%CD%\backend\venv"
set "ACTIVATE_SCRIPT=%VENV_PATH%\Scripts\activate.bat"

:: 檢查並創建 Python 虛擬環境
if not exist "!VENV_PATH!" (
    echo %BLUE%Creating Python virtual environment...%NC%
    python -m venv "!VENV_PATH!"
    if !errorlevel! neq 0 (
        echo %RED%Failed to create virtual environment%NC%
        exit /b 1
    )
)

:: 啟動後端服務器 - 使用完整路徑
echo %GREEN%Starting Django server...%NC%
start cmd /k "cd backend && set PATH=!VENV_PATH!\Scripts;!PATH! && call !ACTIVATE_SCRIPT!  && python manage.py migrate && python manage.py runserver 8000"

:: 啟動前端服務器
echo %GREEN%Starting Next.js server...%NC%
start cmd /k "cd frontend && npm run dev"

echo %GREEN%Development servers are starting...%NC%
echo Backend server: http://localhost:8000
echo Frontend server: http://localhost:3000