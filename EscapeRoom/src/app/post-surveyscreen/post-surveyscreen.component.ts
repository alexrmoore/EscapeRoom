import { Component, OnInit, HostListener } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

@Component({
  selector: 'app-post-surveyscreen',
  templateUrl: './post-surveyscreen.component.html',
  styleUrls: ['./post-surveyscreen.component.css']
})
export class PostSurveyscreenComponent implements OnInit {
  PostSurveyUrl = 'https://jpqkvwktd6k.typeform.com/to/YbQlKy1K#anonymousid=xxxxx&timetocomplete=xxxxx&reflectiontime=xxxxx&interferencetime=xxxxx&photoelectrictime=xxxxx&submit_reflection1=xxxxx&submit_reflection2=xxxxx&submit_reflection3=xxxxx&submit_interference1=xxxxx&submit_interference2=xxxxx&submit_photoelectric1=xxxxx&submit_photoelectric2=xxxxx&submit_overall1=xxxxx';

  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService) {
  }

  ngOnInit(): void {
    const container = document.getElementById('container');
    const widgetNode = document.getElementById('surveywidget');
    const newWidget = document.createElement('div');
    typeformEmbed.makeWidget(newWidget, this.PostSurveyUrl, {
      hideFooter: true,
      hideHeaders: true,
    });
    newWidget.style.zIndex = '50';
    newWidget.style.position = 'absolute';
    newWidget.style.width = '800px';
    newWidget.style.height = '550px';
    container.insertBefore(newWidget, widgetNode);
  }

}
