'use server'

import db from './db';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { imageScheme, profileSchema, validateWithZodSchema } from "./schemas"
import { revalidatePath } from 'next/cache';
import { uploadImage } from './supabase';

// helper function to check for routes
const getAuthUser = async() => {
    const user = await currentUser()
    if(!user) {
        throw new Error('Please login to access this page')
    }
    if(!user.privateMetadata.hasProfile) redirect ('/profile/create')
        return user
}

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser()
        console.log(user)
        if(!user) throw new Error('there was an error thanks to typescript')
            const rawData = Object.fromEntries(formData)
            const validatedFields = validateWithZodSchema(profileSchema, rawData)
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
        return renderError(error)
    }
    redirect('/')
}

export const fetchProfileImage = async () => {
    const user = await currentUser();
    if (!user) return null;

    try {
        const profile = await db.profile.findUnique({
            where: {
                clerkId: user.id,
            },
            select: {
                profileImage: true,
            },
        });
        return profile?.profileImage;
    } catch (error) {
        console.error('Error fetching profile image:', error);
        throw error;
    }
};

export const fetchProfile = async () => {
    const user = await getAuthUser()
    const profile = await db.profile.findUnique({
        where: {
            clerkId: user.id
        }
    })
    if(!profile) redirect('/profile/create')
        return profile
}

export const updateProfileAction = async (prevState: any, formData: FormData): Promise<{message:string}> => {
    const user = await getAuthUser()

    try {
        const rawData = Object.fromEntries(formData)
        // when using safeParse you get back different data, but we get back a success property boolean
        const validatedFields = validateWithZodSchema(profileSchema, rawData)

        await db.profile.update({
            where: {
                clerkId: user.id
            },
            data: validatedFields
        })
        revalidatePath('/profile')
        return { message: 'update profile action' }
    } catch (error) {
        return renderError(error)
    }
}

// helper function for our catch blocks
const renderError = (error: unknown): { message :string } => {
    console.log(error)
    return {
        message: error instanceof Error? error.message: 'Something bad happened'
    }
}

export const updateProfileImageAction = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {

    const user = await getAuthUser()
    try {
        const image = formData.get('image') as File
        const validatedFields = validateWithZodSchema(imageScheme, { image })
        // console.log(validatedFields)
        const fullPath = await uploadImage(validatedFields.image)

        await db.profile.update({
            where: {
                clerkId: user.id
            }, data: {
                profileImage: fullPath
            }
        })
        revalidatePath('/profile')

        return { message: 'Profile image updated successfully' }
    } catch (error) {
        return renderError(error)
    }
    
  }