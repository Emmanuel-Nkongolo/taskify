"use client"

import { useOrganization } from "@clerk/nextjs"

export const Info = () => {
    const { organization, isLoaded } = useOrganization()
    return (
        <div>
            Info!
        </div>
    )
}