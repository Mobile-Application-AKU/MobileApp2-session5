import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

// importing the pipes module from the src/app/pipes/pipes.module.ts file.
// N.B: the pipes module is not imported in the src/app/app.module.ts
// file because it is not used in all the app, it is only used in home page.
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

    // adding the pipes module to the imports array.
    PipesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
