import { Softskills } from './../../interfaces/Softskills.interface';
import { AnimationService } from './../../services/animation.service';
import { Component, OnInit } from '@angular/core';

import { Technology } from 'src/app/interfaces/Technology.interface';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  technologies: Technology[] = [];
  softSkills: Softskills[] = [];
  currentYear:Date= new Date();
  constructor(
    private firebaseService: FirebaseService,
    private AnimationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.AnimationService.initializeAnimations()
    this.getTechnologies();
    this.getsSoftSkills();


  }

  getTechnologies(){
    this.firebaseService.getTechnologies().subscribe(( technologies: Technology[] ) => {
      this.technologies = technologies;

      console.log(technologies);
    });

  }
  getsSoftSkills(){
    this.firebaseService.getSoftSkills().subscribe(( softskills: Softskills[] ) => {
      this.softSkills = softskills
      console.log(softskills);
    });

  }


}
