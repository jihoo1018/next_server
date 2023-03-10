export interface User{
    user_id? : string,
    email? : string,
    password? : string,
    cpassword?: string, 
    username? : string,
    phone? : string,
    birth? : string,
    address? : string,
    job? : string,
    interests? : string,
    token? : string
    created? : string,
    modified? : string
}

export interface UserLoginInput{
    email: string,
    password: string
}

export interface UserUpdate{
    user_id?: string,
    phone?: string,
    job?: string,
    interests?: string,
    modified?: string
}