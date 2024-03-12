import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { OtherProductsComponent } from './other-products/other-products.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Trang chủ'
    },
    {
        path: 'item-details',
        component: ItemDetailsComponent,
        title: 'Chi tiết sản phẩm'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Giỏ hảng'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Đăng nhập'
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
        title: 'Đăng ký'
    },
    {
        path: 'other-products',
        component: OtherProductsComponent,
        title: 'Sản phẩm khác'
    },
    {
        path: 'warehouse',
        component: OtherProductsComponent,
        title: 'Quản lý kho'
    }
];

export default routes;
