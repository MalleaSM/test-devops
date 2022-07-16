import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import IMenu from '@shared/models/menu.model';
import { AuthenticationService } from '@authenticationService/authentication.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '@services/local-storage/local-storage.service';

/**
 * Component for application navigation
 */

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  // Attributes

  /**
   * Input attribute for title
   */
  @Input() title: string;

  /**
   * Input attribute for menus
   */
  @Input() menus: Array<IMenu>;

  /**
   * Reactive attribute for identify the change for Handset dimention
   */
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {
    this.title = '';
    this.menus = [];
  }

  // Methods

  /**
   * Logout from the application
   */
  onLogout(): void {
    this.authenticationService.logout(this.localStorageService.getItem("token"));
    this.localStorageService.clear();
    this.router.navigate(['/']);
  }

}
