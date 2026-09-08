import os, subprocess

git_exe = os.path.abspath(os.path.join(os.getcwd(), '..', 'portable-git', 'cmd', 'git.exe'))
repo_url = "https://github.com/shankarbalaji859-dot/MovieTalk.git"

def run_git(args):
    cmd = [git_exe] + args
    print(f"Running: {' '.join(cmd)}")
    res = subprocess.run(cmd, capture_output=True, text=True)
    print("STDOUT:", res.stdout)
    if res.stderr:
        print("STDERR:", res.stderr)
    return res.returncode

# 1. Git Init
run_git(["init"])

# 2. Config user
run_git(["config", "user.name", "shankarbalaji859-dot"])
run_git(["config", "user.email", "shankarbalaji859@gmail.com"])

# 3. Add files
run_git(["add", "."])

# 4. Commit
run_git(["commit", "-m", "Initial commit: MovieTalk Full-Screen Cinematic Recommendation Platform with 1,000 Movies, Real Posters, Trailers, and Editorial Reviews"])

# 5. Branch main
run_git(["branch", "-M", "main"])

# 6. Remote
run_git(["remote", "remove", "origin"])
run_git(["remote", "add", "origin", repo_url])

# 7. Push
print("\nAttempting git push...")
ret = run_git(["push", "-u", "origin", "main"])

if ret == 0:
    print("\nSUCCESS! Successfully pushed MovieTalk codebase to GitHub!")
else:
    print("\nPush failed or requires authentication credentials.")
