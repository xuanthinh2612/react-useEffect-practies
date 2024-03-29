import { useEffect, useState } from "react";


const tabList = ["posts", "comments", "albums","photos", "todos", "users"]


function Content() {
    const [selected, setSelected] = useState("posts")
    const [showItemList, setShowItemList] = useState([])
    const [showTop, setShowTop] = useState(false)
    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        console.log("run useEffect");

        // Cach 1

        const timerId = setInterval(() => {
        setCountDown(pre => pre - 1)
        console.log("setInterval");
      }, 1000)
      return(()=>{
        clearInterval(timerId)
      })

    //   Cach 2
    // const timerId = setTimeout(() => {
    //     setCountDown(countDown - 1)
    // }, 1000)

    //   return(()=>{
    //     clearTimeout(timerId)
    //   })
    // }, [countDown])
    }, [])

    // console.log("re-render");
    const checkAndShowContent = (e) => {

        switch (selected) {
            case "comments":
                return e.name
            case "photos":
                return(
                    <div>
                        <img
                            src={e.thumbnailUrl}
                        />
                        <p>{e.title}</p>
                    </div>
                )    
            case "users":
                return(
                    <span>
                        <p>{e.name}</p>
                        <p>{e.email}</p>
                    </span>
                )    
            default:
                return e.title    
            }
    }

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/${selected}`)
        .then(res => res.json())
        .then(resultList => setShowItemList(resultList) )

    }, [selected])


    useEffect(() => {

        const handleScroll = () => {
           setShowTop( window.scrollY >= 500)
        }

        window.addEventListener("scroll", handleScroll)
        console.log("add event");

        // clean up event after unload component 

        return (() => {
            window.removeEventListener("scroll", handleScroll)
            console.log("remove event");
        })

    }, [])

    return(
        <div style={{padding: 20}}>
            <h1>Count Down: {countDown}</h1>

            <div>
                {tabList.map((tab, index) => {
                    return(
                        <button className={`btn m-2 ${selected === tab ? "btn-success" : "btn-outline-success"}`}
                            key={index}
                            onClick={()=>setSelected(tab)}
                            >{tab}
                        </button>
                    )
                })}
            </div>
            <div>
                <ul>
                    {showItemList.map((e, i) => {
                        return(
                            <li key={e.id}>
                                {checkAndShowContent(e)}
                            </li>)
                    })}
                </ul>
            </div>
            {showTop && <button
                            style={{position: "fixed", 
                                    right: 20,
                                    bottom: 20}}
                            // onClick={}
                            >
                            GO TO TOP
                        </button>
            }
            
        </div>
    )
}

export default Content;