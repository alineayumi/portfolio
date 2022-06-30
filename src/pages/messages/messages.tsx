import { addDoc, collection, Firestore, getDocs } from 'firebase/firestore/lite'
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
      <div className="flex items-center min-h-screen text-lg bg-background">
        <form action="" className="p-10 mx-auto rounded md:w-2/3 lg:w-1/2">
          <div className="shadow">
            <div className="flex items-center rounded-t-lg border border-surface">
              <label
                htmlFor="from"
                className="p-4 mr-8 w-20 text-right text-primary"
              >
                From
              </label>
              <input
                type="text"
                name="from"
                id="from"
                placeholder="Put in your name"
                className="overflow-hidden flex-1 p-4 pl-0 text-primary  placeholder:text-secondary text-ellipsis bg-transparent outline-none"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-10 rounded-b-lg border border-surface">
              <label
                htmlFor="message"
                className="p-4 mr-8 w-20 text-right text-primary"
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
                className="overflow-hidden flex-1 p-4 pl-0 text-primary placeholder:text-secondary text-ellipsis bg-transparent outline-none"
              />
            </div>
          </div>
          <button
            className="block py-4 w-full font-bold text-white bg-tertiary rounded shadow"
            onClick={() => MakeMessage()}
          >
            Submit
          </button>
        </form>
      </div>

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
