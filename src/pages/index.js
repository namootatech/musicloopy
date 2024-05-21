import { Container } from 'react-bootstrap';
import Layout from '@/components/layout';
import NavigationBar from '@/components/navigation';
import LoginForm from '@/components/profile/login';

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <LoginForm/>
      </main>
    </Layout>
  );
}
