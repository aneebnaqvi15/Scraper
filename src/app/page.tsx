import { redirect } from 'next/navigation';

export default function HomePage() {
  // TODO: Check authentication status
  // For now, redirect to login
  redirect('/login');
} 