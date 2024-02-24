import { useEffect, useState } from "react"


const channels = [
    {
        id: 1,
        name: "Chat room 1"
    },
    {
        id: 2,
        name: "Chat room 2"
    },
    {
        id: 3,
        name: "Chat room 3"
    },
    {
        id: 4,
        name: "Chat room 4"
    },
    {
        id: 5,
        name: "Chat room 5"
    }
]

function FakeChatApp() {

    const [selected, setSelected] = useState()
    const [messageList, setMessageList] = useState([])


    const handleChangeSelected = (channelId)=>{
        setSelected(channelId)
        setMessageList([])
    }


    const handleChatMessage = (e) => {
        setMessageList(prev => [...prev, e.detail])
    }
    
    useEffect(()=> {

        window.addEventListener(`chatroom-${selected}`, handleChatMessage)

        return()=> {
            window.removeEventListener(`chatroom-${selected}`, handleChatMessage)
        }

    }, [selected])

    return(
        <div>
            <ul>
                {channels.map((channel, index) => {
                    return(
                        <li key={index}
                            onClick={() => handleChangeSelected(channel.id)}
                            style={selected === channel.id? {color: "red"} : {color: "black"}}
                        >{channel.name}</li>
                    )
                })}
            </ul>

            <h2>Chat Content</h2>
            {messageList.map((mes, index) => {
                return (
                <span key={index}>{mes}
                    <br/>
                </span>
                )
            })}
        </div>
    )
}

export default FakeChatApp