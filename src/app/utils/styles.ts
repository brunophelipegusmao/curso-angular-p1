import { cva } from 'class-variance-authority';

export const h3Style = cva('font-medium px-3 py-7 italic inline-flex gap-2 text-xl');
export const pStyle = cva('text-red-600 italic font-medium py-6 text-center');
export const articleStyle = cva('w-full max-w-full');
export const mainStyle = cva('w-full max-w-[62.5rem]');
export const codeBlockStyle = cva(
  'block bg-zinc-900 text-emerald-400 font-mono text-sm p-4 rounded-lg border border-zinc-700 overflow-x-auto whitespace-pre',
);

export const inlineCodeStyle = cva(
  'bg-zinc-800 text-emerald-400 font-mono text-sm px-1.5 py-0.5 rounded',
);

export const exempleButton = cva(
  'appearance-auto border border-gray-400 bg-gray-200 text-black px-3 py-1 rounded shadow-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed disabled:shadow-none',
);
