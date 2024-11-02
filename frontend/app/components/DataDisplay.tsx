'use client';
interface DataDisplayProps {
  isLoading: boolean;
  error: Error | null;
  data: any;
}

export const DataDisplay = ({ isLoading, error, data }: DataDisplayProps) => {
  if (isLoading) return <p className="text-gray-600">載入中...</p>;
  if (error) return <p className="text-red-500">錯誤: {error.message}</p>;
  if (!data) return null;

  return (
    <pre className="bg-gray-50 p-4 rounded overflow-auto">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};