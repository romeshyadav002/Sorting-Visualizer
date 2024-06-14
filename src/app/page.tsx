import Image from 'next/image';
import SortingVisualizer from '../components/SortingVisualizer';

export default function Home() {
  return (
    <div className="flex items-center justify-end bg-black h-full w-full">
      <SortingVisualizer />
    </div>
  );
}
