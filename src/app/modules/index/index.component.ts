import {Component, OnInit} from '@angular/core';
import {cardList, articles} from './index-data';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isOpen = false;
  receiptStatus = this.authService.receiptStatus$.getValue();
  cardList = cardList;
  articles = articles;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.checkUserAuth();
  }

  checkUserAuth(): void {
    this.authService.isUserAuth$.subscribe(res => {
      if (!res) {
        this.router.navigate(['/auth']);
      }
    });
  }
}
