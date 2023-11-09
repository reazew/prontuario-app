"use client"

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import * as z from "zod";

const formSchema = z.object({
  cpf: z.string().refine((value) => {
    // Função para validar CPF
    const cleanCPF = value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cleanCPF.length !== 11) return false;
  
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
    }
    let rest = sum % 11;
    if (rest < 2) rest = 0;
    else rest = 11 - rest;
  
    if (rest !== parseInt(cleanCPF.charAt(9))) return false;
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
    }
    rest = sum % 11;
    if (rest < 2) rest = 0;
    else rest = 11 - rest;
  
    if (rest !== parseInt(cleanCPF.charAt(10))) return false;
  
    return true;
    }, {
    message: "CPF inválido"
  }),
  password: z.string().min(8, {
      message: "A senha deve ter pelo menos 8 caracteres",
    }).refine((value) => /[a-z]/.test(value) && /[A-Z]/.test(value) && /[0-9]/.test(value), {
      message:"A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número",
    })
    .refine((value) => /[^a-zA-Z0-9]/.test(value), {
      message: "A senha deve conter pelo menos um caractere especial",
    }).refine((value) => !!value, {
      message: "Preencha a senha para continuar",
  })
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const [error] = useState('');

  const handleLogin = async () => {
  };

  return (
    <Form  {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="CPF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Login</Button>
        {error && <p>{error}</p>}
        <div className="flex flex-col items-center justify-center">
          <small className="text-sm font-medium leading-none text-center">Não possiu uma conta ?</small>
          <Button asChild variant="link" >
            <Link href={'/register'}>
            Registre-se <ArrowRight className="ml-2 h-4 w-4" />
            </Link> 
          </Button>
        </div>
      </form>
    </Form>
  );
};