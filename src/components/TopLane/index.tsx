
export const TopLane = () => {
  const items = Array(12).fill("Oferta 10% off — Promoção ");
  return (
    <div className="w-full bg-black text-white overflow-hidden py-2 select-none">
      <div className="relative flex whitespace-nowrap">
        <div className="animate-marquee flex gap-6">
          {items.map((text, i) => (
            <p
              key={i}
              className="text-white border-white bg-transparent py-1"
            >
              {text}
            </p>
          ))}
        </div>
        <div className="animate-marquee flex gap-6" aria-hidden="true">
          {items.map((text, i) => (
            <p
              key={"clone-" + i}
              className="text-white border-white bg-transparent py-1"
            >
              {text}
            </p>
          ))}
        </div>
      </div>


      {/* Animation */}
      <style>{`
@keyframes marquee {
0% { transform: translateX(0); }
100% { transform: translateX(-50%); }
}
.animate-marquee {
animation: marquee 18s linear infinite;
}
`}</style>
    </div>
  )
}


