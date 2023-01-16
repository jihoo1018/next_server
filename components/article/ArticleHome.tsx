type Props = { email: string | undefined}

interface ArticleProps{
    handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit : (e: React.ChangeEvent<HTMLFormElement>) => void
}

export default function ArticleHome({email}: Props){
    return (
        <div>
            <h2>{email}님 반갑습니다</h2>
        </div>
    )
}