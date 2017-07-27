import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title: string;
    private image = 'assets/images/bigtree.png';

    constructor() {
        this.title = 'Palmdale CocoTree';
    }
}
