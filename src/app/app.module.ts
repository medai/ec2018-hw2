import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// import component
import { AppComponent } from './app.component';
import { FormEventsComponent } from './components/form-events/form-events.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';


// import services
import { TodoDataService } from './services/todo-data.service';
import { UserDataService } from './components/user/user-data.service';


@NgModule({
  declarations: [
    AppComponent,
    FormEventsComponent,
    TodoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoDataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
