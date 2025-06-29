import { Footer } from "@/components/ui/footer/page";
import { Navbar } from "@/components/ui/navbar/page";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Navbar />

      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
