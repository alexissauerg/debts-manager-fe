const Box = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={`bg-white rounded-lg p-4 shadow-md w-full h-full ${className}`}>
            {children}
        </div>
    )
}
export default Box;