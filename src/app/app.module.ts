import { NgModule } from '@angular/core';
import { LayoutModule } from './common/layouts/layout.module';
import { MainLayoutComponent } from './common/layouts/main-layout/main-layout.component';

@NgModule({
  imports: [
    LayoutModule
  ],
  providers: [],
  bootstrap: [MainLayoutComponent]
})
export class AppModule { }
