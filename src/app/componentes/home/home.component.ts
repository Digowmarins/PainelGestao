import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(element: HTMLAnchorElement) {
    // Remove a classe 'active' de todos os itens do menu
    const menuItems = document.querySelectorAll('.menu-lateral ul li');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Adiciona a classe 'active' ao item do menu clicado
    element.parentElement!.classList.add('active');
}

}
