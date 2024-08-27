import AddDocBtn from "@/components/AddDocBtn";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    redirect("/sign-in");
  }

  const documents = [];
  return (
    <main className="home-container">
      <Header className="sticky top-0 left-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notification
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {documents.length > 0 ? (
        <div></div>
      ) : (
        <div className="document-list-empty">
          <Image
            src="/assets/icons/logo.svg"
            alt="doc"
            width={50}
            height={50}
            className="mx-auto"
          />
          <AddDocBtn
            userId={clerkUser.id}
            email={clerkUser?.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  );
};

export default Home;
