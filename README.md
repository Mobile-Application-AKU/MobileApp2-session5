# MobileApp2-session5
In this code we used pipe to format the output of the variables, and created our own pipes.

# How to run the code
After cloning the repository(or installing the zip file), we have to run the following command in the terminal:
'npm install' to install all the dependencies.
After installing the dependencies, we have to run the following command in the terminal:
'ionic serve --lab' to run the app in the browser.

# files to check:
home page:
----------
- src/app/home/home.page.html
- src/app/home/home.page.ts
- src/app/home/home.module.ts

pipes: (to create pipes, we need to run the following command in the terminal: 'ionic generate pipe <pipes_folder_name>/<pipe_name>')
------
- src/app/pipes (the folder that contains all the pipes)
- src/app/pipes/double-value.pipe.ts
- src/app/pipes/user-extend.pipe.ts
- src/app/pipes/pipes.module.ts

#Note:
We have to create the pipes.module.ts file in the pipes folder if it is not automatically created.
We need to write it in this way:

import { NgModule } from '@angular/core';

// here we import our custom pipes. 
import { <custom_pipe1_name> } from '<custom_pipe1_path>';
import { <custom_pipe2_name> } from '<custom_pipe2_path>';

@NgModule({
  // in the declarations array we add our custom pipes.
  declarations: [<custom_pipe1_name>, <custom_pipe2_name>],
  // we keep the imports array empty.
  imports: [],
  // in the exports array we add our custom pipes.
  exports: [<custom_pipe1_name>, <custom_pipe2_name>],
})
// we export the class.
export class PipesModule {}