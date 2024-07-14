'use server'

import db from './db';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { profileSchema } from "./schemas"

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser()
        // console.log(user)
        if(!user) throw new Error('there was an error thanks to typescript')
            const rawData = Object.fromEntries(formData)
            const validatedFields = profileSchema.parse(rawData)
            // console.log(validatedFields)
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedFields,
            }
        })
        await clerkClient.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true,
            }
        })
        // return {message: 'profile created'}
    } catch (error) {
        console.log(error)
        return {message: error instanceof Error? error.message: 'Something bad happened'}
    }
    redirect('/')
}