import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {StatisticService} from '../service/statistic.service';
import {Chart, registerables} from 'chart.js';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {isDate} from 'rxjs/internal-compatibility';
import * as html2pdf from 'html2pdf.js';
import Swal from 'sweetalert2';
import {CategoryService} from '../service/category.service';

Chart.register(...registerables);

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  listCategory: any;
  listStatistic: any;
  valueAmountPieChart: number[] = [];
  valuePricePieChart: number[] = [];
  namePieChart: string[] = [];

  pastDay = this.datePipe.transform(new Date().setDate(new Date().getDate() - 2000), 'yyyy-MM-dd');
  today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  myChart: Chart;
  myPieChart1: Chart;
  myPieChart2: Chart;
  hiddenChart: boolean;
  hiddenPieChart: boolean;
  statisticForm: FormGroup;
  time: string[] = ['1 week', '2 week', '1 month', '2 month', '1 quarter', '2 quarter', '1 year'];

  constructor(private datePipe: DatePipe,
              private title: Title,
              private categoryService: CategoryService,
              private statisticService: StatisticService) {
    this.title.setTitle('Thống Kê');
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((value) => {
      this.listCategory = value;
    });

    this.statisticForm = new FormGroup({
      startDate: new FormControl(this.pastDay, this.dateNotExist),
      endDate: new FormControl(this.today, this.dateInFuture),
      type: new FormControl('all', Validators.required),
      category: new FormControl('all', Validators.required),
      styleTime: new FormControl('month', Validators.required),
      chartStyle: new FormControl('bar', Validators.required)
    }, this.invalidDate);

    this.hiddenChart = false;
    this.hiddenPieChart = true;
    this.statisticService.getStatisticByMonth(
      this.statisticForm.value.startDate,
      this.statisticForm.value.endDate,
      this.statisticForm.value.type).subscribe((value) => {
      this.listStatistic = value;
      this.destroyChart();
      this.createChartMonth();
    });
  }

  invalidDate(abstractControl: AbstractControl) {
    const v = abstractControl.value;
    const start = new Date(v.startDate);
    const end = new Date(v.endDate);
    end.setDate(end.getDate() - 1);
    if (start > end) {
      return {dateNotValid: true, message: 'Ngày Bắt Đầu Phải Nhỏ Hơn Ngày Kết Thúc'};
    }
    if (start > new Date()) {
      return {futureDate: true, message: 'Ngày Bắt Đầu Không Được Lớn Hơn Ngày Hiện Tại'};
    } else {
      return null;
    }
  }

  dateNotExist(abstractControl: AbstractControl) {
    const v = abstractControl.value;
    const start = new Date(v);
    if (!isDate(start)) {
      return {dateNotExist: true, message: 'Ngày Không Tồn Tại'};
    }
  }

  dateInFuture(abstractControl: AbstractControl) {
    const v = abstractControl.value;
    const end = new Date(v);
    const check = new Date();
    // @ts-ignore
    if (end > check) {
      return {futureDate: true, message: 'Ngày Kết Thúc Không Được Lớn Hơn Ngày Hiện Taị'};
    }
    if (!isDate(end)) {
      return {dateNotExist: true, message: 'Ngày Kết Thúc Không Tồn Tại'};
    } else {
      return null;
    }
  }

  resetValueAndDrawPieChart() {
    this.valueAmountPieChart = [];
    this.valuePricePieChart = [];
    this.namePieChart = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listStatistic.length; i++) {
      this.valueAmountPieChart.push(this.listStatistic[i].amount);
      this.valuePricePieChart.push(this.listStatistic[i].price);
      this.namePieChart.push(this.listStatistic[i].time);
    }
    this.destroyChart();
    this.createPieChart1();
    this.createPieChart2();
  }

  onSubmit() {
    if (this.statisticForm.value.styleTime === 'month') {
      if (this.statisticForm.value.category === 'all') {
        if (this.statisticForm.value.chartStyle === 'bar') {
          this.hiddenChart = false;
          this.hiddenPieChart = true;
          this.statisticService.getStatisticByMonth(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type).subscribe((value) => {
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
            this.statisticForm.value.endDate,
            this.statisticForm.value.type).subscribe((value) => {
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
          this.statisticService.getStatisticByMonthPublisher(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type,
            this.statisticForm.value.category).subscribe((value) => {
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
          this.statisticService.getStatisticByMonthPublisher(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type,
            this.statisticForm.value.category).subscribe((value) => {
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
      }
    }
    if (this.statisticForm.value.styleTime === 'year') {
      if (this.statisticForm.value.category === 'all') {
        if (this.statisticForm.value.chartStyle === 'bar') {
          this.hiddenChart = false;
          this.hiddenPieChart = true;
          this.statisticService.getStatisticByYear(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type).subscribe((value) => {
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
          this.statisticService.getStatisticByYear(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type).subscribe((value) => {
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
          this.statisticService.getStatisticByYearPublisher(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type,
            this.statisticForm.value.category).subscribe((value) => {
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
          this.statisticService.getStatisticByYearPublisher(
            this.statisticForm.value.startDate,
            this.statisticForm.value.endDate,
            this.statisticForm.value.type,
            this.statisticForm.value.category).subscribe((value) => {
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
      }
    }
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
                size: 15,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 20, bottom: 10}
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
                size: 15,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 0, bottom: 10}
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
                size: 15,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 5, bottom: 10}
            },
            min: 0,
            // max: this.listStatisticByMonth.max
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Thống Kê Số Lượng Sách và Doanh Thu Của Công Ty Theo Tháng',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 20, bottom: 0},
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
                size: 15,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 20, bottom: 10}
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
                size: 15,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 0, bottom: 10}
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
                size: 15,
                style: 'normal',
                lineHeight: 1.0
              },
              padding: {top: 5, bottom: 10}
            },
            min: 0,
            // max: this.listStatisticByMonth.max
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Thống Kê Số Lượng Sách và Doanh Thu Của Công Ty Theo Năm',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 20, bottom: 0},
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
          data: this.valueAmountPieChart,
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
            text: 'Thống Kê Số Lượng Sách Của Công Ty Theo Năm',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 20, bottom: 0},
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
            text: 'Thống Kê Số Doanh Thu Của Công Ty Theo Năm',
            position: 'top',
            color: '#F44336',
            font: {
              size: 30,
              style: 'normal',
              lineHeight: 1.0
            },
            padding: {top: 20, bottom: 0},
          },
        }
      }
    });
  }

  destroyChart() {
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
