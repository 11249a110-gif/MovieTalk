import os, sys, urllib.request, zipfile

git_dir = os.path.abspath(os.path.join(os.getcwd(), '..', 'portable-git'))
os.makedirs(git_dir, exist_ok=True)

git_exe = os.path.join(git_dir, 'cmd', 'git.exe')

if not os.path.exists(git_exe):
    print("Downloading MinGit Portable for Windows...")
    url = "https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/MinGit-2.43.0-64-bit.zip"
    zip_path = os.path.join(git_dir, 'mingit.zip')
    
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp, open(zip_path, 'wb') as f:
        f.write(resp.read())
        
    print("Extracting MinGit...")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(git_dir)
    os.remove(zip_path)
    print("MinGit installed successfully!")
else:
    print(f"Git Portable found at: {git_exe}")

print(f"Git executable ready: {git_exe}")
