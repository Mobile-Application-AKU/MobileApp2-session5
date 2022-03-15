import { NgModule } from '@angular/core';

// here we import our custom pipes. 
import { DoubleValuePipe } from './double-value.pipe';
import { UserExtendPipe } from './user-extend.pipe';

@NgModule({
  // in the declarations array we add our custom pipes.
  declarations: [DoubleValuePipe, UserExtendPipe],
  // we keep the imports array empty.
  imports: [],
  // in the exports array we add our custom pipes.
  exports: [DoubleValuePipe, UserExtendPipe],
})
// we export the class.
export class PipesModule {}