import Layout from "../components/Layout";
import NavigationBar from "../components/NavigationBar";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { ErrorResponse, onError } from "@apollo/client/link/error";

const PORT = process.env.SERVER_PORT;

const link = new HttpLink({ uri: `http://localhost:${8080}/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
