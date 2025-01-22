//notification
//whatsapp, email, textbox

class Notification {
  sendMessage() {}
}

class Whatsapp extends Notification {
  sendMessage() {
    //Logic to send notification via whatsapp
  }
}

class Mail extends Notification {
  sendMessage() {
    //Logic to send notification via mail
  }
}

class Text extends Notification {
  sendMessage() {
    //Logic to send notification via Text
  }
}
