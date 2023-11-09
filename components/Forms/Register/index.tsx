"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "O nome completo deve ter pelo menos 3 caracteres",
    }).max(50, {
      message: "O nome completo não pode ter mais de 50 caracteres",
    }).refine((value) => /^[A-Za-z\s]+$/.test(value), {
      message: "O nome completo deve conter apenas letras e espaços",
  }),
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
  address: z.string().min(5, {
      message: "O endereço deve ter pelo menos 5 caracteres",
    }).max(50, {
      message: "O endereço não pode ter mais de 50 caracteres",
  }),
  email: z.string().email({
    message: "O email deve ter um formato válido",
  }),
  password: z.string().min(8, {
    message: "A senha deve ter pelo menos 8 caracteres",
    }).refine((value) => /[a-z]/.test(value) && /[A-Z]/.test(value) && /[0-9]/.test(value), {
      message:"A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número",
    })
    .refine((value) => /[^a-zA-Z0-9]/.test(value), {
      message: "A senha deve conter pelo menos um caractere especial",
  }),
})

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const [error] = useState('');

  const handleRegister = async () => {
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome Completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Endereço" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="E-mail" {...field} />
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
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Concordo com os termos e condições</Label>
        </div>
        <Button className="w-full" type="submit">Register</Button>
        {error && <p>{error}</p>}
      </form>
    </Form>
  );
};

export default RegisterForm;
