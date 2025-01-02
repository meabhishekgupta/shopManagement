import { Routes } from '@angular/router';
import { ShopsComponent } from './shops/shops.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { IDProofComponent } from './idproof/idproof.component';
import { ViewIDProofComponent } from './view-idproof/view-idproof.component';

export const routes: Routes = [
    {
        path:'',    
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path:'Shops',
        component: ShopsComponent
    },
    {
        path:'Home',
        component: HomeComponent
    },
    {
        path:'About',
        component: AboutComponent
    },
    {
        path:'Contact',
        component: ContactComponent
    },
    {
        path:'ShopCategory',
        component: ShopCategoryComponent
    },
    {
        path:'IDProof',
        component: IDProofComponent
    }
];
