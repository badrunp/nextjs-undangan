import Header from "../components/Header";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <Header />
      </Layout>
    </>
  );
}
