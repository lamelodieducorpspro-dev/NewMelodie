"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, className, children, ...rest }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;
  return (
    <Link href={href} className={resolvedClassName} {...rest}>
      {children}
    </Link>
  );
}
