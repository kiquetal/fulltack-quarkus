import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatListModule } from '@angular/material/list';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSidenavModule} from "@angular/material/sidenav";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
   provideAnimations(),
  importProvidersFrom(MatSidenavModule,MatListModule), provideAnimationsAsync()]
};
