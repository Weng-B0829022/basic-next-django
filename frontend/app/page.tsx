'use client';
import Image from "next/image";
import { DataDisplay } from '@/app/components/DataDisplay';
import { FetchButton } from '@/app/components/FetchButton';
import { useDataFetch } from '@/app/hooks/useDataFetch';

export default function Home() {
	const { 
		data, 
		error, 
		isLoading, 
		refetch,
		shouldFetch,
		setShouldFetch 
	} = useDataFetch();

	const handleFetchClick = () => {
		setShouldFetch(true);
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Image
			className="dark:invert"
			src="/next.svg"
			alt="Next.js logo"
			width={180}
			height={37}
			priority
			/>

			<div className="w-full max-w-2xl p-4 bg-white rounded shadow">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-bold">從 Django 獲取的數據:</h2>
				<div className="flex gap-2">
				<FetchButton
					shouldFetch={shouldFetch}
					isLoading={isLoading}
					onFetch={handleFetchClick}
					onRefresh={refetch}
				/>
				</div>
			</div>
			<DataDisplay 
				isLoading={isLoading}
				error={error as Error | null}
				data={data}
			/>
			</div>
		</main>
		</div>
	);
}