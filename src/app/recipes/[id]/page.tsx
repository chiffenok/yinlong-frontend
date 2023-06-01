import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  return {
    title: `Recipe ${params.id}`,
  };
}

export default function Recipe({ params }: Props) {
  const { id } = params;
  return (
    <main>
      <h2>hello, Recipe page {id}</h2>
    </main>
  );
}
