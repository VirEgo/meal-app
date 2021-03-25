
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MealItemComponent } from './meal-item/meal-item.component';


@NgModule({
    declarations: [
        MainLayoutComponent,
        HeaderComponent,
        FooterComponent,
        MealItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class LayoutModule { }