import React from "react"

export const Card = ({children}: {children: React.ReactNode}) => {
    return <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        {children}
    </div>
}