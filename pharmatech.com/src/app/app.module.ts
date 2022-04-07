import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugEditComponent } from './drug-edit/drug-edit.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryAddComponent } from './category-add/category-add.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { AuthGuardGuard } from './_guard/auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DrugSliderComponent } from './components/drug-slider/drug-slider.component';
import { HomeDrugComponent } from './components/home-drug/home-drug.component';
import { AboutDrugComponent } from './components/about-drug/about-drug.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';
import { HomeSkinComponent } from './components/home-skin/home-skin.component';
import { HomeCartComponent } from './components/home-cart/home-cart.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { ChildenGuardGuard } from './_guard/admin/childen-guard.guard';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailsComponent } from './components/details/details.component';

import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DrugItemComponent } from './components/drug-item/drug-item.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
const appRoutes: Routes = [

      { path: '', component: NewDashboardComponent, canActivate: [AuthGuardGuard] },
      { path: 'home', component: HomePageComponent },

      { path: 'edit/:id', component: UserEditComponent,canActivate: [AuthGuardGuard], },
      //////////////////////////////////
      {
        path: 'drugs', component: DrugsComponent
        ,canActivate: [AuthGuardGuard],
      },
      {
        path: 'drugs/add', component: DrugAddComponent,canActivate: [AuthGuardGuard],
      },
      { path: 'drugs/edit/:id', component: DrugEditComponent,canActivate: [AuthGuardGuard], },
      //////////////////////////////////////////////
      {
        path: 'orders', component: OrdersComponent,canActivate: [AuthGuardGuard],
      },
      { path: 'orders/add', component: OrderAddComponent,canActivate: [AuthGuardGuard], },
      { path: 'orders/edit/:id', component: OrderEditComponent,canActivate: [AuthGuardGuard], },
      ////////////////////////////////////////////

      {
        path: 'categories', component: CategoriesComponent,canActivate: [AuthGuardGuard],
      },
      { path: 'categories/edit/:id', component: CategoryEditComponent,canActivate: [AuthGuardGuard], },
      {
        path: 'categories/add', component: CategoryAddComponent,canActivate: [AuthGuardGuard],
      },
      ////////////////////////////////////////////////
      {
        path: 'users', component: HomeComponent ,canActivate: [AuthGuardGuard],
      },
      ///////////////////////////////////////////////
      { path: 'home/drug', component: HomeDrugComponent },
      { path: 'home/contact', component: HomeContactComponent },
      { path: 'about', component: AboutDrugComponent },
      { path: 'home/skin', component: HomeSkinComponent },

      { path: 'home/cart', component: HomeCartComponent },

 { path: 'home/details/:id', component:  DetailsComponent },
      
 

  { path: 'register', component: RegisterComponent, },
  { path: 'login', component: LoginComponent, canActivateChild: [ChildenGuardGuard]},//ask
  { path: 'profile/:id', component: ProfileAdminComponent,canActivate: [AuthGuardGuard], },
  { path: 'profile/edit/:id', component: EditAdminComponent,canActivate: [AuthGuardGuard], },
  {path:'**',component:  NotFoundPageComponent}

]

///////////////////////////////////////////////






@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    SidebarComponent,
    UserEditComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DrugsComponent,
    DrugEditComponent,
    OrdersComponent,
    OrderEditComponent,
    CategoriesComponent,
    CategoryEditComponent,
    CategoryAddComponent,
    DrugAddComponent,
    OrderAddComponent,
    HomeNavbarComponent,
    HomeFooterComponent,
    HomePageComponent,
    DrugSliderComponent,
    HomeDrugComponent,
    AboutDrugComponent,
    HomeContactComponent,
    HomeSkinComponent,
    HomeCartComponent,
    ProfileAdminComponent,
    EditAdminComponent,
    NewDashboardComponent,
    DetailsComponent,
    DrugItemComponent,
    NotFoundPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(routes),

    FormsModule,
    ReactiveFormsModule,
 
    ToastrModule.forRoot(),
    NgxPaginationModule,
    CarouselModule,
    NgxParallaxScrollModule,
   
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
