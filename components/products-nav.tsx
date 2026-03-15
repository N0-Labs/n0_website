export function ProductsNav() {
  return (
    <nav className="flex items-center justify-between py-6 px-0 border-b border-border-tertiary mb-14">
      <span className="font-semibold text-base text-text-primary tracking-tight">
        N0labs
      </span>
      <div className="flex gap-8 items-center">
        <span className="text-sm text-text-secondary cursor-pointer hover:text-text-primary transition">
          Company
        </span>
        <span className="text-sm text-text-primary font-medium cursor-pointer">
          Products
        </span>
        <span className="text-sm text-text-secondary cursor-pointer hover:text-text-primary transition">
          Research
        </span>
        <span className="text-sm text-text-secondary cursor-pointer hover:text-text-primary transition">
          Customers
        </span>
        <button className="text-sm font-medium bg-brand text-white rounded px-[18px] py-2 cursor-pointer hover:opacity-90 transition">
          Request a demo
        </button>
      </div>
    </nav>
  );
}
