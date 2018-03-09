import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AngularFireDatabase]
})
export class AdminComponent implements OnInit {

  itemValue = '';
  items: FirebaseListObservable<any[]>;
 
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  onSubmit() {
    this.items.push({content: this.itemValue});
    this.itemValue = '';
  }
  ngOnInit() {
  }

}
