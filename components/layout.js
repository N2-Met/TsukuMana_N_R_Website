import Header from "components/header";
import Footer from "components/footer";

//layoutで全ページに共通するヘッダーとフッターを記述。
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
