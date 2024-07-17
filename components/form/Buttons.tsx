'use client';
import { AiOutlineReload } from "react-icons/ai";
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { getAuthUser } from "@/utils/actions";
import db from '../../utils/db';
import { revalidatePath } from "next/cache";


type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = '',
  text = 'submit',
  size = 'lg',
}: SubmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <Button
      type='submit'
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <AiOutlineReload className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  )
}

export const toggleFavoriteAction = async (prevState: {
  propertyId: string;
  favoriteId: string | null;
  pathname: string;
}) => {

  const user = await getAuthUser();

  const { propertyId, favoriteId, pathname } = prevState;

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          propertyId,
          profileId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? 'Removed from Faves' : 'Added to Faves' };
  } catch (error) {
    return renderError(error);
  }
};

// helper function for our catch blocks
const renderError = (error: unknown): { message :string } => {
  console.log(error)
  return {
      message: error instanceof Error? error.message: 'Something bad happened'
  }
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  )
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className=' p-2 cursor-pointer'
    >
      {pending ? (
        <TfiReload className=' animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};