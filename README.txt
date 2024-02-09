
RUN IN EXPO MODE:

IF u want start the procces with expo mode (Running the react native application on the phone  device directly)
open cmd in this root folder and type

npm start

for mor info visit
https://reactnative.dev/docs/environment-setup?guide=quickistart




////////////// RUN IN CLI ///////////


Seting up Listier and Prettier
Instala Linter que es una tool que analiza el codigo guente to flag programming errors bugs stylistic and supsicious
(en javascript se dice ESLint) 
> cd Path\RootFolderApReactNative

> npx react-native run-android //this should be launch the app in the android emulator

> npm install eslint --save -dev

> npx eslint --init > problems;javasript;react; no; bowser, jaascript; 

//despues para configurar Prettier
 
>npm install @react-native-community/eslint-config --save-dev


>npm install --save-dev --save-exact prettier

>touch .prettierrc.js


You can find out more about setting config for any of these files 
http://eslint.org/docs/latest/use/configure/configuration-files
https://prettier.io/docs/en/configuration.html

Basics about Prettier:
https://www.youtube.com/watch?v=DqfQ4DPnRqI

/////////////////////////////////////////

Finally in vcode go to Preferences > Extensions > Eslin (any issues restart all)
