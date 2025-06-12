#perform a global install of typescript via node
npm install - g typescript

#verify that the typescript compiler is installed
tsc --version

#run this to create a package.json file, which we will need to specify dev tools for typescript
npm init

#set up or typoescript.json file using the command below with important property flags
tsc --init --sourceMap --rootDir <> --outDir <>

#run tsc to compile/transpile ts files to js files and source map files
tsc