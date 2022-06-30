import { collection, Firestore, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import { db } from 'services/firebse_config'

// Get a list of cities from your database
async function getMessages(db: Firestore) {
  const messagesCol = collection(db, 'messages')
  const messageSnapshot = await getDocs(messagesCol)
  const messagesList = messageSnapshot.docs.map((doc) => doc.data())
  return messagesList
}

export default function Messages() {
  const [fetched, setFetched] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getFetch = async () => {
      const fetchedMessages: any = []
      const querySnapshot = await getDocs(collection(db, 'messages'))
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({
          message: doc.data().message,
          from: doc.data().from
        })
        console.log(fetchedMessages)
      })
      setMessages(fetchedMessages)
      setFetched(true)
    }
    if (fetched === false) {
      getFetch()
    }
  }, [])

  return (
    <div>
      <p className="text-xl  text-surface">Messages</p>
      {messages.map((msg: any, index) => {
        return (
          <div key={index} className="flex flex-row text-surface">
            <p className="mr-4">{msg?.message}</p>
            <p>from: {msg?.from}</p>
          </div>
        )
      })}
    </div>
  )
}
