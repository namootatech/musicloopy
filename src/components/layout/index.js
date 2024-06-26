import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import NavigationBar from '@/components/navigation';
import Footer from '@/components/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Music Loopy</title>
        <meta
          name='description'
          content="Music loopy for artists and producers to collaborate and create music."
        />
        <meta
          name='keywords'
          content="Music Loopy, Music Loopy , music, artists, producers, collaborate, create music, music production, music collaboration, music creation, music platform, music community, music industry, music artists, music producers, music creators, music lovers, music enthusiasts, music fans, music listeners, music makers, music shakers, music movers, music groovers, music shapers, music creators, music innovators, music pioneers, music trailblazers"
        />
        <meta property="og:site_name" content="Music Loopy " />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='og:image' content='/.logo.png' />
        <meta name="og:image:secure_url"  content='/logo.png' />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://musicloopy.netlify.app" />
        <meta name='og:title' content='Music Loopy ' />
        <meta name='og:description' content="Music loopy for artists and producers to collaborate and create music." />
        <meta name='robots' content='follow' />
        <meta charset="UTF-8"/>
        <meta http-equiv="content-language" content="en"/>
        <meta property='og:url' content="https://musicloopy.netlify.app"/>
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href="/apple-touch-icon.png" sizes='any' />
        <link rel='icon' href="/favicon-32x32.png" sizes='any' />
        <link rel='icon' href="/favicon-16x16.png" sizes='any' />
        <link
          rel='icon'
          href="/android-chrome-512x512.png"
          sizes='any'
        />
        <link
          rel='icon'
          href={`/android-chrome-192x192.png`}
          sizes='any'
        />
      </Head>
      {/* <NavigationBar /> */}
      <Container>
        <main>{children}</main>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
