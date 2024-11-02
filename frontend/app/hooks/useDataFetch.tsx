'use client';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from '@/app/services/api';

export const useDataFetch = () => {
    const [shouldFetch, setShouldFetch] = useState(false);

    const query = useQuery({
        queryKey: ['apiData'],
        queryFn: fetchData,
        enabled: shouldFetch,
    });

    return {
        ...query,
        shouldFetch,
        setShouldFetch,
    };
};