import { addDoc, collection, Firestore, getDocs } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import { db } from 'services/firebase_config'

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
  const [message, setMessage] = useState('')
  const [from, setFrom] = useState('')

  useEffect(() => {
    const getFetch = async () => {
      const fetchedMessages: any = []
      const querySnapshot = await getDocs(collection(db, 'messages'))
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({
          message: doc.data().message,
          from: doc.data().from
        })
      })
      setMessages(fetchedMessages)
      setFetched(true)
    }
    if (fetched === false) {
      getFetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const MakeMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, 'messages'), {
        from: from,
        message: message
      })

      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return (
    <div>
      <div className="bg-background flex min-h-screen items-center text-lg">
        <form action="" className="mx-auto rounded p-10 md:w-2/3 lg:w-1/2">
          <div className="shadow">
            <div className="border-surface flex items-center rounded-t-lg border">
              <label
                htmlFor="from"
                className="text-primary mr-8 w-20 p-4 text-right"
              >
                From
              </label>
              <input
                type="text"
                name="from"
                id="from"
                placeholder="Put in your name"
                className="text-primary placeholder:text-secondary flex-1 overflow-hidden text-ellipsis  bg-transparent p-4 pl-0 outline-none"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="border-surface mb-10 flex items-center rounded-b-lg border">
              <label
                htmlFor="message"
                className="text-primary mr-8 w-20 p-4 text-right"
              >
                Message
              </label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Write a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="text-primary placeholder:text-secondary flex-1 overflow-hidden text-ellipsis bg-transparent p-4 pl-0 outline-none"
              />
            </div>
          </div>
          <button
            className="bg-tertiary block w-full rounded py-4 font-bold text-white shadow"
            onClick={() => MakeMessage()}
          >
            Submit
          </button>
        </form>
      </div>

      <p className="text-surface  text-xl">Messages</p>
      {messages.map((msg: any, index) => {
        return (
          <div key={index} className="text-surface flex flex-row">
            <p className="mr-4">{msg?.message}</p>
            <p>from: {msg?.from}</p>
          </div>
        )
      })}
    </div>
  )
}
