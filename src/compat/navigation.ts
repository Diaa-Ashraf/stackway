import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export function usePathname(): string {
  const location = useLocation();
  return location.pathname;
}

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (url: string) => navigate(url),
    replace: (url: string) => navigate(url, { replace: true }),
    back: () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => window.location.reload(),
    prefetch: () => {},
  };
}

export { useSearchParams, useParams };

export function notFound(): never {
  throw new Response('Not Found', { status: 404 });
}
