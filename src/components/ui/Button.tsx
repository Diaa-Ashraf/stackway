'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  onClick,
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    'group inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-7 py-3.5 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[var(--accent)] text-[var(--stackway-black)] hover:brightness-110 shadow-[0_4px_24px_-4px_var(--accent-glow)] font-bold',
    secondary:
      'bg-[var(--surface)] border border-[var(--line-strong)] text-white hover:border-[var(--accent)]/50 hover:bg-[var(--surface-strong)] backdrop-blur-md font-semibold',
    accent:
      'bg-[var(--accent)] text-[var(--stackway-black)] hover:brightness-110 shadow-[0_6px_28px_-6px_var(--accent-glow)] font-bold',
    ghost:
      'bg-transparent text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]',
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={size === 'sm' ? 13 : size === 'lg' ? 17 : 15}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 rtl-flip"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
}
