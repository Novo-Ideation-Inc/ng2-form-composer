/**
 * Created by Jamie on 2016-09-26.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from './directives';
import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { SERVICES } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DIRECTIVES,
    COMPONENTS,
    PIPES
  ],
  exports: [
    // Expose any public directives, components, and pipes here.
  ],
  providers: SERVICES
})
export class MyModule {}