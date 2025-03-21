git init #initiated within a folder(working directory) 
#all files within it can now be tracked with git, but not before...*/
git add <file.ext> #adds specific file to staging area
git add . #adds all files to the staging area
git status #shows us which files aren't yet in the staging area
git commit -m "<msg>" #should be executed for each savepoint (present tense preferred)
git log #executed to display our detaile commit history