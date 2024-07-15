'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

function NavSearch() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  // don't want to do this check with every keystroke (debounce)
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // if we don't have anything we need to reset
  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <Input
      type='search'
      placeholder='time for a change...'
      className='max-w-xs dark:bg-muted '
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      value={search}
    />
  );
}

export default NavSearch;