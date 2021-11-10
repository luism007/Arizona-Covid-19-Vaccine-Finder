import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


const vaccineSites = JSON.parse(JSON.stringify(localStorage.getItem('vaccineSites'))) ||
[
    {
      id: 1,
      name: 'Alma School Rd. Main St.',
      address: '1245 W Main St, Mesa, AZ 85201',
      addressUrl: 'https://www.google.com/maps/place/1245+W+Main+St%2C+Mesa%2C+AZ+85201',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:12',
      county: 'Yuma'
    },
    {
      id: 2,
      name: 'McKellips Stapley Dr.',
      address: '1935 N Stapley Dr, Mesa, AZ 85203',
      addressUrl: 'https://www.google.com/maps/place/1935+N+Stapley+Dr%2C+Mesa%2C+AZ+85203',
      appointments: [
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        }
      ],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:13',
      county: 'Maricopa'
    },
    {
      id: 3,
      name: 'Baseline Country Club',
      address: '554 W Baseline Rd, Mesa, AZ 85210',
      addressUrl: 'https://www.google.com/maps/place/554+W+Baseline+Rd%2C+Mesa%2C+AZ+85210',
      appointments: [
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        }
      ],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:15',
      county: 'Maricopa'
    },
    {
      id: 4,
      name: '77th St McDowell',
      address: '7770 E Mcdowell Rd, Scottsdale, AZ 85257',
      addressUrl: 'https://www.google.com/maps/place/7770+E+Mcdowell+Rd%2C+Scottsdale%2C+AZ+85257',
      appointments: [
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        }
      ],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:16',
      county: 'Maricopa'
    },
    {
      id: 5,
      name: 'Broadway Lindsay',
      address: '2727 E Broadway Rd, Mesa, AZ 85204',
      addressUrl: 'https://www.google.com/maps/place/2727+E+Broadway+Rd%2C+Mesa%2C+AZ+85204',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:17',
      county: 'Pima'
    },
    {
      id: 6,
      name: 'Baseline Gilbert',
      address: '1845 E Baseline Rd, Gilbert, AZ 85233',
      addressUrl: 'https://www.google.com/maps/place/1845+E+Baseline+Rd%2C+Gilbert%2C+AZ+85233',
      appointments: [
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        },
        {
            date: 'Feb 5th',
            time: '11:00 am'
        }
      ],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:19',
      county: 'Pima'
    },
    {
      id: 7,
      name: 'Baseline McClintock',
      address: '5100 S Mcclintock Dr, Delivery Location #1, Tempe, AZ 85282',
      addressUrl: 'https://www.google.com/maps/place/5100+S+Mcclintock+Dr%2C+Delivery+Location+%231%2C+Tempe%2C+AZ+85282',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:20',
      county: 'Pima'
    },
    {
      id: 8,
      name: 'Rural Southern',
      address: '3255 S Rural Rd, Tempe, AZ 85282',
      addressUrl: 'https://www.google.com/maps/place/3255+S+Rural+Rd%2C+Tempe%2C+AZ+85282',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:22',
      county: 'Pima'
    },
    {
      id: 9,
      name: 'Alma School Elliott',
      address: '981 W Elliot Rd, Chandler, AZ 85225',
      addressUrl: 'https://www.google.com/maps/place/981+W+Elliot+Rd%2C+Chandler%2C+AZ+85225',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:23',
      county: 'Mohave'
    },
    {
      id: 10,
      name: 'McClintock Guadalupe',
      address: '1835 E Guadalupe Rd, Tempe, AZ 85283',
      addressUrl: 'https://www.google.com/maps/place/1835+E+Guadalupe+Rd%2C+Tempe%2C+AZ+85283',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:24',
      county: 'Mohave'
    },
    {
      id: 11,
      name: '101 Mill Southern',
      address: '3232 S Mill Ave, Tempe, AZ 85282',
      addressUrl: 'https://www.google.com/maps/place/3232+S+Mill+Ave%2C+Tempe%2C+AZ+85282',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:26',
      county: 'Mohave'
    },
    {
      id: 12,
      name: 'Indian School Rd. Miller',
      address: '7628A E Indian School Rd, Scottsdale, AZ 85251',
      addressUrl: 'https://www.google.com/maps/place/7628A+E+Indian+School+Rd%2C+Scottsdale%2C+AZ+85251',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:27',
      county: 'Coconino'
    },
    {
      id: 13,
      name: 'Greenfield Main',
      address: '4440 E Main St, Mesa, AZ 85205',
      addressUrl: 'https://www.google.com/maps/place/4440+E+Main+St%2C+Mesa%2C+AZ+85205',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:28',
      county: 'Coconino'
    },
    {
      id: 14,
      name: 'Warner Cooper',
      address: '855 W Warner Rd, Gilbert, AZ 85233',
      addressUrl: 'https://www.google.com/maps/place/855+W+Warner+Rd%2C+Gilbert%2C+AZ+85233',
      appointments: [],
      registration_url: 'https://www.kroger.com/rx/guest/get-vaccinated',
      lastCheck: '2021-02-03 18:23:30',
      county: 'Coconino'
    }
  ];

@Injectable()
export class FakeHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const { url, method, headers, body } = req;

        return of(null)
        .pipe(mergeMap(handleApiRequest))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

        // tslint:disable-next-line:typedef
        function handleApiRequest(this: any){
           switch (true) {
               case url.endsWith('vaccines/get-vaccine-sites') && method === 'GET':
                return getVaccineSites();

             default:
                 return next.handle(req);

           }
       }


        // tslint:disable-next-line:typedef
        function getVaccineSites() {
            return ok(vaccineSites);
       }
        // tslint:disable-next-line:typedef
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        // tslint:disable-next-line:typedef
        function error(message: any) {
            return throwError({ error: { message } });
        }

    }

}
