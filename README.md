"# static-repo" 

…or create a new repository on the command line

echo "# static-repo" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Gotop1711/static-repo.git
git push -u origin master

…or push an existing repository from the command line

git remote add origin https://github.com/Gotop1711/static-repo.git
git push -u origin master

…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

git page: https://gotop1711.github.io/static-repo/