export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-slate-200 bg-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} mlathyf. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a
            href="https://github.com/mlathyf"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
