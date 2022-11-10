import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import firebase from 'firebase';
import {Title} from '@angular/platform-browser';

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  nickname = '';
  displayedColumns: string[] = ['roomname'];
  rooms = [];
  isLoadingResults = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public datepipe: DatePipe,
              private title: Title) {
    this.title.setTitle('Chat');
    this.nickname = localStorage.getItem('nickname');
    firebase.database().ref('rooms/').on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
      this.isLoadingResults = false;
    });
  }

  ngOnInit(): void {
  }

  enterChatRoom(roomname: string) {
    const chat = {roomname: '', nickname: '', message: '', date: '', type: ''};
    chat.roomname = roomname;
    chat.nickname = this.nickname;
    chat.date = this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
    chat.message = ` ${this.nickname} Đã Vào Phòng `;
    chat.type = 'join';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat).then();

    firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(roomname).on('value', (resp: any) => {
      let roomuser = [];
      roomuser = snapshotToArray(resp);
      const user = roomuser.find(x => x.nickname === this.nickname);
      if (user !== undefined) {
        const userRef = firebase.database().ref('roomusers/' + user.key);
        userRef.update({status: 'online'}).then();
      } else {
        const newroomuser = {roomname: '', nickname: '', status: ''};
        newroomuser.roomname = roomname;
        newroomuser.nickname = this.nickname;
        newroomuser.status = 'online';
        const newRoomUser = firebase.database().ref('roomusers/').push();
        newRoomUser.set(newroomuser).then();
      }
    });
    this.router.navigate(['/chat/chatroom', roomname]).then();
  }

  logout(): void {
    localStorage.removeItem('nickname');
    this.router.navigate(['']).then();
  }
}
