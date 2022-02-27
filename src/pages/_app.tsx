import { AppProps } from "next/app";
import { defaultTheme } from "site-settings/site-theme/default";
import { useApollo } from "utils/apollo";
import { messages } from "site-settings/site-translation/messages";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "contexts/language/language.provider";
import { CartProvider } from "contexts/cart/use-cart";
import { ProfileProvider } from "contexts/profile/profile.use";
import { AppProvider } from "contexts/app/app.provider";
import { AuthProvider } from "contexts/auth/auth.provider";
import { LayoutProvider } from "contexts/layout/layout.use";
import { ProductProvider } from "contexts/product/product.use";
import { TeamProvider } from "contexts/team/team.use";

import { GlobalStyle } from "assets/styles/global.style";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={defaultTheme}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <GlobalStyle />
        <CartProvider>
          <AppProvider>
            <LanguageProvider messages={messages}>
              <AuthProvider>
                <LayoutProvider>
                  <ProfileProvider>
                    <ProductProvider>
                      <TeamProvider>
                        <Component {...pageProps} />
                      </TeamProvider>
                    </ProductProvider>
                  </ProfileProvider>
                </LayoutProvider>
              </AuthProvider>
            </LanguageProvider>
          </AppProvider>
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
