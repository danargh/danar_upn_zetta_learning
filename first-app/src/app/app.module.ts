import { MaterialModule } from './module/module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/form-select;
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatCardModule } from '@angular/material/card';

@NgModule({
   declarations: [AppComponent, AccountComponent, NewAccountComponent],
   imports: [BrowserModule, FormsModule, MaterialModule],
   // provider ditaruh parent ini agar bisa diakses dimanapun
   providers: [AccountsService, LoggingService],
   bootstrap: [AppComponent],
})
export class AppModule {}
