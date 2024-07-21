import Link from 'next/link';
import { FaMountain } from 'react-icons/fa6';
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FaMountain className='w-6 h-6' />
      </Link>
    </Button>
  )
}

export default Logo