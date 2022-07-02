import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: Props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <meta name="description" content={props.description} />
        <link rel="canonical" href={props.canonical} />
      </Head>
    </>
  );
};

export { Meta };
