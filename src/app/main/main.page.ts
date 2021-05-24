import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  slideOpts = {
    slidesPerView: 4.3
  };
  posts = [
      {
        name: 'Raghavendra Kuratti',
        createdAt: new Date(1993, 6, 3),
        proimg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg',
        media: {
          url: 'http://techslides.com/demos/sample-videos/small.mp4',
          type: 'img'
        }
      }, {
        name: 'Annapurna Kuratti',
        createdAt: new Date(1995, 4, 13),
        proimg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg',
        media: {
          url: 'http://techslides.com/demos/sample-videos/small.mp4',
          type: 'img'
        }
      }, {
        name: 'Vittal Kuratti',
        createdAt: new Date(1973, 7, 1),
        proimg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg',
        media: {
          url: 'http://techslides.com/demos/sample-videos/small.mp4',
          type: 'img'
        }
      }, {
        name: 'Nirmala Kuratti',
        createdAt: new Date(1977, 1, 1),
        proimg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg',
        media: {
          url: 'http://techslides.com/demos/sample-videos/small.mp4',
          type: 'img'
        }
      }, {
        name: 'Nirmala Kuratti',
        createdAt: new Date(1977, 1, 1),
        proimg: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg',
        media: {
          url: 'http://techslides.com/demos/sample-videos/small.mp4',
          type: 'img'
        }
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
