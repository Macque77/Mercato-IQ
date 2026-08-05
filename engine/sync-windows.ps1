<#
.SYNOPSIS
    Double-clickable / Task Scheduler entry point for the Mercato IQ sync.

.DESCRIPTION
    Thin PowerShell shim that forwards to engine/sync-windows.sh under Git Bash.
    All the real work (python3 shim, PYTHONUTF8, verify skip, HTTPS push,
    reconcile-onto-latest-main) lives in the .sh; this only locates bash and
    passes the research file(s) through.

    Environment flags understood by the underlying script are inherited from
    the PowerShell session, e.g.:
        $env:NO_PUSH = '1'      # build + commit locally, do not push
        $env:FULL_VERIFY = '1'  # run the full Playwright sweep (needs it installed)

.EXAMPLE
    .\engine\sync-windows.ps1 C:\path\to\research.json

.EXAMPLE
    # Task Scheduler action:
    #   Program:   powershell.exe
    #   Arguments: -ExecutionPolicy Bypass -File "C:\Users\mcele\Mercato-IQ\engine\sync-windows.ps1" "C:\path\to\research.json"
#>
param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$ResearchArgs
)
# NOT 'Stop': the underlying bash pipeline writes progress and warnings to
# stderr, and under Windows PowerShell 5.1 a native command's stderr becomes a
# NativeCommandError that 'Stop' would treat as fatal. We judge success by the
# bash exit code instead. Find-Bash below uses `throw`, which terminates
# regardless of this setting, so a genuinely missing bash still errors out.
$ErrorActionPreference = 'Continue'
$RepoRoot = Split-Path -Parent $PSScriptRoot   # engine\ -> repo root

function Find-Bash {
    $cmd = Get-Command bash.exe -ErrorAction SilentlyContinue
    if ($cmd) { return $cmd.Source }
    foreach ($p in @(
            "$env:ProgramFiles\Git\bin\bash.exe",
            "${env:ProgramFiles(x86)}\Git\bin\bash.exe",
            "$env:LOCALAPPDATA\Programs\Git\bin\bash.exe"
        )) { if (Test-Path $p) { return $p } }
    throw "Could not find bash.exe. Install Git for Windows (https://git-scm.com/download/win)."
}

if (-not $ResearchArgs -or $ResearchArgs.Count -eq 0) {
    Write-Host "Usage: sync-windows.ps1 <research.json> [more.json ...]"
    exit 1
}

$Bash = Find-Bash

# Build a bash command line: cd to the repo root (as a /c/... style path bash
# accepts) and run the wrapper with each argument forward-slashed and quoted.
$repoU = $RepoRoot -replace '\\', '/'
$quoted = $ResearchArgs | ForEach-Object {
    $a = ($_ -replace '\\', '/') -replace "'", "'\''"
    "'$a'"
}
$cmd = "cd '$repoU' && bash engine/sync-windows.sh " + ($quoted -join ' ')

& $Bash -c $cmd
exit $LASTEXITCODE
