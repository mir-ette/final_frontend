import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const appRoutes:Routes=[
  {path:'',component:UsersComponent},
  {path:'edit/:id',component:UserEditComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    SidebarComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
