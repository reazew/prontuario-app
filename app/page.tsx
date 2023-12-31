import LoginForm from "@/components/Forms/Login";

export default function Home() {
  return (
    <main className="bg-background">
      <section className="container mx-auto p-4 h-screen flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5 text-center">
          Ja possui uma conta ?
        </h1>
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </section>
    </main>
  )
}
