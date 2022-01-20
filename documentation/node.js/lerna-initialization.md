# Project Initialization Note(s) #

## Setup ##

1. `npx lerna init`
2. `npm install .`
3. `npx lerna-wizard`
   1. `init` (Initialize a new Lerna repository)
   2. `No` (Increment all repositories with one-another)
   3. `verbose` (Setting the loglevel)
4. `git add --all && git commit --message "Mono-Repository Setup"`
5. `git clone https://github.com/cloud-hybrid/ui-template.git`
6. `git push --set-upstream origin Development`
7. `lerna import ui-template --dest packages`