import { Component, OnInit } from '@angular/core';
import { MessageRepository } from 'src/app/Repository/message.repository';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public json = {}; getmessagelist; postMessage = []; messageThread = []

  constructor(private messageRepository: MessageRepository) { }

  ngOnInit(): void {
    // this.getMessageThread()
  }

  // create message
  postmessage() {
    let url = "/messages-drf/message/thread/e0409706b1c44b6cb70343f8bd568845/send/"
    this.json['message'] = "Hii this is test message from Andriod Tech"
    this.json['subject'] = "Test message"

    const postMsg$ = this.messageRepository.postmessage(url, this.json)[1];
    postMsg$.subscribe(data => {
      console.log('post message', data)
      if (data != null || data != undefined) {
        this.postMessage.push(data['data'].content)
        console.log('postmessage for post message', this.postMessage)
      }
    })
  }

  // Get message inbox
  getMessageInbox() {
    let url = "/messages-drf/inbox/"
    const getMsgInbox$ = this.messageRepository.getMessageInbox(url)[1];
    getMsgInbox$.subscribe(data => {
      console.log('Get message Inbox', data)
    })
  }

  // Get message thread
  getMessageThread() {
    let url = "/messages-drf/message/thread/946e7e0db487483e8b9c70aab4e53b53/"
    const getMsgThread$ = this.messageRepository.getMessageThread(url)[1];
    getMsgThread$.subscribe(data => {
      console.log('Get Message Thread', data)
      if (data == null || data == undefined || data.length == 0) {
      } else {
        console.log('mesage list', data[0])
        this.messageThread = data[0].messages
      }
    })
  }
}
