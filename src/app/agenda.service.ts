import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AgendaService {

    private urlApiAgenda = 'http://localhost:8090/api/Agenda/'
    private findAllAgenda = 'listarAll'

    constructor(private http: Http){}

    getAllAgendas(): Observable<any[]> {
        return this.http.get(`${this.urlApiAgenda + this.findAllAgenda}`).pipe(
            map((resposta) => resposta.json())
        )
    }
    
}