export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:cursor-pointer hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-300">Há 4 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
        Grave uma nota em áudio que será convertida para texto automaticamente.
        Grave uma nota em áudio que será convertida para texto automaticamente.
        Grave uma nota em áudio que será convertida para texto automaticamente.
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  )
}
