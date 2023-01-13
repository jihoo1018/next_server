import { onProps } from "@/modules/types";

export default function Login({onChange, onSubmit}: onProps){

    return (
       <> <h1>로그인</h1>
        <form onSubmit={onSubmit}>
        <label htmlFor="first">Email:</label>
        <input type="text" id="email" name="email"
        onChange={onChange} required minLength= {10} maxLength={20}/>
        <label htmlFor="last">Password:</label>
        <input type="text" id="password" name="password" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
      </>
        
 );
}