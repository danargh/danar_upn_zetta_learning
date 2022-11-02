import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { ZettaModule } from './app/angular-day2/zetta.module';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
   enableProdMode();
}

platformBrowserDynamic()
   .bootstrapModule(AppModule)
   .catch((err) => console.error(err));
