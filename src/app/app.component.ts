import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Tools';

  menuClick(){
    // var is_drawer_open = 'is-visible'
    // var drawerButton = document.querySelector('.mdl-layout__drawer-button');
    // var drawer_ = document.querySelector('.mdl-layout__drawer');
    // var obfuscator_ = document.querySelector('.mdl-layout__obfuscator');
    // drawer_.classList.toggle(is_drawer_open);
    // obfuscator_.classList.toggle(is_drawer_open);
    // // Set accessibility properties.
    // if (drawer_.classList.contains(is_drawer_open)) {
    //   drawer_.setAttribute('aria-hidden', 'false');
    //   drawerButton.setAttribute('aria-expanded', 'true');
    // } else {
    //   drawer_.setAttribute('aria-hidden', 'true');
    //   drawerButton.setAttribute('aria-expanded', 'false');
    // }
    (
      document.querySelector('.mdl-layout__obfuscator') as HTMLDivElement
    ).click();
  }
}
