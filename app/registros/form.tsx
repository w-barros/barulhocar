"use client";

/**
 * Este projeto utiliza **PNPM** como gerenciador de pacotes.
 * Se você instalou dependências com `npm`, execute os passos abaixo para corrigir o lockfile:
 *   1. Remova `node_modules` e `package-lock.json` → `rm -rf node_modules package-lock.json`
 *   2. Instale novamente → `pnpm install`
 *   3. Para adicionar pacotes, use sempre `pnpm add <pacote>`.
 *      Por exemplo, para este formulário precisamos do `@vercel/analytics`:
 *        pnpm add @vercel/analytics
 *   4. Commita o novo `pnpm-lock.yaml`.
 * Assim o deploy não falhará com o erro de *frozen‑lockfile*.
 */

import * as React from "react";
import { useForm } from "react-hook-form";
import { Analytics } from "@vercel/analytics/react";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Tipagem dos dados do formulário
export type RegistrationData = {
  name: string;
  email: string;
  message: string;
};

export default function RegistrationForm() {
  const form = useForm<RegistrationData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onTouched", // valida quando o campo perde o foco pela primeira vez
  });

  const onSubmit = (data: RegistrationData) => {
    // TODO: substituir por chamada de API real
    console.table(data);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-10 flex max-w-md flex-col gap-6"
        >
          {/* Campo Nome */}
          <FormField
            control={form.control}
            name="name"
            rules={{ required: "Nome é obrigatório" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Email */}
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "E‑mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E‑mail inválido",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>E‑mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo Mensagem */}
          <FormField
            control={form.control}
            name="message"
            rules={{ required: "Conte algo legal!" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fale algo legal sobre seu registro</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Compartilhe algo bacana..."
                    className="min-h-[120px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Conte‑nos qualquer detalhe que ache interessante.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Salvar registro
          </Button>
        </form>
      </Form>
      {/* Analytics do Vercel para page views */}
      <Analytics />
    </>
  );
}
