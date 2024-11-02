'use client';
interface FetchButtonProps {
  shouldFetch: boolean;
  isLoading: boolean;
  onFetch: () => void;
  onRefresh: () => void;
}

export const FetchButton = ({ 
  shouldFetch, 
  isLoading, 
  onFetch, 
  onRefresh 
}: FetchButtonProps) => {
  if (!shouldFetch) {
    return (
      <button
        onClick={onFetch}
        className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
      >
        獲取數據
      </button>
    );
  }

  return (
    <button
      onClick={onRefresh}
      disabled={isLoading}
      className={`px-4 py-2 rounded-md text-white transition-colors ${
        isLoading
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-green-500 hover:bg-green-600'
      }`}
    >
      {isLoading ? '更新中...' : '重新整理'}
    </button>
  );
};