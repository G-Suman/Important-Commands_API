

git init
git status
ls -a
rm -rf filename
git add .
git add filename
git commit -m “message”
git restore – staged filename
git log
git checkout branchname
git checkout -b branchname
git remote -v
git ls - remote
git pull origin main
git branch -d branchname
git reset id
git add filename+ git stash filename
git stash pop
git stash clear
git remote add origin url
git push origin branch name
ls .git
git merge branchname
git clone .
git remote add upstream url
git branch
git merge main
git diff
git commit -am
git rm --cached filename
git commit -m "message " - m "message "
git fetch
 // suppose you committed on the that branch and pushed the changes mistakely on that branch , but , you have to make a new branch and push changes and make a new 
// pull request so , how to remove this commit on that branch and make a changes in the remote repo .
git log . , git reset id , git add . , git stash (gone) , git push origin branchname -f // because remote repo contains that commit that my 
// local repo doesnot contains , so match that , i must forcefully pushed ... 
