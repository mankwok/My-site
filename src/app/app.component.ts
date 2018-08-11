import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '@app-core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public authService: AuthService
  ) {}

  @ViewChild('drawer') drawer:ElementRef;
  title = 'Kwok\'s Site';

  ngOnInit() {
    this.router.events.pipe(
    filter((event:Event) => event instanceof NavigationEnd),  
    map(() => this.activatedRoute), 
    map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data)
    ).subscribe((event) => this.titleService.setTitle(event['title']));
  }

  onNavClick(){
    this.drawer.nativeElement.MaterialLayout.toggleDrawer();
  }
}
