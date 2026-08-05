function SectionTitle({ title, subtitle }) {
    return (
      <div className="text-center mb-16">
        <p className="text-blue-600 font-semibold tracking-wider uppercase">
          {subtitle}
        </p>
  
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          {title}
        </h2>
      </div>
    );
  }
  
  export default SectionTitle;