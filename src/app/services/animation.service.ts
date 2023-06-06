import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as ScrollMagic from 'scrollmagic';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  ngOnInit() {

  }

  initializeAnimations(){
    const controller = new ScrollMagic.Controller();

    // Animation for the About Me section
    new ScrollMagic.Scene({
      triggerElement: '.animated-scroll',
      triggerHook: 0.8 // Adjust this value to determine when the animation should start
    })
    .on('', () => {
      gsap.from('.animated-scroll',{ opacity: 0, y: 50, ease: Power2.easeOut });
    })
    .addTo(controller);
  }



}
