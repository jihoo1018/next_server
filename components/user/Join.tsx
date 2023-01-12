const Join: React.FC = () => 
    (<>
        <h2>회원가입</h2>
        <form method="post">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" minLength={4} maxLength={20} required/>
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" minLength={4} maxLength={20} required/>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"minLength={4}  maxLength={20} required/>
        <button type="submit">Submit</button>
      </form>
      </>)

export default Join