import {Component, OnInit} from '@angular/core';
import {StatisticService} from '../../service/statistic.service';
import {Chart, registerables} from 'chart.js';
import {Title} from '@angular/platform-browser';
import * as html2pdf from 'html2pdf.js';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  statisticForm: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    type: new FormControl('book')
  });

  myChart: any = {};

  constructor(private title: Title,
              private statisticService: StatisticService) {
    Chart.register(...registerables);
    this.title.setTitle('Thống Kê');
  }

  ngOnInit(): void {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
          label: '#Số lượng: ',
          data: [0, 0, 0, 0, 0, 0],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  submit() {
    this.myChart.destroy();
    if (this.statisticForm.value.type === 'book') {
      this.statisticService.getStatistic(this.statisticForm.value.startDate, this.statisticForm.value.endDate).subscribe(value => {
        this.myChart.destroy();
        const data = [];
        const label = [];
        const color = [];
        const backgroundColor = [];
        for (let i = 0; i < value.length; i++) {
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          data[i] = value[i].quantity;
          label[i] = value[i].name;
          color[i] = 'rgba(' + r + ',' + g + ',' + b + ',0.2)';
          backgroundColor[i] = 'rgba(' + r + ',' + g + ',' + b + ',1)';
        }
        this.myChart = new Chart('myChart', {
          type: 'bar',
          data: {
            labels: label,
            datasets: [{
              label: ' # Số lượng: ',
              data,
              backgroundColor: color,
              borderColor: backgroundColor,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    } else {
      this.statisticService.getStatisticCustomer().subscribe(value => {
        const data = [];
        const label = [];
        const color = [];
        const backgroundColor = [];
        for (let i = 0; i < value.length; i++) {
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          data[i] = value[i].quantity;
          label[i] = value[i].name;
          color[i] = 'rgba(' + r + ',' + g + ',' + b + ',0.2)';
          backgroundColor[i] = 'rgba(' + r + ',' + g + ',' + b + ',1)';
        }
        this.myChart = new Chart('myChart', {
          type: 'bar',
          data: {
            labels: label,
            datasets: [{
              label: ' # Số lượng: ',
              data,
              backgroundColor: color,
              borderColor: backgroundColor,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      });
    }
  }

  exportPdf() {
    const options = {
      margin: 1,
      filename: 'Chart_PDF_Export',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {scale: 2},
      jsPDF: {unit: 'mm', format: 'a2', orientation: 'landscape'}
    };
    const content: Element = document.getElementById('pdf');
    html2pdf().from(content).set(options).save();
  }
}
