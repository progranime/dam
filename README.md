How to setup the project:

1. Create New Folder name meta-crawler in your machine
2. Inside the folder right click and checkout using this link https://webph-dev-ph-01.music-group.com:8443/svn/meta-crawler/
3. After retrieving the files use these following command:
    - In root folder run "npm install"
    - Go to client folder run "cd client"
    - Run "npm install"
    - Go back to root folder run "cd ../"
    - Run "npm run dev" to run both server and client side
4. Install Chrome dev tools for React
    - React Developer Tools = https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
    - Redux DevTools = https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

Format in coding:

1. Use these following extensions:
    - Babel ES6/ES7
    - ES7 React/Redux/GraphQL/React-Native snippets
    - Prettier - Code formatter
2. Change the format, Go to File -> Preference -> Settings
    - Search "Prettier: Tab Width" = 4
    - Editor: Format On Save = Check
    - Prettier: Single Quote = Check
    - Prettier: Semi = Uncheck

For the exiftool to work in your local machine do the following:

1. Install the https://www.sno.phy.queensu.ca/~phil/exiftool/
2. Download this "Windows Executable: exiftool-11.14.zip (6.0 MB)"
3. Rename the file to "exiftool.exe"
4. Then move the exe file to the C:\Windows for you to access exiftool in command line

How to upload images:

1. Upload the files to the "images-to-upload" folder
2. Open postman to run the following scripts to server
3. Set the method to "POST", pass the url "localhost:5000/api/file/collectData" and click Send
    - it will collect the data/keywords of the file and save it to the database
4. Set the method to "POST", pass new url "localhost:5000/api/file/createThumbnail" and click Send
    - it will create thumbnails for the images, for fast loading to the client side
5. Check the meta-crawler/client/public/images/thumbnails folder and see the generated thumbnails
6. Cut the finished files in "images-to-upload" and paste to "dam" folder
