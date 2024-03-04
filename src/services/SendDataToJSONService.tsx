import { ContactMessage } from "../models/Interfaces";

export const SendDataToJSONService = (data: ContactMessage): Promise<boolean> => {
    return fetch("https://portfolio-rafaelfalves-default-rtdb.firebaseio.com/ContactsForm.json", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200)
            return true
        else
            return false
      })
  }