export interface InputProps {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
}

export interface ButtonProps { 
    url: string;
    setData: React.Dispatch<React.SetStateAction<any>>;
}

export interface OutputProps {
    data: any;
}