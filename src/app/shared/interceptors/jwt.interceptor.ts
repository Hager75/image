import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {

//   constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   console.log("test intersptors");
  //   if(request.url.startsWith(environment.apiUrl)){
  //     request = request.clone({
  //       setHeaders:{
  //         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2E5ZDgxN2VhZjA1NTA2NzFjNzk1MDU5MTQ2MGE4ZTZlMmQ5N2ZlMTRiNzRjNWY4MzJmNjc5NDEyNjc0NDY1ZjgzYzFkYzQ0MDVjYWU0YmMiLCJpYXQiOjE1OTE1ODA1MTIsIm5iZiI6MTU5MTU4MDUxMiwiZXhwIjoxNjIzMTE2NTEyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.yu57MMFmhBw424Pfg3jdF6aQwE58aVRxlh_gmSzpMA0Rn7BmGh0AK5xk4Ojf0RPJyhiVrLkkp7bycfl9nD93voRv18RQjQTEEB53O-Fzu7_ZdCofrXHCDEugiCs0ClguRS3Hcom6NEHc1ztouWgodtTIUwcP-3R8cKdI24YW8fsFjSe1kujlUv9g8W69Du-CycEdLNtIQZ25wIwES_Fir0gE4tCa758KO-LcYrbgyJ6niWpw0C4B3bHzgCv9kR569AfI3tA8Vk63fdnkovld0F3qhnx4Tb_W3Vy751FtwqpGLQ5VUbhORTwABB0U3AuFWF9Lnl9MA4unLK1do7My_1KrA2faFibSl7_nz_947dsJdPdDxtYVhV4aHhH9m-IrWPQSDt6ea3biWA-ajdIymzGVu6iqOPNMz_h3Q_kY3fzVDseRH3cvuuvr-nzShLphYtxsJMsqX4kYJIcVkUZGwTYipb_0RmfmqOCdXfhummuNmetPoLu4IyPujj9z0hiWng5RZASpn_jKXVIUKQzMxEJ9alLBAvEVzS5NfRgHJNM_RsesHLD8aDGIco95R_8rq_WJgGNWETFjGh-1KM70NmUvqlpwWdkQ-s94dG9yWd4HEqzrI4RARz1DlU-v9XFfJx-DyqpRthlBGd8w44unv782YsahIlqi3VKQaj2adrY`
  //         // Authorization: localStorage.getItem("ACCESS_TOKEN")
          
  //       }
  //     });
  //   }
    
  //   return next.handle(request);
  // }
// }
