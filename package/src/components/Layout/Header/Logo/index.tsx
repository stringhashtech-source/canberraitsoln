import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      {/* Light logo */}
      <img
  src="/images/logo/canberra_logo_test.svg"
  alt="Canberra IT Solutions"
  className="h-11 w-auto dark:hidden"
/>

<img
  src="/images/logo/canberra_logo_test.svg"
  alt="Canberra IT Solutions"
  className="h-11 w-auto hidden dark:block"
/>
    </Link>
  );
};

export default Logo;
