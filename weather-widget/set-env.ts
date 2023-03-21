const fs = require('fs');
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.demo.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();
// `environment.ts` file structure
const envConfigFile = `
// This file can be replaced during build by using the \`fileReplacements\` array.
// \`ng build\` replaces \`environment.ts\` with \`environment.prod.ts\`.
// The list of file replacements can be found in \`angular.json\`.

export const environment = {
  production: false,
  API_KEY: '${process.env['API_KEY']}'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as \`zone.run\`, \`zoneDelegate.invokeTask\`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
`;
console.log(colors.magenta('The file `environment.demo.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
fs.writeFile(targetPath, envConfigFile, function (err: string) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});