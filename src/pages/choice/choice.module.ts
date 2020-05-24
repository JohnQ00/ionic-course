import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoicePage } from './choice';

@NgModule({
  declarations: [
    ChoicePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoicePage),
  ],
  exports: [
    ChoicePage
  ]
})
export class ChoicePageModule {}
