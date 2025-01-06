
const Logo = () => {
    return (
        <div className=" flex flex-col items-center justify-center h-14 w-14 bg-white rounded-full">
            <div className="h-3 w-3 bg-red-600 rounded-full" />
            <div className="flex">
                <div className="h-3 w-3 bg-green-600 rounded-full" />
                <div className="h-3 w-3 bg-blue-600 rounded-full" />

            </div>
            <div className="flex">
                <div className="h-3 w-3 bg-black rounded-full" />
                <div className="h-3 w-3 bg-orange-300 rounded-full" />
                <div className="h-3 w-3 bg-yellow-600 rounded-full" />

            </div>
        </div>
    )
}

export default Logo;