import {CanMatchFn, Route, UrlSegment} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(AuthService).isAuth();
};
