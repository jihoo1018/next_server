
export default function Login(){

    return (
       <> <h1>로그인</h1>
        <form action="/send-data-here" method="post">
        <label htmlFor="first">User_id:</label>
        <input type="text" id="user_id" name="user_id" />
        <label htmlFor="last">Password:</label>
        <input type="text" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      </>
        
 );
}