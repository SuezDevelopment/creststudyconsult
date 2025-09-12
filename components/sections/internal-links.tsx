import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LinkItem {
  href: string;
  label: string;
}

interface InternalLinksProps {
  title: string;
  links: LinkItem[];
  description?: string;
}

const InternalLinks = ({ title, links, description }: InternalLinksProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            {description && <p className="mb-4">{description}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-lg font-semibold text-blue-600 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InternalLinks;
