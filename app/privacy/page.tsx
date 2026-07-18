import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Culture x Code',
  description: 'How Culture x Code handles inquiries, analytics, and data protection.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-slate-300 lg:px-10">
      <Link href="/" className="text-sm text-cyan-300">← Back home</Link>
      <h1 className="mt-6 text-4xl font-semibold text-white">Privacy policy</h1>
      <p className="mt-4 text-lg text-slate-400">We respect the privacy of every inquiry and only use information you voluntarily share to respond to your project request.</p>

      <div className="mt-8 space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
        <section>
          <h2 className="text-xl font-semibold text-white">Information we collect</h2>
          <p className="mt-2">We collect your name, email address, company, and the details you share in the contact form so we can understand your needs and reply appropriately.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">How we use it</h2>
          <p className="mt-2">Your information is used only for project inquiries, follow-up communication, and service-related conversations. We do not sell your information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-2">For privacy questions, contact hello@culturexcode.com.</p>
        </section>
      </div>
    </main>
  );
}
