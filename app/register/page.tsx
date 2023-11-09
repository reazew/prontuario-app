import RegisterForm from "@/components/Forms/Register";

export default function RegisterPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto p-4 h-screen flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5 text-center">
          Registrar
        </h1>
        <div className="w-full max-w-md">
          <RegisterForm />
        </div>
      </section>
    </main>
  )
}
