interface Props {

  label: string;
}

export const Radio = ({ label, ...props }: Props) => {
  return (

      <label htmlFor={label} className="border border-Slate-500 rounded-sm flex items-center gap-2 w-full px-2 cursor-pointer hover:border-Lime hover:bg-Lime/10 has-checked:bg-Lime/10 has-checked:border-Lime h-[46px] mb-3">
      
        <div className="relative flex gap-6">
          <input 
            className="appearance-none size-5 border checked:border-Lime rounded-full peer" 
            name="mortgage Type"
            value={label} 
            {...props}
            type="radio" 
            id={label} 
          />
            <span className="absolute size-3 bg-Lime rounded-full top-[4px] left-[4px] opacity-0 peer-checked:opacity-100"></span>
          <span className="font-bold">{label}</span>
        </div>
      </label>

  )
}