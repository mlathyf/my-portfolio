export default function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="group rounded-xl shadow-lg overflow-hidden  bg-white border border-accent transition-all hover:shadow-2xl hover:shadow-accent/20">
      {/* Image Container */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-5 space-y-3 text-center">
        <h3 className="text-xl font-bold text-slate-700">{title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium border text-accent border-accent rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
