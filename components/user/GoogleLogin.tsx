
export default function GoogleLogin() {
    

    return (<>
        <h2>구글 로그인</h2>
        <form action="/send-data-here" method="post">
        <label htmlFor="email">Email:</label>
        <div id="email" ></div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"minLength={4}  maxLength={20}/>
        <button type="submit">Submit</button>
      </form>
        </>)
}