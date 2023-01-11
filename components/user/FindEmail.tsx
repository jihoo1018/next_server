export default function FindEmail() {
    return (<>
        <h2>이메일찾기</h2>
        <form action="/send-data-here">
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" minLength={4} maxLength={20} required/>
      </form>
        </>)
}