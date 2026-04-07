import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/lib/i18n-config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="bg-white min-h-screen flex flex-col text-slate-900">
      <Navbar />
      <div className="flex-grow py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            {dict.aboutPage.title}
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            {dict.aboutPage.subtitle}
          </p>

          {/* The Three Pillars Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="font-bold text-lg mb-2">{dict.aboutPage.pillar1.title}</h3>
              <p className="text-sm text-slate-500">{dict.aboutPage.pillar1.description}</p>
            </div>
            <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="font-bold text-lg mb-2">{dict.aboutPage.pillar2.title}</h3>
              <p className="text-sm text-slate-500">{dict.aboutPage.pillar2.description}</p>
            </div>
            <div className="p-6 border-l-4 border-blue-600 bg-slate-50">
              <h3 className="font-bold text-lg mb-2">{dict.aboutPage.pillar3.title}</h3>
              <p className="text-sm text-slate-500">{dict.aboutPage.pillar3.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}