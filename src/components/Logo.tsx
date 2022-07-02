import Link from 'next/link';

type Props = {
  image: string;
  link: string;
  alt: string;
};

const Logo = (props: Props) => (
  <Link href={props.link}>
    <a className="w-full py-5 no-underline group-hover:border-0">
      <img src={props.image} alt={props.alt} className="w-full" />
    </a>
  </Link>
);

export { Logo };
