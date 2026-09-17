import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-svh place-items-center p-6 text-center"><div><p className="eyebrow">404 / Not found</p><h1 className="display mt-6">OFF THE<br />MAP.</h1><p className="copy mt-8">The page you requested doesn&apos;t exist.</p><Link href="/" className="button button-dark mt-8">Return home</Link></div></main>;
}
