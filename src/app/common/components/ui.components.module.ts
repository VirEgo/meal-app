import { NgModule } from "@angular/core";
import { LayoutModule } from "../layouts/layout.module";
import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";

@NgModule({
    imports: [
        LayoutModule
    ],
    providers: [],
    bootstrap: [MainLayoutComponent],
    declarations: []
})
export class UIComponentsModule { }