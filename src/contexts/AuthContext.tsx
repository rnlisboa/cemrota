import { createContext, ReactNode, useState} from "react";

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps)=>Promise<void>;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({children}: AuthProviderProps)=>{
    const [user, setUser] = useState<UserProps | undefined>();
    
    const isAuthenticated = !!user;

    async function signIn({email, password}:SignInProps){
        alert(email + ' ' + password)
    }
    
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}