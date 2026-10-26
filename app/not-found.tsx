import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section grid min-h-svh place-items-center text-center">
      <div className="container max-w-md">
        <p className="eyebrow">404</p>
        <h1 className="heading mt-4">Page not found</h1>
        <p className="copy mt-4">The page you requested doesn&apos;t exist.</p>
        <Link href="/" className="button button-primary mt-8">
          Return home
        </Link>
      </div>
    </main>
  );
}
