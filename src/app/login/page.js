// এই ফাইলটি Server Component হিসেবে থাকবে, তাই 'use client' থাকবে না
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// ClientLoginForm কে ডাইনামিকভাবে ইম্পোর্ট করা হয়েছে ssr: false সহ
// এটি নিশ্চিত করে যে useSearchParams শুধুমাত্র ক্লায়েন্ট-সাইডে রেন্ডার হবে
const ClientLoginForm = dynamic(() => import('./ClientLoginForm'), {
  ssr: false, // সার্ভার-সাইড রেন্ডারিং বন্ধ করা হয়েছে এই কম্পোনেন্টের জন্য
  loading: () => (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center text-gray-600">
      Loading login form...
    </div>
  ), // লোডিং স্টেট দেখানোর জন্য একটি ফলব্যাক
});

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 px-4">
      {/* ClientLoginForm কে সরাসরি এখানে রেন্ডার করা হবে।
          dynamic import এর 'loading' অপশনটি Suspense-এর মতো কাজ করে।
          তবে, নিরাপত্তা হিসেবে, একটি বাইরের Suspense রাখা খারাপ নয়।
          useSearchParams() যেহেতু client-only, তাই ssr:false ডাইনামিক ইম্পোর্টটিই মূল সমাধান।
      */}
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">Loading page content...</div>}>
         <ClientLoginForm />
      </Suspense>
    </main>
  );
}
