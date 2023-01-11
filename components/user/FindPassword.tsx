import { useState } from "react"
export default function FindEmail() {
    const [inputs, setInputs] = useState({})
    

    return (<>
        <h2>비밀번호 찾기</h2>
        <form action="/send-data-here">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" minLength={4} maxLength={20} required/>
      </form>
        </>)
}