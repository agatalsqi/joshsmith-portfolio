import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joshsmith-portfolio';

  profile = {
    name: 'Artem Gatalskiy',
    position: 'Front-end Developer',
    githubUrl: 'https://github.com/agatalsqi',
    photoUrl: 'https://avatars0.githubusercontent.com/u/18549847?s=460&v=4'
  };

  projects = [
    {
      name: 'Multiparts',
      year: '2018',
      link: 'https://multiparts.net/'
    },
    {
      name: 'Travelshift',
      year: '2019',
      link: 'https://guidetoiceland.is/'
    },
    {
      name: 'GreenAnt',
      year: '2017',
      link: 'http://greenant.by/'
    }
  ]
}
