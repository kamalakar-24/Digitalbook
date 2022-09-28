import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BookformComponent } from './bookform/bookform.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BuyBooksComponent } from './buy-books/buy-books.component';
import { RefundComponent } from './refund/refund.component';


const routes:Route []=[
  {path:'search', component:SearchbookComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'bookform', component:BookformComponent},
  {path:'updateBook', component:UpdateBookComponent},
  {path:'searchBook', component:SearchbookComponent},
  {path:'buyBooks', component:BuyBooksComponent},
  {path:'refund', component:RefundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
   SignupComponent,
   SigninComponent,
   SearchbookComponent,
   HeaderComponent,
   BookformComponent,
   UpdateBookComponent,
   BuyBooksComponent,
   RefundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  
    HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
