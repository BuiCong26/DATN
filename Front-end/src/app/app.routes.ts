import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'item-details',
        component: ItemDetailsComponent,
        title: 'Item Details'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart'
    },
];

export default routes;
