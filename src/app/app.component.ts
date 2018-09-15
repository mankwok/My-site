import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Event } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '@app-core/auth.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  @ViewChild('drawer') drawer: ElementRef;
  title = 'Kwok\'s Site';

  ngOnInit() {
    this.router.events.pipe(
    filter((event: Event) => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map((route) => {
      while (route.firstChild) { route = route.firstChild; }
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event['title'] + ' | ' + this.title));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
