import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EventoService } from '../../services/evento.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    chartData_Norte: any;
    chartOptions_Norte: any;
    
    chartData_Sur: any;
    chartOptions_Sur: any;

    TablaDataMauleNorte: any;
    TablaDataMauleSur: any;
    
    constructor(private eventoService: EventoService) { }

    ngOnInit() {

        this.eventoService.getCantidadEventosSaePorZonal().subscribe({
            next: data => {

                const DataMauleNorte = data.json.filter((item: { id_zonal: number; }) => item.id_zonal === 1);

                console.log(DataMauleNorte);

                let meses = DataMauleNorte.map((item: { nombre_mes: any; }) => item.nombre_mes);
                let labels_meses = [...new Set(meses)];

                let registrosFiltrados_DOMIC = DataMauleNorte.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 1);
                let dataSet_tipoevento_DOMIC = registrosFiltrados_DOMIC.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);
           
                let registrosFiltrados_SSEEB = DataMauleNorte.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 2);
                let dataSet_tipoevento_SSEEB = registrosFiltrados_SSEEB.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);

                let registrosFiltrados_LINMT = DataMauleNorte.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 3);
                let dataSet_tipoevento_LINMT = registrosFiltrados_LINMT.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);

                let registrosFiltrados_REPAR = DataMauleNorte.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 4);
                let dataSet_tipoevento_REPAR = registrosFiltrados_REPAR.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);

                let registrosFiltrados_TOTAL = DataMauleNorte.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 5);
                let dataSet_tipoevento_TOTAL = registrosFiltrados_TOTAL.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);


                this.chartData_Norte = {
                    labels: labels_meses,
                    datasets: [
                        {
                            label: 'DOMIC',
                            data: dataSet_tipoevento_DOMIC,
                        },
                        {
                            label: 'SSEEB',
                            data: dataSet_tipoevento_SSEEB,
                        },
                        {
                            label: 'LINMT',
                            data: dataSet_tipoevento_LINMT,
                        },
                        {
                            label: 'REPAR',
                            data: dataSet_tipoevento_REPAR,
                        },
                        {
                            label: 'TOTAL',
                            data: dataSet_tipoevento_TOTAL,
                        }
                    ]
                };

                this.chartOptions_Norte = {
                    responsive: true,
                    plugins: {
                        scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        },
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Eventos Maule Norte'
                        }
                    }
                };


                const DataMauleSur = data.json.filter((item: { id_zonal: number; }) => item.id_zonal === 2);

                console.log(DataMauleSur);

                meses = DataMauleSur.map((item: { nombre_mes: any; }) => item.nombre_mes);
                labels_meses = [...new Set(meses)];

                registrosFiltrados_DOMIC = DataMauleSur.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 1);
                dataSet_tipoevento_DOMIC = registrosFiltrados_DOMIC.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);
           
                registrosFiltrados_SSEEB = DataMauleSur.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 2);
                dataSet_tipoevento_SSEEB = registrosFiltrados_SSEEB.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);
            
                registrosFiltrados_LINMT = DataMauleSur.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 3);
                dataSet_tipoevento_LINMT = registrosFiltrados_LINMT.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);

                registrosFiltrados_REPAR = DataMauleSur.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 4);
                dataSet_tipoevento_REPAR = registrosFiltrados_REPAR.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);

                registrosFiltrados_TOTAL = DataMauleSur.filter((item: { id_tipo_evento: number; }) => item.id_tipo_evento === 5);
                dataSet_tipoevento_TOTAL = registrosFiltrados_TOTAL.map((item: { cantidad_eventos: any; }) => item.cantidad_eventos);

                this.chartData_Sur = {
                    labels: labels_meses,
                    datasets: [
                        {
                            label: 'DOMIC',
                            data: dataSet_tipoevento_DOMIC,
                        },
                        {
                            label: 'SSEEB',
                            data: dataSet_tipoevento_SSEEB,
                        },
                        {
                            label: 'LINMT',
                            data: dataSet_tipoevento_LINMT,
                        },
                        {
                            label: 'REPAR',
                            data: dataSet_tipoevento_REPAR,
                        },
                        {
                            label: 'TOTAL',
                            data: dataSet_tipoevento_TOTAL,
                        }
                    ]
                };

                this.chartOptions_Sur = {
                    responsive: true,
                    plugins: {
                        scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true
                            }
                        },
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Eventos Maule Sur'
                        }
                    }
                };


            },
            error: err => {
                console.log(err);
            }
        });



        this.eventoService.getcanteventsaeorganizadomes().subscribe({
            next: data => {
                
                this.TablaDataMauleNorte = data.json.filter((item: { id_zonal: number; }) => item.id_zonal === 1);                
                console.log(this.TablaDataMauleNorte);
    
                this.TablaDataMauleSur = data.json.filter((item: { id_zonal: number; }) => item.id_zonal === 2);
                console.log(this.TablaDataMauleSur);

            },
            error: err => {
                console.log(err);
            }
        });



    }

}
