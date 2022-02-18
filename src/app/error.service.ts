import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
import * as Sentry from "@sentry/browser";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Integrations } from "@sentry/tracing";

import { AppModule } from "../app/app.module";


Sentry.init({
  dsn: "http://1f8b509a09de48368dce394529b5ee09@65.0.76.147:9000/8"
});

// enableProdMode();
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then(success => console.log(`Bootstrap success`))
//   .catch(err => console.error(err));
@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector) { }
  handleError(error: any) {
    const router = this.injector.get(Router);
    const eventId = Sentry.captureException(error.originalError || error);
    if (Error instanceof HttpErrorResponse) {
      console.log(error.status);
    }
    else {
      console.error("an error occured here broo");
      // Sentry.showReportDialog({ eventId });
    }
    router.navigate(['error']);
  }

}