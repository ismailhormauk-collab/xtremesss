import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
          404 Error
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="max-w-md text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/">Back to Home</LinkButton>
          <LinkButton href="/pricing" variant="secondary">
            View Plans
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
