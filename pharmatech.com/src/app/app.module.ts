import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
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
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryAddComponent } from './category-add/category-add.component';
import { DrugAddComponent } from './drug-add/drug-add.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DrugSliderComponent } from './components/drug-slider/drug-slider.component';
const appRoutes:Routes=[
  {path:'',component:HomeComponent,
canActivate:[AuthGuard]},

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:id',component:UserEditComponent},
  //////////////////////////////////
  {path:'drugs',component:DrugsComponent
  },
  {path:'drugs/add',component:DrugAddComponent
},
  {path:'drugs/edit/:id',component:DrugEditComponent},
//////////////////////////////////////////////
  {path:'orders',component:OrdersComponent
},
{path:'orders/add',component:OrderAddComponent},
{path:'orders/edit/:id',component:OrderEditComponent},
////////////////////////////////////////////

{path:'categories',component:CategoriesComponent
},
{path:'categories/edit/:id',component:CategoryEditComponent},
{path:'categories/add',component:CategoryAddComponent
},
/////////////////////////////////////////////////////////
{path:'home',component:HomePageComponent},

  //{path:'',component:UsersComponent},
  // {path:'edit/:id',component:UserEditComponent},
  // {path:'drugs',component:DrugsComponent,childern:[
    // {path:'/edit/:id',component:DrugEditComponent}
  // ]}
  // {path:'drugs/edit/:id',component:DrugEditComponent}

]
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
    DrugSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(routes),
    
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
