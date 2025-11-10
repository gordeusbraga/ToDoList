import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./header.css']
})
export class Header {
  constructor() { }
}