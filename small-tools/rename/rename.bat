@echo off
REM 编写者 Aco
REM 延迟环境变量扩展，循环遍历文件或目录时对变量进行操作
setlocal enabledelayedexpansion

REM 改变代码页为支持中文的代码页，例如 936 (GBK) 或 65001 (UTF-8)
chcp 737 > nul
REM 使用 UTF-8 编码
chcp 65001 > nul

REM 提示用户输入目录路径
set /p "directory=请输入需要处理的文件夹完整路径: "
if not exist "%directory%" (
    echo 文件夹不存在，请重新运行脚本，并输入正确的文件夹完整路径......
	REM 退出脚本
    exit /b
)

REM 提示用户输入文件名前缀
set /p "prefix=请输入文件名前缀: "

REM 初始化计数器
set /a counter=1

REM 进入指定目录
cd /d "%directory%"

echo 文件夹重命名ing，请勿关闭窗口......

REM 遍历目录中的所有文件
for %%f in (*.*) do (
    set "ext=%%~xf"
	
	REM 格式化计数器为四位数
    if !counter! lss 10 (
        set "formattedCounter=000!counter!"
    ) else if !counter! lss 100 (
        set "formattedCounter=00!counter!"
    ) else if !counter! lss 1000 (
        set "formattedCounter=0!counter!"
    ) else (
        set "formattedCounter=!counter!"
    )

    set "newName=!prefix!-!formattedCounter!!ext!"
    ren "%%f" "!newName!"
    set /a counter+=1
)

echo 文件夹重命名完成，3s后自动关闭窗口......

REM 延迟3秒，/t 参数指定延迟时间，> nul 隐藏倒计时提示
timeout /t 3 > nul

exit
