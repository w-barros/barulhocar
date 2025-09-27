"use client";

import { useId, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type ExclusiveCheckboxGroupProps = {
  name: string; // ex.: "som_automotivo"
  label: string; // ex.: "Som automotivo"
  options: Option[]; // ex.: [{value:'original',label:'Original'}, ...]
  otherValue?: string; // qual value aciona o campo de texto (ex.: "outro")
  descriptionLabel?: string; // label do campo de texto quando "Outro" (ex.: "Qual?...")
  placeholderOther?: string; // placeholder do input "Outro"
  defaultValue?: string | null; // valor inicial
  defaultOtherText?: string; // texto inicial do "Outro"
  required?: boolean; // se o grupo é obrigatório (valide no submit)
  onChange?: (value: string | null, otherText: string) => void;
};

export default function ExclusiveCheckboxGroup({
  name,
  label,
  options,
  otherValue = "outro",
  descriptionLabel = "Qual? Descreva a marca e o modelo.",
  placeholderOther,
  defaultValue = null,
  defaultOtherText = "",
  required = false,
  onChange,
}: ExclusiveCheckboxGroupProps) {
  const idPrefix = useId();
  const [selected, setSelected] = useState<string | null>(defaultValue);
  const [otherText, setOtherText] = useState<string>(defaultOtherText);

  function toggle(value: string) {
    const next = selected === value ? null : value;
    setSelected(next);
    if (onChange) onChange(next, otherText);
  }

  function handleOtherTextChange(v: string) {
    setOtherText(v);
    if (onChange) onChange(selected, v);
  }

  const showOther = selected === otherValue;

  return (
    <div className="mt-10">
      <label className="block font-medium text-lg mb-0">{label}</label>

      <div className="flex flex-wrap flex w-full justify-between mt-1 max-w-xl">
        {options.map((opt, idx) => {
          const inputId = `${idPrefix}-${name}-${idx}`;
          const checked = selected === opt.value;

          return (
            <label
              key={opt.value}
              htmlFor={inputId}
              className="inline-flex items-center gap-3 cursor-pointer select-none"
            >
              <input
                id={inputId}
                type="checkbox"
                className="h-10 w-10 accent-white ring-2 ring-black"
                checked={checked}
                onChange={() => toggle(opt.value)}
              />
              <span className="text-gray-900 text-lg">{opt.label}</span>
            </label>
          );
        })}
      </div>

      {/* Para submissão em forms tradicionais: envia apenas 1 valor */}
      <input type="hidden" name={name} value={selected ?? ""} />

      {/* Campo "Outro" */}
      {showOther && (
        <div className="mt-3">
          <label className="block text-gray-600 font-normal text-lg">
            {descriptionLabel}
          </label>
          <input
            type="text"
            name={`${name}_outro_descricao`}
            value={otherText}
            onChange={(e) => handleOtherTextChange(e.target.value)}
            placeholder={placeholderOther}
            // Só exigimos este campo se "Outro" estiver selecionado
            required={selected === otherValue && required}
            className="mt-1 w-full max-w-xl border-black border-2 px-3 py-2 mb-8"
          />
        </div>
      )}

      {/* Observação: 'required' em input hidden não funciona. 
         Valide no submit (client ou server) se 'required' for true e selected estiver vazio. */}
    </div>
  );
}
