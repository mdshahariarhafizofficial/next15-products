import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoginPage = dynamic(() => import("../../components/LoginPage"), {
  ssr: false, // client-only
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
}
