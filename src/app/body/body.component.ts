import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public agendas: any[]

  constructor(private agendaService: AgendaService) { 
    
  }

  ngOnInit() {
    this.getAllAgendas();
  }

  getAllAgendas() {
    this.agendaService.getAllAgendas().subscribe((resposta => {
      this.agendas = resposta
    }))
  }

}
