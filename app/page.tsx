// app/page.tsx
type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
};

const posts: Post[] = [
 const posts: Post[] = [
  {
    slug: 'treino-30-minutos-por-dia',
    title: 'Como treinar 30 minutos por dia sem abandonar o corre',
    category: 'Treino',
    date: '2025-01-09',
    excerpt: 'Rotina enxuta pra conciliar trampo, estudo e treino sem pirar.',
    imageUrl: '/imagens/treino-30-min.jpg',
  },
  {
    slug: 'suplementos-que-valem-o-pix',
    title: 'Suplementos que realmente valem o pix pra quem ganha pouco',
    category: 'Suplementos',
    date: '2025-01-11',
    excerpt: 'Corta o supérfluo e foca só no que ajuda de verdade no corre.',
    imageUrl: '/imagens/suplementos-baratos.jpg',
  },
  {
    slug: 'tenis-custo-beneficio-trampo-treino',
    title: 'Tênis custo-benefício pra trampar em pé e treinar depois',
    category: 'Estilo de Vida',
    date: '2025-01-13',
    excerpt: 'Modelos que aguentam o dia inteiro e ainda seguram o treino.',
    imageUrl: '/imagens/tenis-custo-beneficio.jpg',
  },
  {
    slug: 'rotina-sono-atleta-do-corre',
    title: 'Rotina de sono pro atleta do próprio corre',
    category: 'Mente',
    date: '2025-01-15',
    excerpt: 'Como dormir melhor mesmo acordando cedo e dormindo tarde.',
    imageUrl: '/imagens/sono-atleta.jpg',
  },
];


export default function Home() {
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* HEADER */}
      <header className="border-b border-neutral-800 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex flex-col">
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              ATLETA DO PRÓPRIO CORRE
            </span>
            <span
              className="text-xs text-neutral-400"
              style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
            >
              Discover • sportlife de quem corre atrás da própria vida
            </span>
          </div>
          <nav
            className="hidden gap-4 text-xs text-neutral-300 md:flex"
            style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
          >
            <a href="#treino" className="hover:text-white">Treino</a>
            <a href="#suplementos" className="hover:text-white">Suplementos</a>
            <a href="#mente" className="hover:text-white">Mente</a>
            <a href="#vida" className="hover:text-white">Vida de Corre</a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 space-y-8">
        {/* CARD DESTACADO MAIOR */}
        <section className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <a
            href={`/artigos/${featured.slug}`}
            className="group flex overflow-hidden rounded-md border border-neutral-800 bg-neutral-950/80 hover:bg-neutral-900 transition-colors"
          >
            <div className="relative hidden w-1/2 overflow-hidden md:block">
              <img
                src={featured.imageUrl}
                alt={featured.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <span
                className="text-[11px] uppercase tracking-[0.16em] text-neutral-400"
                style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
              >
                {featured.category} • {new Date(featured.date).toLocaleDateString('pt-BR')}
              </span>
              <h1
                className="text-xl md:text-2xl leading-snug"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                {featured.title}
              </h1>
              <p
                className="text-sm text-neutral-300"
                style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
              >
                {featured.excerpt}
              </p>
              <span className="mt-auto text-[11px] uppercase tracking-[0.16em] text-neutral-400 group-hover:text-white">
                Ler matéria completa →
              </span>
            </div>
          </a>

          <div className="space-y-3 text-sm text-neutral-300"
            style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
          >
            <div className="border border-neutral-800 bg-neutral-950/80 p-3 rounded-md">
              <p className="text-xs uppercase tracking-[0.16em] text-neutral-400 mb-1">
                Destaques do corre
              </p>
              <p>Treinos rápidos, suplementos que valem o pix e guias pra encaixar a vida de atleta no corre real.</p>
            </div>
          </div>
        </section>

        {/* GRID DE CARDS RETANGULARES */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <a
              key={post.slug}
              href={`/artigos/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-md border border-neutral-800 bg-neutral-950/80 hover:bg-neutral-900 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition"
                />
              </div>
              <div className="flex flex-col gap-2 p-3">
                <div
                  className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-neutral-400"
                  style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
                >
                  <span>{post.category}</span>
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <h2
                  className="text-sm leading-snug group-hover:underline underline-offset-4"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-xs text-neutral-300 line-clamp-2"
                  style={{ fontFamily: 'European Grotesk, system-ui, sans-serif' }}
                >
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}