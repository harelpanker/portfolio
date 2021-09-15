import Link from 'next/link';

export function NavItem({ children, href, className }) {
  return (
    <li>
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    </li>
  );
}

export function SpanText({ children, backgroundImg }) {
  return (
    <span
      className={`block opacity-5 bg-clip-text ease-in-out ${backgroundImg}`}>
      {children}
    </span>
  );
}

export function SMIcon({ children, href, target, rel }) {
  return (
    <a
      className='flex items-center opacity-75 hover:opacity-100 transition-all'
      href={href}
      target={target}
      rel={rel}>
      {children}
    </a>
  );
}

export function Label({ children }) {
  return <label className='text-gray-50 font-bold text-xs'>{children}</label>;
}

export function InputWrapper({ children }) {
  return <div className='flex flex-col gap-1'>{children}</div>;
}

export function Input({ type, name }) {
  return <input className='rounded' type={type} name={name} />;
}

export function Button({ children, href, className }) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}
