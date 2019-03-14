
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { HTTP_UNAUTHORIZED, HTTP_UNEXPECTED, CLIENT_CONNECTION, HTTP_FORBIDDEN } from '../constants/error-messages';

export const handleError = (error: HttpErrorResponse) => {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    return throwError(CLIENT_CONNECTION);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    switch (error.status) {
      case 401: return throwError(HTTP_UNAUTHORIZED);
      case 403: return throwError(HTTP_FORBIDDEN);
      default: return throwError(HTTP_UNEXPECTED);
    }
  }
};
