import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Technology } from '../interfaces/Technology.interface';
import { Softskills } from '../interfaces/Softskills.interface';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  private technologyCollection: AngularFirestoreCollection<any>;
  private softskillCollection: AngularFirestoreCollection<any>;
  technologies: Observable<Technology[]> | undefined;
  softskills: Observable<Softskills[]>| undefined;

  constructor(private firestore: AngularFirestore) {
    this.softskillCollection = firestore.collection('soft-skills');
    this.technologyCollection = this.firestore.collection('technologies');
  }

  getTechnologies(): Observable<Technology[]> {
    this.technologies = this.technologyCollection.valueChanges({ idField: 'id' });
    return this.technologies;
  }
  getSoftSkills(): Observable<Softskills[]> {
    this.softskills = this.softskillCollection.valueChanges({ idField: 'id' });
    return this.softskills;
  }
}
