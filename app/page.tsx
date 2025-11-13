import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginPage from "./login/page";

export default async function Home() {
  const session = await getSession();

  // Redirect authenticated users to their respective dashboards
  if (session) {
    const accountType = session.user.accountType?.toLowerCase();
    if (accountType === 'manager') {
      redirect('/manager/dashboard');
    } else if (accountType === 'personaltrainer') {
      redirect('/trainer/dashboard');
    } else if (accountType === 'client') {
      redirect('/client/dashboard');
    }
  }

  return (
    <>
    <h1 className="text-3xl font-bold text-center mt-10 ">Fitness Tracker</h1>
    <LoginPage />
    </>
  );
}
