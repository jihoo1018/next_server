type Props = { email: string | undefined}

interface LoginProps{
    handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit : (e: React.ChangeEvent<HTMLFormElement>) => void
}

export default function LoginHome({email}: Props){
    return (
        <div>
            <h2>{email}님 반갑습니다</h2>
        </div>
    )
}