import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atleta do Próprio Corre',
  description: 'Sportlife, saúde e bem‑estar de quem corre atrás da própria vida.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
