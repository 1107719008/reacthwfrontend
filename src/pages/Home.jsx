import { Layout } from 'antd';
import { useParams } from 'react-router-dom';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import InfoList from '../components/InfoList';
import { useProducts,useInfos } from '../react-query';
const { Header, Content, Footer } = Layout;


function Home() {

  const { categoryName } = useParams();
  const url = categoryName || "";

//for hw
  //const infourl = "";
  const { data, isLoading } = useInfos(url);
  const infos = data?.data || [];

  //const { data, isLoading } = useProducts(url);
  const products = data?.data || [];
  const title = url === ""
    ? "HomeWork-sqlLite"
    : infos[0]?.category.toUpperCase();

  
  console.log(url);
  console.log(data);
  console.log(infos);
  console.log(useInfos);
  
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title={title} isLoading={isLoading} />
      </Header>
      <Content className="layout-content">
        {/*<ProductList products={products} isLoading={isLoading} />*/}
        <InfoList infos={infos} isLoading={isLoading} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
