type TrashIconProps = {
    size?: number
    className?: string
}

export default function TrashIcon({ size = 18, className }: TrashIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="m5,6 1,14 c0,1 1,2 2,2 h8 c1,0 2,-1 2,-2 l1,-14"></path>
            <path d="m10,11 v6"></path>
            <path d="m14,11 v6"></path>
            <path d="M9,6V4c0-1,1-2,2-2h2c1,0,2,1,2,2v2"></path>
        </svg>
    )
}
