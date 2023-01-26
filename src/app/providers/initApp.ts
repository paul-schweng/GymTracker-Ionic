import {AuthenticationService} from "../services/authentication.service";

export function initApp(auth: AuthenticationService) {
  return () => auth.login().catch(()=>{});
}

