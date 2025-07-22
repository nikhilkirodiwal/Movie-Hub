import { NavLink } from "react-router-dom";
import { useState } from "react";

const categoryData = [
  { name: "Action", image: "https://media.istockphoto.com/id/898222586/de/foto/super-armee-auf-dem-mars.jpg?s=612x612&w=0&k=20&c=-auZCZHBxy9WOSZmdE3XPGSfdEqJPb5tg9vi6Iu11S8=" },
  { name: "Kids", image: "https://images.unsplash.com/photo-1683768814494-5326ac8d7437?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnRvb24lMjBtb3ZpZSUyMHBvc2VydHxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Crime", image: "https://plus.unsplash.com/premium_photo-1682124119930-9c9bc75441fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" },
  { name: "Horror", image: "https://images.unsplash.com/photo-1545859818-2ee8b3610952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvcnJvciUyMG1vdmllfGVufDB8fDB8fHww" },
  { name: "Anime", image: "https://images.unsplash.com/photo-1621478374422-35206faeddfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" },
];

const Category = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
      {categoryData.map((category, index) => (
        <NavLink to={`/category/${category.name.toLowerCase()}`} key={index}>
          <div
            className="relative h-32 bg-gray-900 rounded overflow-hidden text-black text-xl font-semibold flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {category.name}

            {hoveredIndex === index && (
              <img
                src={category.image}
                alt={category.name}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-90 z-10 transition-opacity duration-300"
              />
            )}

            <div className="absolute z-20 text-white text-2xl font-bold">
              {category.name}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Category;
