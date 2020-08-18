import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-chatbubble",
  templateUrl: "./chatbubble.component.html",
  styleUrls: ["./chatbubble.component.scss"],
})
export class ChatbubbleComponent implements OnInit {
  @Output() showHideChatWindow = new EventEmitter();
  isChat = false;
  constructor() {}

  ngOnInit(): void {}

  clicked() {
    // alert("clicked");
    this.isChat = !this.isChat;
    this.showHideChatWindow.emit(this.isChat);
  }
}
