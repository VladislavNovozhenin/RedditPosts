import React from "react"

interface IDownProps {
    className?: string;
}

export function DownIcon({ className }: IDownProps) {
    return (
        <svg className={className} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9"/>
        </svg>
        
    );
}