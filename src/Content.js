import { useEffect, useState } from "react";


const tabList = ["posts", "comments", "albums","photos", "todos", "users"]


function Content() {
    const [selected, setSelected] = useState("posts")
    const [showItemList, setShowItemList] = useState([])

    const checkAndShowContent = (e) => {
        if(selected === "comments") {
            return e.name
        } else if(selected === "users") {
            return e.email
        }
         else {
            return e.title
        }
    }

    useEffect(()=> {
        console.log("callback");
        fetch(`https://jsonplaceholder.typicode.com/${selected}`)
        .then(res => res.json())
        .then(resultList => setShowItemList(resultList) )

    }, [selected])

    return(
        <div style={{padding: 20}}>
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
        </div>
    )
}

export default Content;