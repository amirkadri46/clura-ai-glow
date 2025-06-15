
export default function SearchSuggestions() {
  // Mock suggestions, adjust as needed
  const suggestions = [
    { label: "ope", value: "Open roles in Europe" },
    { value: "Founders focused on ed-tech or online learning platforms" },
    { value: "People who started companies in AI" },
    { value: "Who works at a VC firm and studied finance?" },
    { value: "People working on AI lead generation" },
  ];

  return (
    <div className="flex flex-row items-center gap-3 mt-4">
      {suggestions.map((s, idx) => (
        <div
          key={s.value}
          className="flex items-center px-4 h-[40px] w-[200px] rounded-[20px] border border-[#D3D3D3] bg-white text-[#888] text-[14px] font-medium shadow transition transform hover:scale-105 hover:shadow"
        >
          {s.label && (
            <span className="px-2 py-0.5 mr-2 rounded bg-[#A78BFA] text-white text-[12px] font-semibold">
              {s.label}
            </span>
          )}
          <span>{s.value}</span>
        </div>
      ))}
    </div>
  );
}
