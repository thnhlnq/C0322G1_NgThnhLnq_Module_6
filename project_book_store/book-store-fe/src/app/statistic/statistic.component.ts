import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {StatisticService} from '../service/statistic.service';
import {Chart, registerables} from 'chart.js';
import {FormControl, FormGroup} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import * as html2pdf from 'html2pdf.js';
import Swal from 'sweetalert2';
import {checkDay, checkEnd, checkStart, dateInFuture, dateNotExist} from '../validation/check-date';

Chart.register(...registerables);

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  listStatistic: any;
  valueQuantityPieChart: number[] = [];
  valuePricePieChart: number[] = [];
  valueCustomerPieChart: number[] = [];
  namePieChart: string[] = [];

  // pastDay = this.datePipe.transform(new Date().setDate(new Date().getDate() - 2000), 'yyyy-MM-dd');
  // today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  myChart: Chart;
  myPieChart1: Chart;
  myPieChart2: Chart;
  hiddenChart: boolean;
  hiddenPieChart: boolean;
  statisticForm: FormGroup;
  time: string[] = ['1 week', '2 week', '1 month', '2 month', '1 quarter', '2 quarter', '1 year'];

  constructor(private datePipe: DatePipe,
              private title: Title,
              private statisticService: StatisticService) {
    this.title.setTitle('Thống Kê');
  }

  ngOnInit(): void {
    this.statisticForm = new FormGroup({
      startDate: new FormControl('', [checkStart, dateNotExist]),
      endDate: new FormControl('', [checkEnd, dateNotExist, dateInFuture]),
      type: new FormControl('all'),
      customer: new FormControl('all'),
      styleTime: new FormControl('month'),
      chartStyle: new FormControl('bar')
    }, checkDay);

    this.hiddenChart = false;
    this.hiddenPieChart = true;
    this.statisticService.getStatisticByMonth(
      this.statisticForm.value.startDate,
      this.statisticForm.value.endDate).subscribe((value) => {
      this.listStatistic = value;
      this.destroyChart();
      this.createChartWeek();
      this.createChartMonth();
      this.createChartYear();
    });
  }

  resetValueAndDrawPieChart() {
    this.valueQuantityPieChart = [];
    this.valuePricePieChart = [];
    this.valueCustomerPieChart = [];
    this.namePieChart = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listStatistic.length; i++) {
      this.valueQuantityPieChart.push(this.listStatistic[i].quantity);
      this.valuePricePieChart.push(this.listStatistic[i].price);
      this.valueCustomerPieChart.push(this.listStatistic[i].customer);
      this.namePieChart.push(this.listStatistic[i].time);
    }
    this.destroyChart();
    this.createPieChart1();
    this.createPieChart2();
  }

  onSubmit() {
    console.log(3576575);
    if (this.statisticForm.value.styleTime === 'week') {
      // if (this.statisticForm.value.customer === 'all') {
      if (this.statisticForm.value.chartStyle === 'bar') {
        this.hiddenChart = false;
        this.hiddenPieChart = true;
        this.statisticService.getStatisticByWeek(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.createChartYear();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      } else {
        this.hiddenChart = true;
        this.hiddenPieChart = false;
        this.statisticService.getStatisticByWeek(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            this.listStatistic = value;
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.destroyChart();
            this.resetValueAndDrawPieChart();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      }
      // } else {
      if (this.statisticForm.value.chartStyle === 'bar') {
        this.hiddenChart = false;
        this.hiddenPieChart = true;
        this.statisticService.getStatisticByWeekCustomer(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.createChartYear();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      } else {
        this.hiddenChart = true;
        this.hiddenPieChart = false;
        this.statisticService.getStatisticByWeek(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.resetValueAndDrawPieChart();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      }
      // }
    }

    if (this.statisticForm.value.styleTime === 'month') {
      // if (this.statisticForm.value.customer === 'all') {
      if (this.statisticForm.value.chartStyle === 'bar') {
        this.hiddenChart = false;
        this.hiddenPieChart = true;
        this.statisticService.getStatisticByMonth(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            console.log(value);
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.createChartMonth();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      } else {
        this.hiddenChart = true;
        this.hiddenPieChart = false;
        this.statisticService.getStatisticByMonth(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.resetValueAndDrawPieChart();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      }
    } else {
      if (this.statisticForm.value.chartStyle === 'bar') {
        this.hiddenChart = false;
        this.hiddenPieChart = true;
        this.statisticService.getStatisticByMonthCustomer(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.createChartMonth();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
        // } else {
        this.hiddenChart = true;
        this.hiddenPieChart = false;
        this.statisticService.getStatisticByMonthCustomer(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.resetValueAndDrawPieChart();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      }
      // }
    }

    if (this.statisticForm.value.styleTime === 'year') {
      // if (this.statisticForm.value.customer === 'all') {
      if (this.statisticForm.value.chartStyle === 'bar') {
        console.log(2222);
        this.hiddenChart = false;
        this.hiddenPieChart = true;
        this.statisticService.getStatisticByYear(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            console.log(value);
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            console.log(this.listStatistic);
            this.destroyChart();
            this.createChartYear();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      } else {
        this.hiddenChart = true;
        this.hiddenPieChart = false;
        this.statisticService.getStatisticByYear(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            this.listStatistic = value;
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.destroyChart();
            this.resetValueAndDrawPieChart();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      }
      } else {
      if (this.statisticForm.value.chartStyle === 'bar') {
        this.hiddenChart = false;
        this.hiddenPieChart = true;
        this.statisticService.getStatisticByYearCustomer(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.createChartYear();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      // } else {
        this.hiddenChart = true;
        this.hiddenPieChart = false;
        this.statisticService.getStatisticByYearCustomer(
          this.statisticForm.value.startDate,
          this.statisticForm.value.endDate).subscribe((value) => {
            Swal.fire('Thông Báo !!', 'Thống Kê Thành Công', 'success').then();
            this.listStatistic = value;
            this.destroyChart();
            this.resetValueAndDrawPieChart();
          },
          error => {
            Swal.fire('Thông Báo !!', 'Không Có Dữ Liệu', 'error').then();
            console.log(error);
            this.destroyChart();
          },
        );
      }
      // }
    }
  }

  createChartWeek() {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Số Lượng Sách',
          data: this.listStatistic,
          parsing: {
            xAxisKey: 'time',
            yAxisKey: 'quantity'
          },
          backgroundColor: [
            '#3F51B5'
          ],
          borderWidth: 1
        },
          {
            label: 'Doanh Thu',
            data: this.listStatistic,
            parsing: {
              xAxisKey: 'time',
              yAxisKey: 'price'
            },
            backgroundColor: [
              '#F44336'
            ],
            yAxisID: 'y1',
            borderWidth: 1
          }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Số Lượng Sách',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            }
          },
          x: {
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Thời Gian ( Tuần )',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            },
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Doanh Thu',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            },
            min: 0,
            // max: this.listStatisticByMonth.max
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Top 10 Sách Bán Chạy Theo Tuần',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 10, bottom: 10},
          },
        }
      }
    });
  }

  createChartMonth() {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Số Lượng Sách',
          data: this.listStatistic,
          parsing: {
            xAxisKey: 'time',
            yAxisKey: 'quantity'
          },
          backgroundColor: [
            '#3F51B5'
          ],
          borderWidth: 1
        },
          {
            label: 'Doanh Thu',
            data: this.listStatistic,
            parsing: {
              xAxisKey: 'time',
              yAxisKey: 'price'
            },
            backgroundColor: [
              '#F44336'
            ],
            yAxisID: 'y1',
            borderWidth: 1
          }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Số Lượng Sách',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            }
          },
          x: {
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Thời Gian ( Tháng )',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            },
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Doanh Thu',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            },
            min: 0,
            // max: this.listStatisticByMonth.max
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Top 10 Sách Bán Chạy Theo Tháng',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 10, bottom: 10},
          },
        }
      }
    });
  }

  createChartYear() {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Số Lượng Sách',
          data: this.listStatistic,
          parsing: {
            xAxisKey: 'time',
            yAxisKey: 'quantity'
          },
          backgroundColor: [
            '#3F51B5'
          ],
          borderWidth: 1
        },
          {
            label: 'Doanh Thu',
            data: this.listStatistic,
            parsing: {
              xAxisKey: 'time',
              yAxisKey: 'price'
            },
            backgroundColor: [
              '#F44336'
            ],
            yAxisID: 'y1',
            borderWidth: 1
          }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Số Lượng Sách',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            }
          },
          x: {
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Thời Gian ( Năm )',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            },
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            beginAtZero: true,
            display: true,
            title: {
              display: true,
              text: 'Doanh Thu',
              color: '#F44336',
              font: {
                size: 20,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 10, bottom: 10}
            },
            min: 0,
            // max: this.listStatisticByMonth.max
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Top 10 Sách Bán Chạy Theo Năm',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 10, bottom: 10},
          },
        }
      }
    });
  }

  createPieChart1() {
    this.myPieChart1 = new Chart('myPieChart1', {
      type: 'doughnut',
      data: {
        labels: this.namePieChart,
        datasets: [{
          label: 'Số Lượng Sách',
          data: this.valueQuantityPieChart,
          backgroundColor: [
            'red', 'orange', 'yellow', 'green', 'blue',
            'grey', 'aqua', 'bisque', 'cadetblue', 'brown',
            'darkcyan', 'deeppink'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Số Lượng Sách Bán Chạy Nhất',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 10, bottom: 10},
          },
        }
      }
    });
  }

  createPieChart2() {
    this.myPieChart2 = new Chart('myPieChart2', {
      type: 'doughnut',
      data: {
        labels: this.namePieChart,
        datasets: [{
          label: 'Số Lượng Sách',
          data: this.valuePricePieChart,
          backgroundColor: [
            'red', 'orange', 'yellow', 'green', 'blue',
            'grey', 'aqua', 'bisque', 'cadetblue', 'brown',
            'darkcyan', 'deeppink'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Doanh Thu Sách Bán Chạy Nhất',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 10, bottom: 10},
          },
        }
      }
    });
  }

  destroyChart() {
    console.log('destroy');
    if (this.myChart != null) {
      this.myChart.destroy();
    }
    if (this.myPieChart1 != null) {
      this.myPieChart1.destroy();
    }
    if (this.myPieChart2 != null) {
      this.myPieChart2.destroy();
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
