import { useState } from "react"


export default function UserUpdate() {
    const [inputs, setInputs] = useState({})
    

    return (<>
        <h2>회원정보 수정</h2>
        <form action="/send-data-here" method="put">
        <label htmlFor="email">Email:</label>
        <div id="email" ></div>
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" minLength={4} maxLength={20}/>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"minLength={4}  maxLength={20}/>
        <button type="submit">Submit</button>
      </form>
        </>)
}