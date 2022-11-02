import {AbstractControl} from '@angular/forms';
import {isDate} from 'rxjs/internal-compatibility';

function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

export function checkStart(control: AbstractControl) {
  const now = new Date();
  const start = new Date(control.value);

  if (dateDiff(start, now) <= 0) {
    return {checkStart: true};
  }
  return null;
}

export function checkEnd(control: AbstractControl) {
  const now = new Date();
  const end = new Date(control.value);

  if (dateDiff(end, now) < 0) {
    return {checkEnd: true};
  }
  return null;
}

export function checkDay(control: AbstractControl) {
  const start = new Date(control.value.startDate);
  const end = new Date(control.value.endDate);

  if (dateDiff(start, end) <= 0) {
    return {checkDate: true};
  }
  return null;
}

export function checkBirthDay(control: AbstractControl) {
  const birthDay = new Date(control.value);
  if (!isDate(birthDay)) {
    return {dateNotExist: true};
  } else if (dateDiff(birthDay, new Date()) < 365 * 18 || dateDiff(birthDay, new Date()) > 365 * 100) {
    return {checkAge: true};
  }
  return null;
}

export function invalidDate(control: AbstractControl) {
  const start = new Date(control.value.startDate);
  const end = new Date(control.value.endDate);
  end.setDate(end.getDate() - 1);
  if (start > end) {
    return {dateNotValid: true};
  }
  return null;
}

export function dateNotExist(control: AbstractControl) {
  const start = new Date(control.value);
  if (!isDate(start)) {
    return {dateNotExist: true};
  }
  return null;
}

export function dateInFuture(control: AbstractControl) {
  const end = new Date(control.value);
  const check = new Date();
  if (end > check) {
    return {futureDate: true};
  }
  if (!isDate(end)) {
    return {dateNotExist: true};
  }
  return null;
}
