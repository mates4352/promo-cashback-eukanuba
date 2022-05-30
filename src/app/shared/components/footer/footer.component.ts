import { Component, OnInit } from '@angular/core';
import { linksRations, linksAboutUs, linksBuy, linksIcon} from './footer-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linksRations = linksRations;
  linksAboutUs = linksAboutUs;
  linksBuy = linksBuy;
  linksIcon = linksIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
